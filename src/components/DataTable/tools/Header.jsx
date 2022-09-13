import { useState } from "react"

const Header=(props)=>{
    const {filter}=props
    const [valueSearch, setValueSearch]=useState("")

    const handleChange=(e)=>{
        setValueSearch(e.target.value)
        filter(e.target.value)
    }

    return(
        <>
            <input placeholder="Rechercher ici ..." type="text" 
                    onInput={(e)=>handleChange(e)}
                    name="global-find" value={valueSearch} />
        </>
    )
}
export default Header