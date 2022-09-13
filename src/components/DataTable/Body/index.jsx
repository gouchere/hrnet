import Row from "../tools/Row"

const Body=(props)=>{
    const {values, columns}=props
    return(
        <tbody>
            {
            values && values.map((row)=>{
               return  <Row values={row} columns={columns} header={false} footer={false} body={true} key={row.id} />
            })
            }
            
        </tbody>
    )
}

export default Body