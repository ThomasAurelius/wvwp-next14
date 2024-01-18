"use client"
import styles from './editPlayerForm.module.css'
import { updatePlayer } from '@/lib/action'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import { connectToDb } from '@/lib/utils'
import { Player } from '@/lib/models'
import { revalidatePath } from "next/cache";
import { connect } from 'mongoose'
import { useParams } from 'next/navigation'

import  DeletePlayer  from '../deletePlayer/deletePlayer'



const EditPlayerForm = ({player}) => {
  const [state, formAction] = useFormState(
updatePlayer, undefined
  )
  const params = useParams();

  const [playerState, setPlayerState] = useState(player)

  

   function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    console.log("Name: " + name + " Value: " + value)
    setPlayerState({ ...playerState, [name]: value });
  }


// const deletePlayer = async (params) => {
//   const id = params.id;
//   console.log("id: " + id)
//   try {
//     connectToDb();

//     console.log("id: " + id);
//     await Player.findByIdAndDelete(id);
//     console.log("deleted from db");
    
//     revalidatePath("/players");
//   } catch (err) {
//     console.log(err);
//     return { error: "Something went wrong!" };
//   }
// };
  
    //const lastUpdated = player.updatedAt.toString()
   
   
  return (

    <div className={styles.container}>
      <form action={formAction}>
           <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Edit Player Details</h1> 
           <input onChange={handleChange} type="hidden" name="_id" value={player._id} />
            <div>
              <label htmlFor="firstname">Player First Name: </label>
              <input onChange={handleChange} name="firstname" type="text" className="form-control" id="firstname" value={playerState.firstname} />
            </div>
            <div>
              <label htmlFor="lastname">playerState Last Name: </label>
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
              <input onChange={handleChange} type="text" name="dob" id="dob" value={playerState.dob?.toString()} />
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
            <div>
            <label htmlFor="isMaster">Is Master?: </label>
            <select onChange={handleChange} name="isMaster" value={playerState.isMaster}>
              <option value="">Is Master?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
            <div>
            <label htmlFor="duesPaid">Dues Paid?: </label>
            <select onChange={handleChange} name="duesPaid" value={playerState.duesPaid}>
              <option value="">Dues Paid?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
            <div>
            <label htmlFor="tournPaid">Tournaments Paid?: </label>
            <select onChange={handleChange} name="tournPaid" value={playerState.tournPaid}>
              <option value="">Tournaments Paid?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
            <div>
            <label htmlFor="agreeCoC">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies?: </label>
            <select onChange={handleChange} name="agreeCoC" value={playerState.agreeCoC}>
              <option value="">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>

 
              <p className="text-sm text-red-800 font-bold">Last Updated: </p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
        
            <button onSubmit={updatePlayer} className="my-2 bg-blue-300 border-black">Update Player</button> <br></br>
          
            
        </form>
         <DeletePlayer player={player} />
    </div>
  )
}

export default EditPlayerForm

// const [state, setState] = useState(player);

 
  //  const handleChange = (e) => {
  //    formAction({ ...state, [e.target.name]: e.target.value })
  //  }
   
  // const [state, setState] = useState ({playerId: playerId, playerFirst: playerFirst, playerLast: playerLast, playerusaWPnum: playerusaWPnum, playerEmai:playerEmail, playerPhone:playerPhone, playerDob:playerDob, playerAge:playerAge, playerYear:playerYear, playerGender:playerGender, playerReferrer:playerReferrer, playerIsMaster:playerIsMaster, playerDuesPaid:playerDuesPaid, playerTournPaid:playerTournPaid, playerAgreeCoc:playerAgreeCoc, updatedAt:updatedAt })

    //  const [state, setState] = useState({_id: player._id, firstname: player.firstname, lastname: player.lastname, usaWPnum: player.usaWPnum, email: player.email, phone: player.phone, dob: player.dob, age: player.age, year: player.year, gender: player.gender, referrer: player.referrer, isMaster: player.isMaster, duesPaid: player.duesPaid, tournPaid: player.tournPaid, agreeCoC: player.agreeCoC, updatedAt: player.updatedAt})


  //    const handleChange = (event) => {
  //   let value = event.target.value;
  //   let name = event.target.name;
  //  }

  //   useEffect(() => {
  //      setState(player);
  //  }, [player])


    // function handleChecked(event) {
  //   let value = event.target.checked;
  //   let name = event.target.name;
  //   console.log("Name: " + name + " Value: " + value)

  //   setPlayerState({ ...playerState, [name]:  value });
  // }

   {/*
            <div className='form-group form-check'>
              <input onChange={handleChecked} name="isMaster" type="checkbox" className="form-check-input" id="isMaster" checked={playerState.isMaster} />
              <label htmlFor="isMaster" className="form-check-label">Is Master</label>
            </div>
  
            <div className='form-group form-check'>
              <input onChange={handleChecked} name="duesPaid" type="checkbox" className="form-check-input" id="duesPaid" checked={playerState.duesPaid} />
              <label htmlFor="duesPaid" className="form-check-label">Dues Paid</label>
            </div>

            <div className='form-group form-check'>

              <input onChange={handleChecked} name="tournPaid" type="checkbox" className="form-check-input" id="tournPaid" checked={playerState.tournPaid} />
              <label htmlFor="tournPaid" className="form-check-label">Tournaments Paid</label>
            </div>

            <div className='form-group form-check'>
              <input onChange={handleChecked} name="agreeCoC" type="checkbox" className="form-check-input" id="agreeCoC" checked={playerState.agreeCoC} />
              <label htmlFor="agreeCoC" className="form-check-label">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies.</label>
            </div>
            */}