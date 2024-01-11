import Link from "next/link"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <small>© 2024 Willamette Valley Water Polo</small>
      <div className={styles.container}> 
        <Link className={styles.link} href="https://www.facebook.com/wv.waterpolo">Facebook</Link>
        <Link className={styles.link} href="https://instagram.com/wv_aquatics">Instagram</Link>
      
      </div>
    </div>
  )
}

export default Footer