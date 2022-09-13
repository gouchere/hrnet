import CellHeader from "./CellHeader"
import Cell from "./Cell"
import { useEffect } from "react"

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Row=(props)=>{
    const {columns, header, footer, body, values, className, sortData}=props

    const rowClass=()=>{
        const rowC=className? "data-table-row".concat(className):"data-table-row"
        if(header===true){
            rowC.concat(" header")
        }
        if(footer) {
            rowC.concat(" footer")
        }
        return rowC
    }
    useEffect(()=>{
        
    },[])
    return (
        <tr className={rowClass()}>
            {
                (header===true)?columns.map((cell)=>{    
                    return <CellHeader cellProps={cell} key={cell.field} sortData={sortData} />
                }):""
            } 
            {
                (footer===true && columns)? columns.forEach((cell)=>{                    
                    <CellHeader value={cell} />
                }):null
            }   
            {
                (body===true && columns)? columns.map((cell,idx)=>{
                    return <Cell cellProps={cell} values={values} key={cell.field+""+idx} />
                }):null
            }           
        </tr>
    )
}

export default Row