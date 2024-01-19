import React from 'react'
import styles from './substance.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <div>
         <h1>Substance Abuse Policy</h1>
         <h2>Willamette Valley Water Polo Club (WVWPC)</h2>
      </div>
    <div>
         <strong>Purpose</strong>
         <p>The WVWPC has a responsibility to its athletes, parents, coaches and the community to provide a safe and enjoyable atmosphere for the teaching and playing of water polo, and related team activities.  </p>
    </div>
    <div>
         <strong>Drug and Alcohol Awareness Education</strong>
         <p>The WVWPC will provide drug and alcohol awareness information for its participants during the course of each water polo year (January to August).  The board of directors shall review the information available to club member on an annual basis.    </p>
    </div>
    <div>
         <strong>WVWPC position on substance abuse</strong>
         <p>WVWPC will not tolerate the consumption or possession of alcohol, drug paraphernalia, illegal substances, or use of tobacco products.  An illegal substance shall also include prescription being used or taken in a manner inconsistent with the medication’s labeling.   </p>
    </div>
    <div>
         <strong>Consequences of Drug or Alcohol use: </strong>
         <ul className={styles.list}>
            <li>If an athlete is caught using drugs or alcohol.  The athlete is to be suspended from the team for 1 month from the date of notification, also lose his/her rank on the team.</li>
            <li>A second violation (not necessarily in the same polo year) shall result in the suspension of the athlete from the club for one calendar year from date of notification.  </li>
            <li>Athlete having a second violation must complete a diversion program before they will be allowed to rejoin the club.</li>
         </ul>
         <p className={styles.petition}>Athletes may petition the board of directors for re-instatement prior to one year and may be reinstated if the board concludes sufficient progress has been demonstrated to ensure future substance abuse violations will not take place.  </p>
    </div>
     <div>
         <strong>Confidentiality</strong>
         <p>The WVWPC will use every effort consistent with the circumstances to keep drug and alcohol disciplinary procedures confidential.  </p>
         <p>Signing of the Substance Abuse Policy is required each season in order to participate in club activities.</p>
    </div>
    
    </div>
  )
}

export default page