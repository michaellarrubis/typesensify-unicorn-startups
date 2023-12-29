import { NextApiResponse } from 'next'

function errorHandler(err: any, res: NextApiResponse): void {
  if (typeof err === 'string') {
    const is404 = err.toLowerCase().endsWith('not found')
    const statusCode = is404 ? 404 : 400

    res
      .status(statusCode)
      .json({
        error: {
          message: err,
        },
        status: 'failed',
      })

    return
  }

  res
    .status(500)
    .json({
      error: {
        message: err.message,
      },
      status: 'failed',
    })
}

export { errorHandler }