import { useRef } from 'react'

export default function useDebounceApi(fn, delay) {
  const timeoutRef = useRef(null)

  function debouche(...arg) {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      fn(...arg)
    }, delay)
  }

  return debouche
}
