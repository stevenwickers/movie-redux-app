import styled from 'styled-components'

export type DropdownType = {
  value: string,
  label: string,
}

interface IProps {
  options: DropdownType[]
  selectedValue: string
  onChange: (event: any) => void
}

const blankItem = { value: '', label: '-- ALL --' }

const Dropdown = (props: IProps) => {
  const { options, selectedValue, onChange } = props

  const fullOptions = [blankItem, ...options]
  return (
    <SelectStyles
      value={selectedValue}
      onChange={onChange}
    >
      {fullOptions.map((option:any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectStyles>
  )

}

export default Dropdown

const SelectStyles = styled.select`
 width: 200px;
 height: 34px;
 background-color: ${({ theme }) => theme.controls.background };
 color: ${({ theme }) => theme.colors.text };
`

