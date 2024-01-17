'use client'
import styles from './editPlayerForm.module.css'
import { updatePlayer, deletePlayer } from '@/lib/action'
import { useState } from 'react'
import { useFormState } from 'react-dom'


const EditPlayerForm = ({player}) => {
  
   
  const [state, formAction] = useFormState({
deletePlayer, undefined})

   const [playerState, setPlayerState] = useState({_id: player._id, firstname: player.firstname, lastname: player.lastname, usaWPnum: player.usaWPnum, email: player.email, phone: player.phone, dob: player.dob, age: player.age, year: player.year, gender: player.gender, referrer: player.referrer, isMaster: player.isMaster, duesPaid: player.duesPaid, tournPaid: player.tournPaid, agreeCoC: player.agreeCoC, updatedAt: player.updatedAt})

   const handleChange = (e) => {
     setPlayerState({ ...playerState, [e.target.name]: e.target.value })
   }

   const lastUpdated = playerState.updatedAt.toString()
   
   
  return (

    <div className={styles.container}>
      <form action={formAction}>
           <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Edit Player Details</h1> 
           <input type="hidden" name="_id" value={playerState._id} />
            <div>
              <label htmlFor="firstname">Player First Name: </label>
              <input onChange={handleChange} name="firstname" type="text" className="form-control" id="firstname" value={playerState.firstname} />
            </div>
            <div>
              <label htmlFor="lastname">Player Last Name: </label>
              <input onChange={handleChange} name="lastname" type="text" className="form-control" id="lastname" value={playerState.lastname} />
            </div>
            <div>
              <label htmlFor="usaWPnum">USA Water Polo #: </label>
              <input onChange={handleChange} type="text" name="usaWPnum" id="usaWPnum" value={playerState.usaWPnum} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input onChange={handleChange} type="text" name="email" id="email" value={playerState.email} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input onChange={handleChange} type="text" name="phone" id="phone" value={playerState.phone} />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth: </label>
              <input onChange={handleChange} type="date" name="dob" id="dob" value={playerState.dob} />
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <input onChange={handleChange} type="text" name="age" id="age" value={playerState.age} />
            </div>
            <div>
              <label htmlFor="year">Year: </label>
              <input onChange={handleChange} type="text" name="year" id="year" value={playerState.year} />
            </div>
            <div>
              <label htmlFor="gender">Gender: </label>
              <input onChange={handleChange} type="text" name="gender" id="gender" value={playerState.gender} />
            </div>
            <div>
              <label htmlFor="referrer">Referred By: </label>
              <input onChange={handleChange} type="text" name="referrer" id="referrer" value={playerState.referrer} />
            </div>
            <div className='form-group form-check'>
              <input onChange={handleChange} name="isMaster" type="checkbox" className="form-check-input" id="isMaster" checked={playerState.isMaster} />
              <label htmlFor="isMaster" className="form-check-label">Is Master</label>
            </div>

            <div className='form-group form-check'>
              <input onChange={handleChange} name="duesPaid" type="checkbox" className="form-check-input" id="duesPaid" checked={playerState.duesPaid} />
              <label htmlFor="duesPaid" className="form-check-label">Dues Paid</label>
            </div>

            <div className='form-group form-check'>

              <input onChange={handleChange} name="tournPaid" type="checkbox" className="form-check-input" id="tournPaid" checked={playerState.tournPaid} />
              <label htmlFor="tournPaid" className="form-check-label">Tournaments Paid</label>
            </div>

            <div className='form-group form-check'>
              <input onChange={handleChange} name="agreeCoC" type="checkbox" className="form-check-input" id="agreeCoC" checked={playerState.agreeCoC} />
              <label htmlFor="agreeCoC" className="form-check-label">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies.</label>
            </div>
            
              <p className="text-sm text-red-800 font-bold">Last Updated: {lastUpdated} </p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
        
            <button onSubmit={updatePlayer} className="my-2 bg-blue-300 border-black">Update Player</button> <br></br>
            <button formAction={formAction} className="my-2 bg-blue-300 border-black">Delete Player</button>
            
        </form>
    </div>
  )
}

export default EditPlayerForm