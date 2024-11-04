export const BASE_URL = 'http://localhost:5077/api'

const ResponseData = (statusCode: any, message: string, data?: any) => {
  if (statusCode == 200) {
    return {
      status: statusCode,
      message: message,
      data: data,
    }
  } else {
    return {
      status: statusCode,
      message: message
    }
  }
}

export {
  ResponseData
}