'use client'
import styles from './showPlayerForm.module.css'

import { useState } from 'react'


const ShowPlayerForm = ({player}) => {
   

   const [state, setState] = useState({_id: player._id, firstname: player.firstname, lastname: player.lastname, usaWPnum: player.usaWPnum, email: player.email, phone: player.phone, dob: player.dob, age: player.age, year: player.year, gender: player.gender, referrer: player.referrer, isMaster: player.isMaster, duesPaid: player.duesPaid, tournPaid: player.tournPaid, agreeCoC: player.agreeCoC, updatedAt: player.updatedAt})

 
   

   const lastUpdated = state.updatedAt.toString()

   
  return (

    <div className={styles.container}>
      <form action="">
           <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Show Player Details</h1> 
           <input type="hidden" name="id" value={state._id} />
            <div>
              <label htmlFor="firstname">Player First Name: </label>
              <input readOnly name="firstname" type="text" className="form-control" id="firstname" value={state.firstname} />
            </div>
            <div>
              <label htmlFor="lastname">Player Last Name: </label>
              <input readOnly name="lastname" type="text" className="form-control" id="lastname" value={state.lastname} />
            </div>
            <div>
              <label htmlFor="usaWPnum">USA Water Polo #: </label>
              <input readOnly type="text" name="usaWPnum" id="useWPnum" value={state.usaWPnum} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input readOnly type="text" name="email" id="email" value={state.email} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input readOnly type="text" name="phone" id="phone" value={state.phone} />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth: </label>
              <input readOnly type="date" name="dob" id="dob" value={state.dob} />
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <input readOnly type="text" name="age" id="age" value={state.age} />
            </div>
            <div>
              <label htmlFor="year">Year: </label>
              <input readOnly type="text" name="year" id="year" value={state.year} />
            </div>
            <div>
              <label htmlFor="gender">Gender: </label>
              <input readOnly type="text" name="gender" id="gender" value={state.gender} />
            </div>
            <div>
              <label htmlFor="referrer">Referred By: </label>
              <input readOnly type="text" name="referrer" id="referrer" value={state.referrer} />
            </div>
            <div className='form-group form-check'>
              <input readOnly name="isMaster" type="checkbox" className="form-check-input" id="isMaster" checked={state.isMaster} />
              <label htmlFor="isMaster" className="form-check-label">Is Master</label>
            </div>

            <div className='form-group form-check'>
              <input readOnly name="duesPaid" type="checkbox" className="form-check-input" id="duesPaid" checked={state.duesPaid} />
              <label htmlFor="duesPaid" className="form-check-label">Dues Paid</label>
            </div>

            <div className='form-group form-check'>

              <input readOnly name="tournPaid" type="checkbox" className="form-check-input" id="tournPaid" checked={state.tournPaid} />
              <label htmlFor="tournPaid" className="form-check-label">Tournaments Paid</label>
            </div>

            <div className='form-group form-check'>
              <input readOnly name="agreeCoC" type="checkbox" className="form-check-input" id="agreeCoC" checked={state.agreeCoC} />
              <label htmlFor="agreeCoC" className="form-check-label">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies.</label>
            </div>
            
              <p className="text-sm text-red-800 font-bold">Last Updated: {lastUpdated} </p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
       
            <div >
            
            <p style={{textAlign: "center"}}>See Coach Sessa to update details.</p>
            </div>
      
        
        </form>
    </div>
  )
}

export default ShowPlayerForm