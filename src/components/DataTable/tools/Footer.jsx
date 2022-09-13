import { useEffect, useState } from "react"
import Paginator from "./Paginator"
import { defaultPages } from "./utils"

const Footer=(props)=>{
    const {pages, paginatorFn, rows}= props
    const rowsPerPage=pages===undefined? defaultPages:pages
    const [nbRow, setNbRow]=useState(rows?rows:10)

    const handleChangeRowPerPage=(e)=>{
        e.preventDefault()
        setNbRow(e.target.value)
        paginatorFn(0,e.target.value)
    }

    return(
        <>
            <div className="data-list-footer">
                {props.children}
                <select onChange={e=>handleChangeRowPerPage(e)} value={nbRow}  className="select-pages"
                        >
                    {rowsPerPage.map(o=><option value={o} key={o} >{o}</option>)}
                </select>
            </div>
        </>
    )
}
export default Footer