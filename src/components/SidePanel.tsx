import useAppContext from 'customehook/useAppContext'
import { Slider, Switch } from 'antd';
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
        it shouwl dhso
        <div className='price-slider'>
            <Slider range defaultValue={[20, 50]} />
        </div>
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