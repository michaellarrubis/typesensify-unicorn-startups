import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiHandler } from '@/backend/lib/api-handler'
import { IStartupListResponse } from '@/services/startups/interface'

export default apiHandler({
  get: getList,
})

async function getList(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const response = await axios.get<IStartupListResponse>('https://run.mocky.io/v3/0c49d266-3d3e-44ce-9456-4c7d443d0316')
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Internal Server Error',
      },
      status: 'failed',
    })
  }
}
