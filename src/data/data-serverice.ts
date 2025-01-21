import { AxiosResultType, IError } from './axios-models'
import { selectData } from './data-utils'

export const getData = async (endpoint:string, action:any, dispatch: any, token:string= '') => {
  const result:AxiosResultType = await selectData(endpoint, token)

  if(result.status === 200) {
    dispatch(action(result.data))
  } else {
    throw new Error(`Unexpected response from ${endpoint} : ${result.status}`)
  }
}