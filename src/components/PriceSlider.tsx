import { Slider } from 'antd';
import SidepanelHeading from './SidepanelHeading'
import useAppContext from 'customehook/useAppContext';

function PriceSlider() {
const {setSearchParam,searchParam} = useAppContext()    
  return (
      <div>{console.log('sidepanel')}
          <SidepanelHeading
            title={'Filter by price'}
          /> 
        <div className='price-slider'>
            
              <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[5, 100]}
                  disabled={false}
                  min={5}
                  max={100}
                  tooltipVisible
                   onAfterChange={(val:any) => setSearchParam({
                       ...searchParam,
                       price_greater_than: val[0],
                       price_less_than: val[1]
                   })}
        />
        {/* <span>{searchParam?.price_greater_than}</span>
         <span>{ searchParam?.price_less_than}</span> */}
        </div>
    </div>
  )
}

export default PriceSlider