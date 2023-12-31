import { FC } from 'react'
import HitHighlight from '@/components/HitHighlight'
import { IHitItem } from './interface'

const HitItem:FC<IHitItem> = ({ hit }: IHitItem) => {
  return (
    <div className="bg-white rounded mb-4 p-4 flex hover:shadow-md">
      <div className="w-9/12 flex flex-col">
        <div className="flex font-semibold text-[18px] mb-2">
          <HitHighlight hit={hit} attribute={'company'} />
          <div className="ml-2 text-[16px]">
            ($<HitHighlight hit={hit} attribute={'valuation'} />B)
          </div>
        </div>
        <div className="flex">
          <div className="flex items-baseline">
            <p className="mr-1 text-[14px] text-gray-500">Location: </p>
            <HitHighlight hit={hit} attribute={'city'} />,
          </div>
          <HitHighlight hit={hit} attribute={'country'} />
        </div>
        <div className="flex items-baseline">
          <p className="mr-1 text-[14px] text-gray-500">Industry: </p>
          <HitHighlight hit={hit} attribute={'industry'} />
        </div>
        <div className="flex items-baseline">
          <p className="mr-1 text-[14px] text-gray-500">Investors: </p>
          <HitHighlight hit={hit} attribute={'investors'} />
        </div>
      </div>
      <div className="w-3/12 flex justify-end">
        <div className="text-[14px] text-gray-500">
          <HitHighlight hit={hit} attribute={'date_joined'} />
        </div>
      </div>
    </div>
  )
}

export default HitItem
