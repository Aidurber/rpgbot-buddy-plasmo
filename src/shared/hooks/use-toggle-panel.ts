import { useStorage } from "@plasmohq/storage"

export function useTogglePanel(): {
  isHidden: boolean
  toggle: () => void
  isLoading: boolean
} {
  const [isHidden, setIsHidden] = useStorage("isPanelHidden", false)

  const toggle = () => {
    const nextValue = !isHidden
    setIsHidden(nextValue)
  }
  return {
    isHidden,
    toggle,
    isLoading: false
  }
}
