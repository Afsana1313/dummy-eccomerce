import './App.scss';
import {useState, createContext, useEffect, useRef} from 'react'
import { baseUrl } from 'static/baseUrl';
import axios from 'axios';
import ProductContainer from 'components/ProductContainer';
import SidePanel from 'components/SidePanel';
import { GetProp, GetCartProp, GetSearchParamProps } from 'type/type';
import CartDisplay from 'components/CartDisplay';
import WholeCart from 'components/WholeCart';
import Loader from 'components/Loader';
import FilterIcon from 'components/FilterIcon';
//import SearchParam from 'components/FilterIcon';
//import useFetch from 'customehook/useFetch';
// import apiData from './static/data'
export const ThemeContext = createContext<any>(null);
function getUniqueArray(_array: string[])
{
  // in the newArray get only the elements which pass the test implemented by the filter function.
  // the test is to check if the element's index is same as the index passed in the argument.
  let newArray = _array.filter((element: string, index: number, array: string[]) => array.indexOf(element) === index);
  return newArray
}
function App() {
  const [cart, setCart] = useState<GetCartProp[] | null>(null)
  const [data, setData] = useState<GetProp[] | null>(null)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSidePanelOpen, setSidePanelOpen] = useState(false)
  const [totalValue, setTotalValue] = useState<number>(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  const brand = useRef<string[] | null>(null)
  const productType = useRef<string[] | null>(null)
  const [searchParam, setSearchParam] = useState<GetSearchParamProps>({
    product_type: '',
    brand: '',
    price_greater_than: 0 ,
    price_less_than: 100
  })
  //const { isLoading } = useFetch(`${baseUrl}`)
  
  useEffect(() => {    
      async function CallingApi() {
      const url = `${baseUrl}${!!searchParam?.product_type ? `product_type=${(searchParam?.product_type as string)?.toLowerCase()}` : ``}`
          + `${!!searchParam?.brand ? `&brand=${searchParam?.brand as string}` : ``}`
           + `${!!searchParam?.price_greater_than ? `&price_greater_than=${searchParam?.price_greater_than as number}` : ``}`
          + `${!!searchParam?.price_less_than ? `&price_less_than=${searchParam?.price_less_than as number}` : ``}`
        console.log(url)
        const res = await axios.get(url)
        const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
        
      
    setData(newData)
      //console.log(newData)
      setDataLoaded(true)
        if (!!productType.current) {     
      brand.current = getUniqueArray(data?.map((i: GetProp) => i.brand) as string[]);
          productType.current = getUniqueArray(data?.map((i: GetProp) => i.product_type) as string[]);
          console.log(brand.current, productType.current)
    }
    }
   
      CallingApi();
      
  }, [searchParam])
  
  //setDataLoaded(isLoading);
  const value = {
    brand,
    productType,
    data,
    searchParam,
    setSearchParam,
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
  const titleStyle = {
    padding: '50px 0',
    margin: '0',
    marginBottom: '100px',
    backgroundColor: '#f2f2f2'
  }
  return (
    <ThemeContext.Provider value={value}>
      
      <div className="App">
        {/* <SearchParam /> */}
        <h2 style={ titleStyle}>Makeup Balcony</h2>
         <FilterIcon/> 
            <SidePanel />
            {dataLoaded ? <ProductContainer/> : <Loader />}
          <CartDisplay />
          <WholeCart /> 
        </div>
    </ThemeContext.Provider>
  );
}

export default App;