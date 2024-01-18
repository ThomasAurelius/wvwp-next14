import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';
import { auth } from '@/lib/auth';

const Home = () => {
  const session = auth();
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Willamette Valley Water Polo</h1>
      <p className={styles.description}>Established 2002</p>
      <div className={styles.buttonContainer}>
      <Link href="/about">
        <button className={styles.button1}>Learn More</button>
      </Link>
      <Link href="/contact">
        <button className={styles.button2}>Contact</button>
      </Link>
      {session?.user ?(
      <Link href="/register">
        <button className={styles.button3}>Signup Parent Account</button>
      </Link> ): (
      <Link href="/parent">
        <button className={styles.button3}>Register Players</button>
      </Link>
      )}
      </div>
    </div>
    <div className={styles.imageContainer}>
    <Image src="/B_Willamette Valley Aquatics-02.png" alt="WVWP logo" width={400} height={400} />
    
    </div>
  </div>
};

export default Home;