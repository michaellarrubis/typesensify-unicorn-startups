import { FC } from 'react'
import { connectHits } from 'react-instantsearch-core'

import HitItem from '@/components/HitItem'
import { IHits } from './interface'

const Hits:FC<IHits> = ({ hits }: IHits) => {
  return (
    <div className="w-full">
      {!!hits.length && (<p className="text-[16px] mb-2">Top Results:</p>)}
      {hits.map((hit: any, index: number) => (
        <HitItem key={index} hit={hit} />
      ))}
    </div>
  )
}

export default connectHits(Hits)
