import React from "react"

import type { AugmentedHeading } from "~shared/subclass-parser"

import { HeadingListItem } from "./HeadingListItem"

type Props = {
  headings: AugmentedHeading[]
}
export function HeadingsList({ headings }: Props) {
  return (
    <ul>
      {headings.map((heading) => (
        <HeadingListItem heading={heading} key={heading.id} />
      ))}
    </ul>
  )
}
