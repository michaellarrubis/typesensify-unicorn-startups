import { FC } from 'react'
import Hits from '@/components/Hits';

import {
  InstantSearch,
  RefinementList,
  SearchBox,
  Pagination
} from "react-instantsearch-dom";
import { searchClient } from '@/scripts/startups/typesenseClient';

const Main: FC = () => {
  return (
    <main className="h-full container mx-auto">
      <div className="text-center mb-10">
        <p className="text-[50px] font-semibold">Typesens-ify</p>
        <div className="text-[20px] -mt-1">
          Unicorn Startups <small>- <a className="text-blue-400 font-light" href="https://www.kaggle.com/datasets/ramjasmaurya/unicorn-startups" target="_blank">Kaggle Datasets</a></small>
        </div>
      </div>
      <InstantSearch indexName="startups" searchClient={searchClient}>
        <div className="flex mt-8">
          <RefinementList attribute="industry" className="w-3/12" />
          <div className="w-9/12 ml-10">
            <SearchBox />
            <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-300" />
            
            <p className="text-[16px] mb-2">Top Results:</p>
            <Hits />
          </div>
        </div>
      </InstantSearch>
    </main>
  )
}

export default Main
