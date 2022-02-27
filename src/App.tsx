import './App.scss';
import {useState, createContext, useEffect} from 'react'
import { baseUrl } from 'static/baseUrl';
import axios from 'axios';
import ProductContainer from 'components/ProductContainer';
import SidePanel from 'components/SidePanel';
import { GetProp, GetCartProp, GetSearchParamProps } from 'type/type';
import CartDisplay from 'components/CartDisplay';
import WholeCart from 'components/WholeCart';
import Loader from 'components/Loader';
import SearchParam from 'components/FilterIcon';
//import useFetch from 'customehook/useFetch';
// import apiData from './static/data'
export const ThemeContext = createContext<any>(null);

function App() {
  const [cart, setCart] = useState<GetCartProp[] | null>(null)
  const [data, setData] = useState<GetProp[] | null>(null)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSidePanelOpen, setSidePanelOpen] = useState(false)
  const [totalValue, setTotalValue] = useState<number>(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [searchParam, setSearchParam] = useState<GetSearchParamProps>()
  //const { isLoading } = useFetch(`${baseUrl}`)
  useEffect(() => {
      setSearchParam({
        product_type: '',
         brand: ''
        // price_greater_than: undefined,
        // price_less_than: undefined
      })
      async function CallingApi() {
      const url = `${baseUrl}${!!searchParam?.product_type ? `product_type=${(searchParam?.product_type as string)?.toLowerCase()}` : ``}`
          + `${!!searchParam?.brand ? `&brand=${searchParam?.brand as string}` : ``}`
        //   + `${!!searchParam?.price_greater_than ? `&price_greater_than=${searchParam?.price_greater_than as number}` : ``}`
        // + `${!!searchParam?.price_less_than ? `&price_less_than=${searchParam?.price_less_than as number}` : ``}`
      const res = await axios.get(baseUrl)
      const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
      
      await setData(newData)
      console.log(newData)
      setDataLoaded(true)
    //  setDataLoaded(isLoading)
    }
    //setData(apiData.json())
      CallingApi();
      
  }, [searchParam])
  //setDataLoaded(isLoading);
  const value = {
    data,
    setData,
    cart,
    setCart,
    isCartOpen,
    setCartOpen,
    isSidePanelOpen,
    setSidePanelOpen,
    totalValue,
    setTotalValue
  }
  return (
    <ThemeContext.Provider value={value}>
      <div className="App">
        <SearchParam />
            <SidePanel />
            {dataLoaded ? <ProductContainer/> : <Loader />}
          <CartDisplay />
          <WholeCart /> 
        </div>
    </ThemeContext.Provider>
  );
}

export default App;