import './App.scss';
import {useEffect, useState, createContext} from 'react'
import { baseUrl } from './static/baseUrl';
import axios from 'axios';
import ProductContainer from './components/ProductContainer';
import SidePanel from './components/SidePanel';
import { GetProp, GetCartProp } from './type/type';
import CartDisplay from './components/CartDisplay';
import WholeCart from './components/WholeCart';
import Loader from './components/Loader';
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

  useEffect(() => {
    async function CallingApi() {
      const res = await axios.get(`${baseUrl}`)
      const newData = res.data.filter((i: GetProp) => i.price !== "0.0")
      
      await setData(newData)
      setDataLoaded(true)
    }
    //setData(apiData.json())
    CallingApi();
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