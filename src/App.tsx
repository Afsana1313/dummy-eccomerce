import './App.scss';
import {useState, createContext, useEffect} from 'react'
import { baseUrl } from 'static/baseUrl';
import axios from 'axios';
import ProductContainer from 'components/ProductContainer';
import SidePanel from 'components/SidePanel';
import { GetProp, GetCartProp } from 'type/type';
import CartDisplay from 'components/CartDisplay';
import WholeCart from 'components/WholeCart';
import Loader from 'components/Loader';
import useFetch from 'customehook/useFetch';
// import apiData from './static/data'
export const ThemeContext = createContext<any>(null);

function App() {
  const [cart, setCart] = useState<GetCartProp[] | null>(null)
  const [data, setData] = useState<GetProp[] | null>(null)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSidePanelOpen, setSidePanelOpen] = useState(false)
  const [totalValue, setTotalValue] = useState<number>(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  //const [searchParam, setSearchParam] = useState()
  //const { isLoading } = useFetch(`${baseUrl}`)
    useEffect(() => {
    async function CallingApi() {
      const res = await axios.get(`${baseUrl}`)
      const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
      
      await setData(newData)
      console.log(newData)
      setDataLoaded(true)
    //  setDataLoaded(isLoading)
    }
    //setData(apiData.json())
    CallingApi();
  }, [])
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
            <SidePanel />
            {dataLoaded ? <ProductContainer/> : <Loader />}
          <CartDisplay />
          <WholeCart /> 
        </div>
    </ThemeContext.Provider>
  );
}

export default App;