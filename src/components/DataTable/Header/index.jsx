import Row from "../tools/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header=(props)=>{
    const {columns, title,header, sortData}= props
    return (
        <thead>
            {title && 
             <tr><th colSpan={columns.length}> 
                <div className="table-header">
                    <span>{title}</span>
                    <div>
                        <span></span>
                        {header && header}
                    </div>
                </div>
             </th></tr>
            }           
            <Row columns={columns} header={true} footer={false} body={false} sortData={sortData} />
        </thead>
    )
}
export default Header