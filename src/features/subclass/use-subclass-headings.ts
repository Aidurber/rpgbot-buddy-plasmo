import groupBy from "lodash.groupby"
import { useMemo } from "react"

import {
  AugmentedHeading,
  Rating,
  getSubclassRatings,
  sortRatings
} from "~shared/subclass-parser"

export function useSubclassHeadings(filter: string) {
  const rawHeadings = getSubclassRatings()
  const headings: Record<string, AugmentedHeading[]> = useMemo(() => {
    const safeFilter = filter.trim().toLocaleLowerCase()
    if (!safeFilter.length) return groupBy(rawHeadings, (h) => h.rating)
    const items: AugmentedHeading[] = rawHeadings.filter(
      (h) =>
        h.text.toLowerCase().includes(safeFilter) ||
        h.sourcebook.toLowerCase().includes(safeFilter)
    )

    return groupBy(items, (h) => h.rating)
  }, [rawHeadings, filter])

  const sortedHeadingKeys = Object.keys(headings).sort((a, b) =>
    sortRatings(a as Rating, b as Rating)
  )
  return { sortedHeadingKeys, headings }
}
