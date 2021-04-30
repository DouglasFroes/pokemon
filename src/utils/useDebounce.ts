import { useRef } from 'react'

export default function useDebounce(fn, delay) {
  const timeoutRef = useRef(null)

  function debouche(...arg) {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      fn(...arg)
    }, delay)
  }

  return debouche
}
