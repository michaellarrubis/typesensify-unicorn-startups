import { FC } from 'react'
import { connectHits } from 'react-instantsearch-core'

import HitItem from '@/components/HitItem'
import { IHits } from './interface'

const Hits:FC<IHits> = ({ hits, ...rest }: IHits) => {
  return (
    <div className="w-full">
      {hits.map((hit: any, index: number) => (
        <HitItem key={index} hit={hit} />
      ))}
    </div>
  )
}

export default connectHits(Hits)
