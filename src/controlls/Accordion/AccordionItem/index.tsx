import { FC } from 'react'
import { AccordionItemStyles, AccordionItemTitleAreaStyles, AccordionTitleStyles, AccordingItemContentStyles } from './AccordionItem.styled'
import { FoldingIconAreaStyles, FoldingIconStyles } from './AccordionItem.styled.icons'

interface Props {
  item: any
  isActive: boolean
  onClick: () => void
}

const AccordionItem:FC<Props> = ({ item, isActive, onClick }) => {
  return (
    <AccordionItemStyles isActive={isActive}>
      <AccordionItemTitleAreaStyles onClick={onClick}>
        <AccordionTitleStyles>
          {item.title}
        </AccordionTitleStyles>
        <FoldingIconAreaStyles id={'FoldingIconAreaStyles'}>
          <FoldingIconStyles isActive={isActive} />
        </FoldingIconAreaStyles>
      </AccordionItemTitleAreaStyles>
      <AccordingItemContentStyles isActive={isActive}>
        {item.content}
      </AccordingItemContentStyles>
    </AccordionItemStyles>
  )
}

export default AccordionItem
