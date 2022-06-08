import type { SourceBook } from "./abbreviations"

export enum Rating {
  Bad = "bad",
  Average = "average",
  Good = "good",
  Fantastic = "fantastic"
}

export const RATING_SORT_ORDER: Rating[] = [
  Rating.Fantastic,
  Rating.Good,
  Rating.Average,
  Rating.Bad
]

export const SORTED_RATINGS_ASC = RATING_SORT_ORDER.reverse()

export function sortRatings(a: Rating, b: Rating) {
  return RATING_SORT_ORDER.indexOf(a) - RATING_SORT_ORDER.indexOf(b)
}
export const RATING_CLASS_COLOR_MAP: Record<string, Rating> = {
  "rating-red": Rating.Bad,
  "rating-orange": Rating.Average,
  "rating-green": Rating.Good,
  "rating-blue": Rating.Fantastic
}

export type AugmentedHeading = {
  id: string
  rating: Rating
  text: string
  sourcebook: SourceBook
}

export function getSubclassRatings(): AugmentedHeading[] {
  const headers = Array.from(document.querySelectorAll("h3"))
  return headers
    .map((header) => {
      const ratingElement = header.querySelector("a")
      if (!ratingElement || !RATING_CLASS_COLOR_MAP[ratingElement.className])
        return

      const rating = RATING_CLASS_COLOR_MAP[ratingElement.className]
      const sourcebook = header.querySelector("sup")?.textContent || ""
      return {
        id: header.id,
        rating,
        text: ratingElement.textContent || "",
        sourcebook: sourcebook as SourceBook
      }
    })
    .filter(Boolean) as AugmentedHeading[]
}
