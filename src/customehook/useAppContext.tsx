import { ThemeContext } from "../App";
import { useContext } from "react";
function useAppContext() {
    const {
        cart,
        brand,
        productType,
    searchParam,
    setSearchParam,
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
}
export default useAppContext