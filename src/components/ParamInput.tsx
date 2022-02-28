import SidepanelHeading from './SidepanelHeading'
import useAppContext from 'customehook/useAppContext'
type GetParamProps = {
    title: string,
    type: string
}
function ParamInput(props: GetParamProps) {
    const { brand, productType, searchParam } = useAppContext();
    function onChange(value: string) {
        console.log(value)
        searchParam({
            ...searchParam,
            brand: props.type === 'brand' ? value : searchParam?.brand,
            product_type: props.type === 'productType' ? value : searchParam?.product_type
        })
    }
    return (<>{
         console.log(props.type,brand, productType)
       
      }
        <SidepanelHeading
            title={props.title}
        />
        <div>
            <select name={props.type} id={props.type} onChange={(e) => onChange(e.target.value)}>
                {props.type === 'productType' && !!productType.current && productType.current?.map((i:any) => {
                   return  <option value={i} key={i}>{ i}</option>
                })}
                {props.type === 'brand' && !!brand.current && brand.current?.map((i:any) => {
                    return <option value={i} key={i}>{ i}</option>
                })}
               
            </select>
        </div>
  </>
    
  )
}

export default ParamInput