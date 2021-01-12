export const GIF_DURATION_IN_MS = 6000
export const FINAL_STEP = 1

export const getRandomArrayElement = (array: [any]) => array ? array[Math.floor(Math.random() * array.length)] : 0

export const IFRAME_WINDOW = window.top[0]