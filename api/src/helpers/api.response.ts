import { Response } from 'express'

enum StatusCode {
  SUCCESS = '20000',
  FAILURE = '40001'
}

enum TypeErrors {
  TECNICO = 'Tecnico',
  BUSINESS = 'Negocio',
  NOTFOUND = 'Not Found',
  INTERNAL_ERROR = 'Internal error',
  BAD_REQUEST = 'Bad request',
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  UNAUTHORIZED = 'Authentication error',
  ECONNREFUSED = 'ECONNREFUSED',
  ECONNABORTED = 'ECONNABORTED',
  ECONNRESET = 'ECONNRESET'
}

enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  PAYLOAD_TOO_LARGE = 413,
  INTERNAL_ERROR = 500
}

export const SuccessOkResponse = (res: Response, msg = 'OK', data?: unknown): Response => {
  const body = {
    message: msg,
    statusCode: StatusCode.SUCCESS
  }
  if (data !== undefined) Object.assign(body, { data })
  return res.status(ResponseStatus.OK).json(body)
}

export const SuccessCreatedResponse = (res: Response, msg = 'OK', data?: unknown): Response => {
  const body = {
    message: msg,
    statusCode: StatusCode.SUCCESS
  }
  if (data !== undefined) Object.assign(body, { data })
  return res.status(ResponseStatus.CREATED).json(body)
}

export const NotFoundError = (res: Response): Response => {
  return responseError(StatusCode.FAILURE, TypeErrors.NOTFOUND, ResponseStatus.NOT_FOUND, res)
}

export const BadRequestError = (res: Response, message: string = TypeErrors.BAD_REQUEST): Response => {
  return responseError(StatusCode.FAILURE, message, ResponseStatus.BAD_REQUEST, res)
}

export const PayloadTooLargeError = (res: Response, message: string = TypeErrors.PAYLOAD_TOO_LARGE): Response => {
  return responseError(StatusCode.FAILURE, message, ResponseStatus.PAYLOAD_TOO_LARGE, res)
}

export const InternalError = (res: Response): Response => {
  return responseError(StatusCode.FAILURE, TypeErrors.INTERNAL_ERROR, 500, res)
}

export const responseError = (code: string, type: string, statusCode: number, res: Response): Response => {
  return res.status(statusCode).json({
    statusCode: code,
    message: type
  })
}
