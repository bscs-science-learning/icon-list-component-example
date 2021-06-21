/*============================================================
  Reformat classNames to be inline so they don't appear
  stacked in the DOM.
============================================================*/
export const formatClassList = (classList: string): string => {
  return classList
    .replace(/\n/g, '')
    .replace(/[\s]+/g, ' ')
    .trim()
}

/*============================================================
  Combine sets of strings together using the
  specified delimiter.
============================================================*/
export const joinStrings = (delimiter: string, ...strings: string[]): string => {
  return strings.join(delimiter)
}

/*============================================================
  Append the matching variant from the property map.
============================================================*/
export const appendVariantClasses = (classList: string, variants: Record<string, string>, variant: string): string => {
  if (variants.hasOwnProperty(variant)) {
    return joinStrings(' ', classList, variants[variant])
  }

  return classList
}
