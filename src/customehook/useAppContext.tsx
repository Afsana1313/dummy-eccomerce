import { ThemeContext } from "../App";
import { useContext } from "react";
function useAppContext() {
    const {
    cart,    
    data,
    setData,
    setCart,
    isCartOpen,
    setCartOpen,
    isSidePanelOpen,
    setSidePanelOpen,
    totalValue,
    setTotalValue
    } = useContext(ThemeContext)
    return {
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
}
export default useAppContext