import React from 'react'
import spinner  from "../assets/spinner.jpg"
import { useState,useEffect } from 'react'

const Jokes = () => {
    const[joke, setJoke] = useState({});
    const[isLoading, setIsLoading] = useState(true);

    const url = "http://api.icndb.com/jokes/random"

    //get a joke when te getjoke function is called

    const getJoke=()=>{
        setIsLoading(true)
        fetch(url)
    .then((response)=>{
        return response.json()

    })
    .then((data)=>{
        console.log(data);
        setJoke(data);
        setIsLoading(false)

    })

    }

    //Call the getjoke function from the useEffect

  useEffect(()=>{
    getJoke()
    
  }, [])


  return (
   <section  className='--flex-center --100vh --bg-primary'>
    <div className='container --card --bg-light --p'>
        <h2>Random Joke Generator</h2>
        <div className='--line'></div>
        {/* The logic below means if the api fetching is still loading,
        display the image, if it has done loading display the jsx */}

        {isLoading ? <div className='--center-all'>(<img  src={spinner} alt ='loading' width={100}/>)</div> :
         ( <>
        <h4>Joke Id: {joke.value.id}</h4>

        <p>{joke.value.joke}</p>
        </>)}
       
        <br/>

        <button className='--btn --btn-primary' onClick={getJoke}>Generate Joke</button>
    </div>
   </section>
  )
}

export default Jokes
