import React from 'react'
import * as Styled from './styled'

interface obj {
  id: number
  title: string
  value?: number
  destiny?: any[]
}

interface propsSelect {
  placeholder: string
  data: obj[]
  selectValue?: (item: any[]) => void
}

function Select(props: propsSelect, ref: any) {
  const { placeholder, data, selectValue } = props
  return (
    <Styled.Select
      ref={ref}
      onChange={() => {
        if (selectValue) {
          selectValue(data[parseInt(ref?.current?.value) - 1]?.destiny)
        }
      }}
      defaultValue={placeholder}
      aria-label="select-01"
    >
      <option value={placeholder} disabled>
        {placeholder}
      </option>
      {data?.map(item => (
        <option value={item.value || item.id} key={item.id}>
          {item.title}
        </option>
      ))}
    </Styled.Select>
  )
}

export default React.forwardRef(Select)
