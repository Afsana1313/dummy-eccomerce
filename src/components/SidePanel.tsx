import useAppContext from 'customehook/useAppContext'
import ParamInput from './ParamInput';
import PriceSlider from './PriceSlider';
function SidePanel() {
  const {
    isSidePanelOpen,
    setSidePanelOpen
  } = useAppContext();
  const style = {
        transform: isSidePanelOpen ? "translateX(0)" : "translateX(-100%)",
        transition: 'all 0.7s ease-in'
  }
  const cartStyle = {
    display:  isSidePanelOpen ? "block" : "none"
  }
  return (
    <>
      <div className='sidepanel-container' style={style}>
        
        <PriceSlider/>
        <ParamInput
          title='Filter By Product Type'
          type='productType'
        />
        <ParamInput
          title='Filter By Brand'
          type='brand'
        />
      </div>
      <div
        className='sidepanel-bg'
        style={cartStyle}
        onClick={(e)=> isSidePanelOpen ? setSidePanelOpen(false): null}
      >
      </div>
    </>
  )
}

export default SidePanel