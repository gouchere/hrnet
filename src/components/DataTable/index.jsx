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
        // mémorise la page en cours su paginator
    const [activePage, setActivePage]=useState(currentPage?currentPage:0)

        const pagineData=(CPage, rows)=>{            
            const nbRows= rows?rows:5;
            const currentP=CPage>=0?CPage:activePage;  
            console.log("Pagine ...", currentP, CPage)          
            setDisplayData(values.slice(currentP*nbRows, (currentP*nbRows)+nbRows))
            setNbRowsI(nbRows)
            setActivePage(currentP)
        }

        useEffect(()=>{
            pagineData(activePage,rows)
        },[])
    return (
    <>
        <table className="table-data">
            <Header columns={columns} title={title} header={header}
                    sortData={sortData}/>
            <Body columns={columns} values={displayData} />
        </table>
        <Footer values={values} rows={nbRowsI} paginatorFn={pagineData}>
            <Paginator values={values} paginatorFn={pagineData} rows={nbRowsI} activePage={activePage}/>
        </Footer>
    </>
    )
}

export default Datatable