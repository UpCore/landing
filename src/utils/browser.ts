export const isBrowser = () => typeof window !== 'undefined'

export const isMobile = () => isBrowser() && window.innerWidth < 768

export const isHD = () => isBrowser() && window.innerWidth > 1366