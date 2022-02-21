import {useEffect, useState} from 'react'
type GetUseFetchType = {
    url: string
    method: string
}
const useFetch = ( {url , method }: GetUseFetchType) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState();
    const [isError, setIsError] = useState();
    useEffect(() => {
      async function CallingApi() {
          const res = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
      })
      //const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
      
     // await setData(newData)
     // setDataLoaded(true)
    }
    //setData(apiData.json())
    CallingApi();
    },[])
  return {isLoading, data, isError}
}

export default useFetch
