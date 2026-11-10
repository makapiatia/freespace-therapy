// Logo test pages. A decimal page (e.g. 2.1) is a color variant that reuses
// the whole-number logo.
export const PAGE_OPTIONS = ["2.1"];

export function logoOptionUrl(page: string) {
  return `/logos/LogoOptions/LogoOption${page.split(".")[0]}.svg`;
}
