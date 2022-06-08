import type { PlasmoContentScript } from "plasmo"
import React from "react"
import { observe } from "selector-observer"

import { Panel } from "~features/subclass/Panel"

const ROOT_ID = "rpgbuddy-ext"

export const config: PlasmoContentScript = {
  matches: ["https://rpgbot.net/dnd5/characters/classes/*/subclasses/*"],
  run_at: "document_end"
}
export const getRootContainer = async () => {
  const sidebar = document.querySelector("aside#sidebar")

  const container = document.createElement("div")
  container.id = ROOT_ID
  container.classList.add("widget")
  sidebar.appendChild(container)
  return container
}

function SubclassContent() {
  return (
    <div className="widget">
      <Panel />
    </div>
  )
}

export default SubclassContent
