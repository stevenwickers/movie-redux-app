
export enum StatusTypes {
    OK = 'Ok',
    ERROR = 'Error',
    NOT_READY = 'Not Ready',
}

export interface IError {
    Error: string
    OK: string
    status: number
}

export type AxiosResultType = {
    data: any,
    status: number,
    statusText: string,
}

export const AxiosResultTypeDEF = (): AxiosResultType => {
  return {
    data: [],
    status: 0,
    statusText: StatusTypes.OK,
  }
}
