import { useEffect } from 'react'

// Observa todos os elementos .reveal da página e adiciona
// .is-visible quando entram na viewport, criando um efeito
// de entrada suave ao rolar a página.
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
