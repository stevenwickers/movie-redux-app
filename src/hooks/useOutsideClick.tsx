import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as Selectors from '../selectors'

const useOutsideClick = (callBackFunction: any) => {
  const ref = useRef(null)
  const userPanelOpen = useSelector(Selectors.selectUserPanelState)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      console.log(userPanelOpen)

      // @ts-ignore
      if(ref.current && !ref.current.contains(event.target)) {
        callBackFunction && callBackFunction()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [])

  return ref
}

export default useOutsideClick