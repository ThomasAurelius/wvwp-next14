import React from 'react'
import styles from './player.module.css'
import { useParams } from 'next/navigation';
import { getPlayerById } from '../../../lib/data';



const SinglePlayerPage = async ({params}) => {
  console.log(params)
  const player = await getPlayerById(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <form>
           <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Player Details</h1> 
            <div>
              <label htmlFor="name">Player Name: </label>
              <input name="name" type="text" className="form-control" id="name" value={player.name} />
            </div>
            <div>
              <label htmlFor="usaWPnum">USA Water Polo #: </label>
              <input type="text" name="usaWPnum" id="useWPnum" value={player.usaWPnum} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="text" name="email" id="email" value={player.email} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="text" name="phone" id="phone" value={player.phone} />
            </div>
            <div>
              <label htmlFor="street">Address: </label>
              <input type="text" name="street" id="street" value={player.street} />
            </div>
            <div>
              <label htmlFor="city">City: </label>
              <input type="text" name="city" id="city" value={player.city} />
            </div>
            <div>
              <label htmlFor="state">State: </label>
              <input type="text" name="state" id="state" value={player.state} />
            </div>  
            <div>
              <label htmlFor="zip">Zip: </label>
              <input type="text" name="zip" id="zip" value={player.zip} />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth: </label>
              <input type="date" name="dob" id="dob" value={player.dob} />
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <input type="text" name="age" id="age" value={player.age} />
            </div>
            <div>
              <label htmlFor="year">Year: </label>
              <input type="text" name="year" id="year" value={player.year} />
            </div>
            <div>
              <label htmlFor="referrer">Referred By: </label>
              <input type="text" name="referrer" id="referrer" value={player.referrer} />
            </div>
            <div className='form-group form-check'>
              <input name="isMaster" type="checkbox" className="form-check-input" id="isMaster" checked={player.isMaster} />
              <label htmlFor="isMaster" className="form-check-label">Is Master</label>
            </div>

            <div className='form-group form-check'>
              <input name="duesPaid" type="checkbox" className="form-check-input" id="duesPaid" checked={player.duesPaid} />
              <label htmlFor="duesPaid" className="form-check-label">Dues Paid</label>
            </div>

            <div className='form-group form-check'>

              <input name="tournPaid" type="checkbox" className="form-check-input" id="tournPaid" checked={player.tournPaid} />
              <label htmlFor="tournPaid" className="form-check-label">Tournaments Paid</label>
            </div>

            <div className='form-group form-check'>
              <input name="agreeCoC" type="checkbox" className="form-check-input" id="agreeCoC" checked={player.agreeCoC} />
              <label htmlFor="agreeCoC" className="form-check-label">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies.</label>
            </div>

            


            
              <p className="text-sm text-red-800 font-bold">Last Updated: </p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
          
            <button className="my-2 bg-blue-300 border-black">Edit Player</button> <br></br>
            <button className="my-2 bg-blue-300 border-black">Delete Player</button>
        
        
        </form>
      </div>
    </div>
  )
}

export default SinglePlayerPage