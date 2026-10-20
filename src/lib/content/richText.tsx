import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer";
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

/** Renders a rich text document, dropping any empty trailing paragraphs the CMS editor adds. */
export function renderRichTextHeading(document: Document) {
  return documentToReactComponents(document, {
    renderText,
    renderNode: {
      [BLOCKS.HEADING_1]: (_node, children) => children,
      [BLOCKS.PARAGRAPH]: () => null,
    },
  });
}
