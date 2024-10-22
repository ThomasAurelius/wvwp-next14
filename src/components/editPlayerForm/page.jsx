"use client"
import styles from './editPlayerForm.module.css'
import { updatePlayer } from '@/lib/action'
import { useState, useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useParams, useRouter } from 'next/navigation'
import  DeletePlayer  from '../deletePlayer/deletePlayer'


const EditPlayerForm = ({player}) => {

  const [state, formAction] = useFormState(
updatePlayer, undefined
  )

const router = useRouter()

  useEffect(() => {
    (state?.success) && router.push('/players') 
    }, state?.success, router)

  const params = useParams();

  const [playerState, setPlayerState] = useState(player)

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    console.log("Name: " + name + " Value: " + value)
    setPlayerState({ ...playerState, [name]: value });
  }

  
    const lastUpdated = player.updatedAt.toString()

  return (

    <div className={styles.container}>
      <form action={formAction}>
           <h1 className='mb-3 text-2xl font-semibold tracking-tight'>Edit Player Details</h1> 
           <input onChange={handleChange} type="hidden" name="_id" value={player._id} />
            <div className={styles.wrapper}>
              <div className={styles.labels}>
                <label htmlFor="firstname">Player First Name: </label>
                <label htmlFor="lastname">Player Last Name: </label>
                <label htmlFor="usaWPnum">USA Water Polo #: </label>
                <label htmlFor="email">Player Email: </label>
                <label htmlFor="phone">Phone: </label>
                <label htmlFor="dob">Date of Birth: </label>
                <label htmlFor="age">Age: </label>
                <label htmlFor="year">Year: </label>
                <label htmlFor="gender">Gender: </label>
                <label htmlFor="referrer">Referred By: </label>
                <label htmlFor="isMaster">Is Master?: </label>
                <label htmlFor="duesPaid">Dues Paid?: </label>
                <label htmlFor="tournPaid">Tournaments Paid?: </label>
                <label htmlFor="agreeCoC">Agreed to Code Of Conduct, WVWP rules, and substance abuse policies?: </label>
              </div>
              <div className={styles.inputs}>
                <input onChange={handleChange} name="firstname" type="text" className={styles.input} id="firstname" value={playerState.firstname} />
                <input onChange={handleChange} name="lastname" type="text" className={styles.input} id="lastname" value={playerState.lastname} />
                <input className={styles.input} onChange={handleChange} type="text" name="usaWPnum" id="usaWPnum" value={playerState.usaWPnum} />
                <input className={styles.input} onChange={handleChange} type="text" name="email" id="email" value={playerState.email} />
                <input className={styles.input} onChange={handleChange} type="text" name="phone" id="phone" value={playerState.phone} />
                <input className={styles.input} onChange={handleChange} type="text" name="dob" id="dob" value={playerState.dob?.toString()} />
                <input className={styles.input} onChange={handleChange} type="text" name="age" id="age" value={playerState.age} />
                <input className={styles.input} onChange={handleChange} type="text" name="year" id="year" value={playerState.year} />
                <input className={styles.input} onChange={handleChange} type="text" name="gender" id="gender" value={playerState.gender} />
                <input className={styles.input} onChange={handleChange} type="text" name="referrer" id="referrer" value={playerState.referrer} />
                <select className={styles.input} onChange={handleChange} name="isMaster" value={playerState.isMaster}>
                  <option value="false">Is Master?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <select className={styles.input} onChange={handleChange} name="duesPaid" value={playerState.duesPaid}>
                  <option value="false">Dues Paid?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <select className={styles.input} onChange={handleChange} name="tournPaid" value={playerState.tournPaid}>
                  <option value="false">Tournaments Paid?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <select className={styles.input} onChange={handleChange} name="agreeCoC" value={playerState.agreeCoC}>
                  
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              
              </div>
            </div>

 
              <p className="text-sm text-red-800 font-bold">Last Updated: {lastUpdated}</p>
{/*             look up player's user (Parent/gaurdian etc) details, link to their user profile. */}
        <br></br>
            <button className={styles.button} onSubmit={updatePlayer} >Update Player</button> <br></br>
          
            
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