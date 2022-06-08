import React, { useState } from "react"
import styled from "styled-components"

import { Filter } from "~shared/components/Filter"
import { useTogglePanel } from "~shared/hooks/use-toggle-panel"

import { HeadingsList } from "./HeadingsList"
import { useSubclassHeadings } from "./use-subclass-headings"

const PanelContainer = styled.div`
  color: #000;
  padding: 0 16px;
  @media only screen and (prefers-color-scheme: dark) {
    color: #ccc;
  }
`

const GroupLabel = styled.p`
  padding: 8px 0 4px;
  margin: 0;
  text-transform: capitalize;
  font-weight: 500;
`

function PanelContent() {
  const [filter, setFilter] = useState<string>("")
  const { sortedHeadingKeys, headings } = useSubclassHeadings(filter)
  return (
    <>
      <Filter
        id="sourcebook-filter"
        label="Filter subclasses"
        value={filter}
        onChange={setFilter}
        placeholder="Filter"
      />
      {sortedHeadingKeys.map((rating) => {
        const items = headings[rating]
        return (
          <div key={rating}>
            <GroupLabel>{rating}</GroupLabel>
            <HeadingsList headings={items} />
          </div>
        )
      })}
    </>
  )
}
export function Panel() {
  const { isHidden, toggle, isLoading } = useTogglePanel()
  if (isLoading) return null
  return (
    <PanelContainer>
      <h5>
        RPGBOT Buddy{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            toggle()
          }}>
          ({!isHidden ? "hide" : "show"})
        </a>
      </h5>
      {!isHidden ? <PanelContent /> : null}
    </PanelContainer>
  )
}
