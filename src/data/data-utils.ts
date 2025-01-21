import axios, { AxiosError } from 'axios'
import { AxiosResultType } from './axios-models'
import { BASE_URL } from '../utils/env-utils'
import { ErrorCodes } from '../config/globals'

const handEmoji = String.fromCodePoint(0x1F449)

const axios_header = (token: string) => {
  return {
    headers: { 'Authorization': `Bearer ${token}` }
  }
}

export const selectData = async (endpoint: string, token: string = '') => {
  try {
    const url = BASE_URL + endpoint
    const head = axios_header(token)

    console.log(`${handEmoji} Getting Data: ${endpoint}`)
    const data: AxiosResultType = await axios.get(url, head)

    console.log(data)
    if (data.status !== 200) {
      return {
        ...data,
        data: { 'Error': `Error getting data ${endpoint}` }
      }
    }

    return data
  }catch(e: AxiosError | any) {
    const message = ErrorCodes.NETWORK_ERROR
    console.log(message)
    throw message
  }
}