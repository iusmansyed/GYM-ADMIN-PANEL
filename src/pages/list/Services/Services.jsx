import "../list.scss"
import ServiceDatatable from "../../../components/datatable/Services-datatable"

import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import NewServiceDatatable from "../../../components/datatable/New-Service"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <ServiceDatatable/> */}
        <NewServiceDatatable/>
      </div>
    </div>
  )
}

export default List