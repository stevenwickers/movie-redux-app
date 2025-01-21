import { FC, useState } from 'react'
import AccordionItem from './AccordionItem'

interface Props {
    items: any[]
}

const Accordion:FC<Props> = ({ items }:Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      {items.map((item:any, index:number) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />

      ))}
    </>
  )
}

export default Accordion
