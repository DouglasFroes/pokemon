function styleColor(valid: boolean, style: CSSStyleDeclaration) {
  if (valid) {
    style.borderColor = '#7ac142'
  } else {
    style.borderColor = '#FC3F3F'
  }
}

export function validateMinute(minute: HTMLInputElement) {
  const boolean = minute?.value?.length > 0
  styleColor(boolean, minute.style)
  return boolean
}

export function validateSelect(select: HTMLSelectElement) {
  const boolean = parseInt(select?.value) > 0
  styleColor(boolean, select.style)
  return boolean
}
