import {useEffect, useState} from 'react'
import {GetProp} from 'type/type'
type GetUseFetchType = {
    url: string,
    func: (d: GetProp) => void
}
const useFetch = ({url, func} : GetUseFetchType) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        if (!url) {return;
        }
        setIsLoading(true);
      async function CallingApi() {
          const res = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      
      const resData = await res.json()
      func(resData)
      console.log(resData)
      //const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
      
     // await setData(newData)
     // setDataLoaded(true)
    }
    //setData(apiData.json())
    CallingApi();
    },[])
  //return {isLoading, resData,isError}
}

export default useFetch
