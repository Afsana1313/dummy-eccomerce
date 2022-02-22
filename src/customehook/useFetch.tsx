import {useEffect, useState} from 'react'
import { GetProp } from 'type/type'
import useAppContext from './useAppContext'
import axios from 'axios'

const useFetch = (url: string) => {
    const { setData } = useAppContext();
   // const [resData, setResData] = useState([{}] as GetProp[])
    const [isLoading, setIsLoading] = useState(false);
    //const [isError, setIsError] = useState('');
    useEffect(() => {
          async function CallingApi() {
      const res = await axios.get(url)
      const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
      
      await setData(newData)
      console.log(newData)
     // setDataLoaded(true)
      setIsLoading(true)
    }
        
    CallingApi();
    },[url])
  return {isLoading}
}

export default useFetch
