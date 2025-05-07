// hooks/useSmoothScroll.ts


export const useSmoothScroll = (ref, config) => {
  const defaultConfig = {
    offset: 0,
    duration: 800,
    ...config
  }

  const executeScroll = () => {
    if (!ref.current) return

    const targetPosition =
      ref.current.getBoundingClientRect().top + window.scrollY
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition - defaultConfig.offset
    let startTime

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / defaultConfig.duration, 1)

      window.scrollTo(0, startPosition + distance * progress)

      if (timeElapsed < defaultConfig.duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return executeScroll
}
