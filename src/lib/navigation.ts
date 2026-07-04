export function normalizeSectionId(value: string): string {
  if (!value) return ''
  if (value.startsWith('#/')) return value.slice(2)
  if (value.startsWith('#')) return value.slice(1)
  if (value.startsWith('/')) return value.slice(1)
  return value
}

export function scrollToSection(value: string) {
  const id = normalizeSectionId(value)
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })

  window.history.replaceState(null, '', `#${id}`)
}
