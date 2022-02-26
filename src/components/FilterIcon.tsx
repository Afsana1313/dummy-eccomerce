import { FilterOutlined } from '@ant-design/icons'
import useAppContext from 'customehook/useAppContext'
function FilterIcon() {
  const {setSidePanelOpen} = useAppContext()
  return (
    <div className='filter-icon'><FilterOutlined
      onClick={() => setSidePanelOpen(true)}
    /></div>
  )
}

export default FilterIcon