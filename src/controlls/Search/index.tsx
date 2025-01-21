import React from 'react'
import { ContainerStyles, SearchInputStyles } from './Search.styled'
import { SearchIconStyles, CancelIconStyles } from './Search.styled.icons'

interface SearchProps {
  value:string,
  onChange: (value: string) => void,
  onCancel: () => void,
}

const Search = (props:SearchProps) => {
  const { value, onChange, onCancel } = props

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ''

    onChange(value)
  }

  return (
    <ContainerStyles>
      <SearchIconStyles />
      <SearchInputStyles
        type={'text'}
        placeholder={'Search...'}
        onChange={handleOnChange}
        value={value || ''}
      />
      <CancelIconStyles onClick={onCancel} />
    </ContainerStyles>
  )
}

export default Search

