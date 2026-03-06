const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function sanitizeSingleLineInput(value: string, maxLength = 200) {
  return value
    .replace(CONTROL_CHARS, "")
    .replace(/\s+/g, " ")
    .trimStart()
    .slice(0, maxLength);
}

export function sanitizeMultilineInput(value: string, maxLength = 2000) {
  return value
    .replace(CONTROL_CHARS, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimStart()
    .slice(0, maxLength);
}

export function sanitizeAmountInput(value: string, maxLength = 10) {
  return value
    .replace(/[^\d.,]/g, "")
    .replace(/,/g, ".")
    .replace(/(\..*)\./g, "$1")
    .slice(0, maxLength);
}
