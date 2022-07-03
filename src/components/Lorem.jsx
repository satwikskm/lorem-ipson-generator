import React from 'react'
import {useState} from 'react'
import data from '../database/data'
import './lorem.css'


const Lorem = () => {
    const [paragraph,setData]=useState([])
    const [counter,setCounter]=useState(0)
    const [value,setvalue]=useState(false)
    

    const submitHandle = (e) =>{
        
        e.preventDefault()
        if(counter > 0 && counter < data.length){
            let index = parseInt(counter)
        setData(data.slice(0,index))
        setvalue(true)
        // document.getElementsByClassName('paragraph').classList.style.display = 'block'
        document.getElementById('par').style.display="block"

        }
        else{
            document.getElementById('par').style.display="none"

        }
        
        
        


    }
const Text = () =>{
    if(counter > 6){
        return(
            <div>
                <h1>Maximum limit reached</h1>
            </div>
        )
    }
    
    if(counter > 0 && value){
    return(
        <div>
            <h1># {counter} Paragraph are generated</h1>
           
        </div>
    )}
    else{
        return(
        <div>
        <h1>We are working on it</h1>
    </div>
        )
    }
}
  return (
    <div className='main'>
    <section className='container'>
        <div className="nav">
            <h1>Lorem Ipsum Generator</h1>
            <Text />
           
            
        
        <form onSubmit={submitHandle} className='form'>
            <label htmlFor="Counter">Paragraph</label>
            <input 
            type="number" 
            id="counter"
            name='counter'
            value={counter}
            onChange={(e)=>{setCounter(e.target.value);setvalue(false)}}
            />
            <button className='btn' type='submit'>Generate</button>
        </form>
        </div>
       
    </section>
    <div className="text-class">
    {/* <p>{paragraph.map((x)=>x)}</p> */}
    <div className="paragraph" id="par">
    {paragraph.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

    </div>
    
    </div>
    
    {/*Error*/}
    {/* {paragraph.map((item,idx)=>{
        <p id={idx}>{item}</p>
    })} */}
    </div>
  )
}

export default Lorem