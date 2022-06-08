import React from "react"

import type { AugmentedHeading } from "~shared/subclass-parser"

type Props = {
  heading: AugmentedHeading
}

export function HeadingListItem({ heading }: Props) {
  return (
    <li>
      <a href={`#${heading.id}`}>
        {heading.text} ({heading.sourcebook})
      </a>
    </li>
  )
}
