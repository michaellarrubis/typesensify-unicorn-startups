import { FC, useEffect, useState } from 'react'
import { getStartupListService } from '@/services/startups'
import SearchFilter from '@/components/SearchFilter'

import {
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";
import { searchClient } from '@/scripts/startups/typesenseClient';

const Main: FC = () => {
  const [keywordValue, setKeywordValue] = useState<string>('')

  useEffect(() => {
    getStartupList()
  }, [])

  const getStartupList = async () => {
    // const { data } = await getStartupListService()

    // if (!!data?.data.length)
    // console.log(data.data)
  }

  const handleKeywordChange = (value: string) => {
    console.log('value: ', value)
    setKeywordValue(value)
  }

  return (
    <main className="h-full container mx-auto">
      <div className="text-center mb-10">
        <p className="text-[50px] font-semibold">Typesens-ify</p>
        <div className="text-[20px] -mt-1">
          Unicorn Startups <small>- <a className="text-blue-400 font-light" href="https://www.kaggle.com/datasets/ramjasmaurya/unicorn-startups" target="_blank">Kaggle Datasets</a></small>
        </div>
      </div>
      <InstantSearch indexName="startups" searchClient={searchClient}>
        <SearchBox />
        <RefinementList attribute="company" />
        {/* <MoviesHits /> */}
        <Pagination />
      </InstantSearch>
      <SearchFilter keywordValue={keywordValue} onChangeKeyword={handleKeywordChange} />
    </main>
  )
}

export default Main
