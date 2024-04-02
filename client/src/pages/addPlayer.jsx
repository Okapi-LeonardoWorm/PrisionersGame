import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import getDateTime from '../middlewares/get_date_time'


const AddPlayer = () => {
  const [player, setplayer] = useState({
    name: "",
    file: null,
    creationDate: getDateTime().date,
    creationTime: getDateTime().time,
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setplayer(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/sendplayer", player)
      console.log(player)
      navigate('/players')
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className='add'>
      <div className='form'>
        <h1>Add NEW Player</h1>
        <input type="text" placeholder='Name' onChange={handleChange} name='name'/>
        <input type="file" placeholder='Place your player file here' onChange={handleChange} name='file'/>

        <button onClick={handleClick}>Add NEW</button>
      </div>
      <h1>HOW TO BUILD YOUR PLAYER</h1>
      <p>Need to be a .js file</p>
      <p>...</p>
    </div>
  )
}

export default AddPlayer
