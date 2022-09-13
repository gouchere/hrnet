import { useEffect, useState } from "react"

const Paginator=(props)=>{
    const {values, activePage, paginatorFn, rows}=props

    
    let page=activePage
    let maxPage=Math.ceil(values.length/rows)
    let buttons=[]

  function handleClickPrevOrNext(e,next){
        let i=activePage;
        i=(next)?(i+1):(i-1)  
        if(i>=0 && i<maxPage){      
            paginatorFn(i, rows)
        }
    }
    const handleClickOnOnePage=(e,p)=>{
        page=p
        paginatorFn(p, rows)
        //met à jour les style
        Array.from(document.querySelectorAll('.btn-page')).forEach(btn=> btn.classList.remove('active'))
        e.target.classList.add('active')
    }
    
    const buildBuiton=(max)=>{
        const results=[]
        const active=activePage===undefined?0:activePage
        let i=0
        if(max!==Infinity){
            while(i<max){
                if(i===active){
                    results.push(<button key={i+1} className="active btn-page" data-page={i} 
                                         >{i+1}</button>)
                }else{
                    results.push(<button  key={i+1} className="btn-page" data-page={i} 
                                         >{i+1}</button>)
                }
               i++
            }
        }       
         return results 
    }
    
    const init=()=>{
        maxPage=(Math.ceil(values.length/rows))
        buttons=buildBuiton(maxPage)
        Array.from(document.querySelectorAll('.btn-page')).forEach((b)=> {
            const p=b.getAttribute('data-page')
            b.addEventListener('click', (e)=>handleClickOnOnePage(e,p))
        })
    }
    init()

    return(
        <> 
            <div className="data-list-paginator">
                <button className='btn-prev-page' onClick={(e)=>handleClickPrevOrNext(e,false)}> Prévious </button>
                {buttons}
                <button className="btn-next-page" onClick={(e)=>handleClickPrevOrNext(e,true)}> Next </button>
            </div>
        </>
    )
}
export default Paginator