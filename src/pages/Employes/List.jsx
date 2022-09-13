import { useState } from "react"
import Datatable from "../../components/DataTable"
import Header from "../../components/DataTable/tools/Header"
import { employes } from "../../fixtures/employes"

const displayStreet=(item)=>{
    if(item){
        return item.adress.street
    }else{
        return ""
    }
}

export default function List(){
    //Fonction de filtrage sur le champ principale
    const [dataList, setDataList]=useState([...employes])

    const mainFilter=(value)=>{                
        if(value!==undefined && value.length>1){
            const results=employes.filter((e)=> {
               return  e.first.toLowerCase().startsWith(value.trim().toLowerCase())
                                            || e.last.startsWith(value.trim().toLowerCase()) 
                 }                           
            )
            setDataList(results)
        }else{
            setDataList([...employes])
        }
    }

    const sortData=(field, type, croissant)=>{
        if(field){
            const datas=[...employes]
            datas.sort((a,b)=>{
                if(field==='street' || field==='city' || field==='state' || field==='zipCode'){
                    return comparator(type, croissant)(a.adress[field],b.adress[field])
                }else{
                    return comparator(type, croissant)(a[field],b[field])
                }                
            })
            setDataList(datas)
        }
    }

    const comparator=(type,croissant)=>{
        switch(type){
            case "string":
                return (a,b)=>{
                    return croissant?a.localeCompare(b):b.localeCompare(a)
                }
            case "number":
                return (a,b)=>{
                    return croissant?a-b:b-a
                }
            case "date":
                return (a,b)=>{
                    return croissant?a-b:b-a
                }
            default:
                break
        }
    }

    const columns=[
        {field: "id", headerName: "Id", type:"number", sortable:true, width:100},
        {field: "first", headerName: "First Name", type:"string", sortable:true, width:150},
        {field: "last", headerName: "Last Name", type:"string", sortable:true, width:150},
        {field: "startDate", headerName: "Start Date", type:"date", sortable:true, width:200},
        {field: "departement", headerName: "Department", type:"string", sortable:true, width:200},
        {field: "birthday", headerName: "Date of Birth", type:"date", sortable:true, width:200},
        {field: "street", headerName: "Street", type:"string", sortable:true, component:displayStreet, width:200},
        {field: "city", headerName: "City", type:"string", sortable:true , component:(item)=> item.adress.city, width:200},
        {field: "state", headerName: "State", type:"string", sortable:true, component:(item)=> item.adress.state, width:200},
        {field: "zipCode", headerName: "Zip Code", type:"string", component:(item)=> item.adress.zipCode, width:100},
    ]
    const HeaderTab=<Header filter={mainFilter}/>

    return(
        <Datatable columns={columns} values={dataList} 
                    sortData={sortData}
                    header={HeaderTab}
                    headerClass="employe-list__header"
                    title="Liste des employes" className="employe-list" 
                    />
    )
}