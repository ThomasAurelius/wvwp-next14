import React from 'react'
import styles from './about.module.css'
import Link from 'next/link'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}><h1>About</h1></div>
      <div>
        <p>Willamette Valley Water Polo has been providing a positive, competitive experience for Albany water polo as well as Salem water polo since 2002, culminating with the incredible <Link className={styles.linkInText} href="https://www.youtube.com/watch?v=--QMIov0dak">Oregon Open Water Tournament</Link> . Our coaching staff is experienced as players, and trained as coaches. We have been an integral part of USA Water Polo’s Olympic Development Program (ODP) coaching staff since its introduction in the Northwest many years ago. Our goal is to provide a positive place for young athletes in Albany, Salem, and surrounding areas to learn and compete in the sport of water polo through an experienced coaching staff and teams for all ages and abilities including:</p>
      </div>
      <div className={styles.ageSection}>
        <div className={styles.ageLeft}>
          <Image src='/OregonElite_245x301-261x300.png' alt='Oregon Elite Polo' width={245} height={301} />
        </div>
        <div className={styles.ageRight}>
          <ul>
            <li>Boys, Girls, Co-ed</li>
            <li>Masters (post-High School)</li>
            <li>18 and under (High School)</li>
            <li>16 and under (High School)</li>
            <li>Age Group (14 and under)</li>      
          </ul>      
        </div>
      </div>
      <div className={styles.feeSection}>
        <div className={styles.feeLeft}>
          <h3>We provide a resonable fee structure which includes: </h3>
          <ul>
            <li>A single fee for our entire 6 month season (generally, mid January &#8211; mid July) which includes Team T-shirt (with <strong><em>no</em></strong> additional pool use fees)</li>
            <li><Link href="http://wvwp.org/oep/"></Link> membership in <Link href="http://www.usawaterpolo.org/" target="_blank" rel="noopener">USA Water Polo</Link> (our sponsoring body) required</li>
            <li>other optional out of state tournaments based upon travel costs</li>
            <li>participation in the <em>premier </em><Link href="http://wvwp.org/open-water-tournament/" target="_blank" rel="noopener"><em>Oregon Open Water</em> Water Polo tournament</Link> in the country: 3 day tournament money based upon &#8220;hard&#8221; costs to the club</li>
            <li>payment plans available</li>
            <li>some scholarships and financial aid (for registration fee only) available</li>
            <li><Link href="http://wvwp.org/learn-more/">learn more about Albany and Salem water polo club membership</Link></li>
          <li>Registration to play with Willamette Valley Water Polo will open in January</li>
          </ul>
        </div>
        <div className={styles.feeRight}>
          <Image src="/WVAquaticslogo.jpg" alt="WVWP logo" width={250} height={250} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage