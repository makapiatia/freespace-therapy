import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { NodeRenderer, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";

/**
 * Splits literal "\n" characters inside Contentful rich text into <br />
 * elements, since editors encode line breaks as plain newlines rather than
 * separate paragraph blocks.
 */
const renderText: Options["renderText"] = (text) =>
  text
    .split("\n")
    .flatMap((segment, i) =>
      i === 0 ? [segment] : [<br key={`br-${i}`} />, segment],
    );

/** Renders a single-paragraph rich text document as a plain inline string (no wrapping tag). */
export function renderRichTextInline(document: Document) {
  return documentToReactComponents(document, {
    renderText,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => children,
    },
  });
}

/**
 * Renders a heading-only rich text document (any heading level) as plain
 * inline content, dropping any empty trailing paragraphs the CMS editor adds.
 */
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

/**
 * Renders a multi-paragraph rich text document as separate <p> tags (no
 * className — text styling is inherited from the parent), letting a
 * `space-y-*` utility on the container handle spacing between paragraphs.
 */
export function renderRichTextBody(document: Document) {
  return documentToReactComponents(document, { renderText });
}
