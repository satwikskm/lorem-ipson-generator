import React from 'react'
import {useState,useEffect} from 'react'
import data from '../database/data'
import './lorem.css'


const Lorem = () => {
    const [paragraph,setData]=useState([])
    const [counter,setCounter]=useState(0)
    const [value,setvalue]=useState(false)
    

    const submitHandle = (e) =>{
        e.preventDefault()
        
        let index = parseInt(counter)
        setData(data.slice(0,index))
        setvalue(true)
        
        


    }
const Text = () =>{
    
    if(counter > 0 && value){
    return(
        <div>
            <h1># {counter} Paragraph are generated</h1>
           
        </div>
    )}
    else{
        <div>
        <h1>We are working on it</h1>
    </div>

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
    <div className="paragraph">
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