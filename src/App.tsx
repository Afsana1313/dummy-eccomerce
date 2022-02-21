import './App.scss';
import {useEffect, useState, createContext} from 'react'
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
  const [cart, setCart] = useState([{}] as GetCartProp[])
  const [data, setData] = useState([{}] as GetProp[])
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSidePanelOpen, setSidePanelOpen] = useState(false)
  const [totalItem, setTotalItem] = useState<number>(0)
  const [totalValue, setTotalValue] = useState<number>(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [searchParam, setSearchParam] = useState()
  //const {isLoading, data, isError} = useFetch(`${baseUrl}`,'GET')
  useEffect(() => {
    
  }, [])
  const value = {
    data,
    cart,
    setCart,
    isCartOpen,
    setCartOpen,
    isSidePanelOpen,
    setSidePanelOpen,
    totalItem,
    setTotalItem,
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