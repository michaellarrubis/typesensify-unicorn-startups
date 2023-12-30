import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiHandler } from '@/backend/lib/api-handler'
import { IStartupListResponse } from '@/services/startups/interface'

export default apiHandler({
  get: getList,
})

async function getList(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const response = await axios.get<IStartupListResponse>('https://run.mocky.io/v3/e64ebdef-e1a7-4ca8-99f6-ebb648ce9180')
    res.status(200).json(response.data.data)
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Internal Server Error',
      },
      status: 'failed',
    })
  }
}
