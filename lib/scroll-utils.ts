"use client"

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 56 // sticky header 높이 (h-14 = 56px)
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

export function scrollToElement(element: HTMLElement, offset = 0) {
  const elementPosition = element.offsetTop - offset
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  })
}
