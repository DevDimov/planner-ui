import { Select } from '@mui/base/Select'
import { Option } from '@mui/base/Option'
import React from 'react'

export default function SelectMenu() {
  const [value, setValue] = React.useState<number | null>(10)

  return (
    <div>
      <Select value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Option value={10}>Ten</Option>
        <Option value={20}>Twenty</Option>
        <Option value={30}>Thirty</Option>
      </Select>
    </div>
  )
}
