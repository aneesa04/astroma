import React, {useEffect, useState} from 'react'
import {SearchBar, ArticleItems} from '.'
import {useGetArticlesByCategoryQuery} from '../services/astronomicalObjects';
import astronauts from '../assets/trial.jpg';

function PlanetaryInfo() {
let i = 0;
const [coverArticle, setCoverArticle] = useState("");
  const {data, error, isFetching} = useGetArticlesByCategoryQuery("");
  useEffect(()=>{
   setCoverArticle(data?.collection?.items[i]);
  }, [data])
  console.log(data)
  return (
    !isFetching && 
     
    <div className='bg-black h-screen px-5 overflow-hidden'> 
      <SearchBar/>
      <div className="flex pt-10">
     <div className='flex mr-20 pr-4 items-start flex-col w-fit bg-red-400' >
     <div className='w-fit flex items-center bg-green-300'>
     <h3 className='text-white text-5xl font-light leading-normal w-96'>
     {data?.collection?.items[0]?.data[0].title}
      </h3>
      <img src={data?.collection?.items[0].links[0].href} className="w-96 h-60 object-cover" alt="" />
     </div>
     <div className='w-full space-y-5'>
       <p className='text-[#808080] text-xs leading-5 mt-5'>
   {   coverArticle?.data[0].description}
      </p>
      <ul className='text-[#808080] flex text-xs pr-8'>
        <li className='border-r-[1px] border-[#808080] px-5'>Space and Universe</li>
        <li className='border-r-[1px] border-[#808080] px-5 '>{data?.collection?.items[0]?.data[0].photographer.split("/")[1]}</li>
        <li className='px-5 '>Date</li>
      </ul>
     </div>
     </div> 
     <ArticleItems data={data.collection.items} index = {i} setCoverArticle = {setCoverArticle}/>
     </div>
    </div>
    )
  
  
}

export default PlanetaryInfo
