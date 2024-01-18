import Link from 'next/link'
import styles from './links.module.css'

const links = () => {
  return (
    <div className={styles.container}>
      <div>
         <div className={styles.link}>
            <Link href="/links/pools">
               <h1>Pools</h1>
               <p>List of regional pools used by WVWP</p>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href="/links/sponsors">
               <h1>Sponsors</h1>
               <p>Community Sponsors of WVWP</p>
            </Link>
         </div>
       
         <div className={styles.link}>
            <Link href="https://webpoint.usawaterpolo.com/wp15/Intralock/Login.wp">
               <h1>USA Water Polo</h1>
               <p>Governing Body for Usa Water Polo teams</p>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default links