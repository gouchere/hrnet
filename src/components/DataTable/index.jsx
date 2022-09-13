import Body from "./Body"
import Header from "./Header"
import "./asset/style/data-table-style.css"
import Footer from "./tools/Footer"
import { useEffect, useState } from "react"
import Paginator from "./tools/Paginator"

const Datatable=(props)=>{
    const [displayData, setDisplayData]=useState([])
    const {values, 
        columns, 
        displayHeader, 
        displayFooter, 
        title,
        header, 
        sortData,
        paginator, templatePages, currentPage, rows}=props
        const [nbRowsI, setNbRowsI]=useState(rows?rows:5)

        const pagineData=(currentPage, rows)=>{
            const nbRows= rows?rows:5;
            const currentP=currentPage?currentPage:0;            
            setDisplayData(values.slice(currentP*nbRows, (currentP*nbRows)+nbRows))
            setNbRowsI(nbRows)
        }

        useEffect(()=>{
            pagineData(currentPage,rows)
        },[])
    return (
    <>
        <table className="table-data">
            <Header columns={columns} title={title} header={header}
                    sortData={sortData}/>
            <Body columns={columns} values={displayData} />
        </table>
        <Footer values={values} rows={nbRowsI} paginatorFn={pagineData}>
            <Paginator values={values} paginatorFn={pagineData} rows={nbRowsI} />
        </Footer>
    </>
    )
}

export default Datatable