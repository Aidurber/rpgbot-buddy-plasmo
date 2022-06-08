import React from "react"
import styled from "styled-components"

type FilterProps = {
  id: string
  label: string
  placeholder?: string
  value: string
  onChange(value: string): void
}

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  box-sizing: border-box;
`
export function Filter({
  label,
  placeholder,
  value,
  onChange,
  id
}: FilterProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
