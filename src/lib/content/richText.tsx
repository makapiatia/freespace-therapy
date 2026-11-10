import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { NodeRenderer, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type {
  Block,
  Document,
  Inline,
  Node,
  Text,
} from "@contentful/rich-text-types";

const renderText: Options["renderText"] = (text) =>
  text
    .split("\n")
    .flatMap((segment, i) =>
      i === 0 ? [segment] : [<br key={`br-${i}`} />, segment],
    );

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
  options?: { linkClassName?: string },
) {
  const linkClassName = options?.linkClassName;
  return documentToReactComponents(document, {
    renderText,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        documentToPlainText(node) ? <p>{children}</p> : null,
      ...(linkClassName && {
        [INLINES.HYPERLINK]: (node, children) => (
          <a
            href={(node.data as { uri: string }).uri}
            className={linkClassName}
          >
            {children}
          </a>
        ),
      }),
    },
  });
}
