import { ChangeEvent, FC } from 'react'
import { connectHighlight } from 'react-instantsearch-core'
import { IHitHighlight } from './interface'

const HitHighlight:FC<IHitHighlight> = ({ highlight, attribute, hit, ...rest }: IHitHighlight) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  })

  return (
    <>
      {parsedHit.map((part: any, index: number) =>
        part.isHighlighted ? (
          <span key={index} className="font-bold bg-yellow-50">
            <u>{part.value}</u>
          </span>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </>
  )
}

export default connectHighlight(HitHighlight)
