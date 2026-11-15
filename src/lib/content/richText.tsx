import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { NodeRenderer, Options } from "@contentful/rich-text-react-renderer";
import type { ReactNode } from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type {
  Block,
  Document,
  Inline,
  Node,
  Text,
} from "@contentful/rich-text-types";

const splitLines = (text: string, keyPrefix = "") =>
  text
    .split("\n")
    .flatMap((segment, i) =>
      i === 0 ? [segment] : [<br key={`${keyPrefix}br-${i}`} />, segment],
    );

const renderText: Options["renderText"] = (text) => splitLines(text);

function linkText(
  text: string,
  links: Record<string, string>,
  className?: string,
  icon?: (href: string) => ReactNode,
) {
  const escaped = Object.keys(links).map((key) =>
    key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  return text
    .split(new RegExp(`(${escaped.join("|")})`))
    .flatMap((part, i) =>
      links[part] ? (
        <a
          key={`link-${i}`}
          href={links[part]}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {icon?.(links[part])}
          {part}
        </a>
      ) : (
        splitLines(part, `${i}-`)
      ),
    );
}

function documentToPlainText(node: Node): string {
  return "value" in node
    ? (node as Text).value
    : ((node as Block | Inline).content ?? []).map(documentToPlainText).join("");
}

export function renderRichTextInline(document: Document) {
  return documentToReactComponents(document, {
    renderText,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => children,
    },
  });
}

export function renderRichTextHeading(document: Document) {
  const unwrap: NodeRenderer = (_node, children) => children;
  return documentToReactComponents(document, {
    renderText,
    renderNode: {
      [BLOCKS.HEADING_1]: unwrap,
      [BLOCKS.HEADING_2]: unwrap,
      [BLOCKS.HEADING_3]: unwrap,
      [BLOCKS.HEADING_4]: unwrap,
      [BLOCKS.PARAGRAPH]: () => null,
    },
  });
}

export function renderRichTextBody(
  document: Document,
  options?: {
    linkClassName?: string;
    textLinks?: Record<string, string>;
    linkIcon?: (href: string) => ReactNode;
  },
) {
  const linkClassName = options?.linkClassName;
  const textLinks = options?.textLinks;
  const linkIcon = options?.linkIcon;
  return documentToReactComponents(document, {
    renderText: textLinks
      ? (text) => linkText(text, textLinks, linkClassName, linkIcon)
      : renderText,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        documentToPlainText(node) ? <p>{children}</p> : null,
      ...(linkClassName && {
        [INLINES.HYPERLINK]: (node, children) => {
          const href = (node.data as { uri: string }).uri;
          if (!href || !documentToPlainText(node).trim()) return null;
          return (
            <a href={href} className={linkClassName}>
              {linkIcon?.(href)}
              <span className="min-w-0 [overflow-wrap:anywhere]">
                {children}
              </span>
            </a>
          );
        },
      }),
    },
  });
}
