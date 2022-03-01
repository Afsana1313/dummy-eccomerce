import SidepanelHeading from './SidepanelHeading'
import useAppContext from 'customehook/useAppContext'
type GetParamProps = {
    title: string,
    type: string
}
function ParamInput(props: GetParamProps) {
    const { brand, productType, setSearchParam, searchParam } = useAppContext();
     console.log(brand.current)
    function onChange(value: string) {
     
        setSearchParam({
            ...searchParam,
            brand: props.type === 'brand' ? value : searchParam?.brand,
            product_type: props.type === 'productType' ? value : searchParam?.product_type
        })
    }
    return (<>{
         
       
      }
        <SidepanelHeading
            title={props.title}
        />
        <div>
            <select name={props.type} id={props.type} onChange={(e: any) => onChange(e.target.value)}>
                <option value='' key='all'>All</option>
                {props.type === 'productType' &&  productType?.current?.map((i:any) => {
                   return  <option value={i} key={i}>{ i}</option>
                })}
                {props.type === 'brand' && brand?.current?.map((i:any) => {
                    return <option value={i} key={i}>{ i}</option>
                })}
               
            </select>
        </div>
  </>
    
  )
}

export default ParamInput