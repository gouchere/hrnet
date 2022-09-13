import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faArrowCircleDown, faArrowDownAZ, faArrowUpZA, faDisplay} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
/**
 * Celule header
 */
const CellHeader=(props)=>{
    const {cellProps, sortData}=props
    const [triCroissant, setTriCroissant]=useState(false)

    const handleSortData=()=>{
       sortData(cellProps.field,cellProps.type, triCroissant)
        setTriCroissant(!triCroissant)
    }

    const width=()=>{
        return (cellProps.width)?cellProps.width:0
    }
    const className=()=>{
        return cellProps.class? "data-table-col ".concat(cellProps.class):"data-table-col"
    }
    return(
        <th width={width()} className={className()}> 
            {cellProps.headerName} 
            <span>
                {cellProps.sortable &&
                <>
                <FontAwesomeIcon icon={faArrowDownAZ} style={{display:triCroissant?'inline-block':'none'}} onClick={()=>handleSortData()} /> 
                <FontAwesomeIcon icon={faArrowUpZA}  style={{display:triCroissant?'none':'inline-block'}}onClick={()=>handleSortData()}/> 
                </>
                }
                </span>
        </th>
    )
}

export default CellHeader