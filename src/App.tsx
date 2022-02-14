import './App.scss';
import {useEffect, useState, createContext} from 'react'
import { baseUrl } from './static/baseUrl';
import axios from 'axios';
import ProductContainer from './components/ProductContainer';
import SidePanel from './components/SidePanel';
export const ThemeContext = createContext<any>(null);
function App() {
  const [cart, setCart] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
      // fetch(`${baseUrl}`)
      //   .then(res => res.json())
      //   .then (res => console.log(res))
    
    async function CallingApi() {
      const res = await axios.get(`${baseUrl}`)
      console.log(res.data)
      setData(res.data)
    }
    CallingApi();
  },[])
  return (
    <ThemeContext.Provider value={{data,cart, setCart}}>
          <div className="App">
            <SidePanel />
            <ProductContainer
            />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;