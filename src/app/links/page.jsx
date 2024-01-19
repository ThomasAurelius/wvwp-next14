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
            <Link href="https://usawaterpolo.org/">
               <h1>USA Water Polo</h1>
               <p>Governing Body for Usa Water Polo teams</p>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href="/policies/WVWPCoC">
               <h1>Code of Conduct Policy</h1>
               <p>Official Code of Conduct Policy for WVWP</p>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href="/policies/substance">
               <h1>Substance Abuse Policy</h1>
               <p>Official Abuse Policy for WVWP</p>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href="/policies/policy">
               <h1>WVWP Policies</h1>
               <p>Official Policies for WVWP</p>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default links