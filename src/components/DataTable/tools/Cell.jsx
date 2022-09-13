/**
 * Celule body
 */
 const Cell=(props)=>{
    const {cellProps, values}=props

    const renderCell=()=>{
        if(cellProps.component){
            return cellProps.component(values)
        }else{
            return values[cellProps.field]
        }
    }
    return(
        <td>{renderCell()}</td>
    )
}

export default Cell