import { Slider } from 'antd';
import SidepanelHeading from './SidepanelHeading'
import useAppContext from 'customehook/useAppContext';
function formatter(value: number | undefined) {
  return `$${value}`;
}
function PriceSlider() {
const {setSearchParam,searchParam} = useAppContext()    
  return (
      <div>
          <SidepanelHeading
            title={'Filter by price'}
          /> 
        <div className='price-slider'>
            
              <Slider
                  range
                  defaultValue={[5, 450]}
                  disabled={false}
                  dots={true}
                  min={1}
                  max={4500}
                  tooltipVisible
                //   onAfterChange={(val) => setSearchParam({
                //       ...searchParam,
                //       price_greater_than: val[0],
                //       price_less_than: val[1]
                //   })}
                  tooltipPlacement={'bottom'}
                  tipFormatter={formatter}
              />
        </div>
    </div>
  )
}

export default PriceSlider