import { ThemeContext } from "../App";
import { useContext } from "react";
function useAppContext() {
    const {
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
    } = useContext(ThemeContext)
    return {
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
}
export default useAppContext