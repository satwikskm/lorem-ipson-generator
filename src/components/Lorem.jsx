import React from 'react'
import {useState} from 'react'
import data from '../database/data'
import './lorem.css'


const Lorem = () => {
    const [paragraph,setData]=useState([])
    const [counter,setCounter]=useState()

    const submitHandle = (e) =>{
        e.preventDefault()
        
        let index = parseInt(counter)
        setData(data.splice(0,index))
        console.log(paragraph,counter)


    }
  return (
      <article>
    <section>
        <div className="nav">
            <h1>Lorem Ipsum Generator</h1>
        </div>
        <form onSubmit={submitHandle}>
            <label htmlFor="Counter">Paragraph</label>
            <input 
            type="number" 
            id="counter"
            name='counter'
            value={counter}
            onChange={(e)=>{setCounter(e.target.value)}}
            />
            <button type='submit'>Generate</button>
        </form>
       
    </section>
    <p>{paragraph}</p>
    </article>
  )
}

export default Lorem