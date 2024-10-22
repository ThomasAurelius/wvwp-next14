import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';
import { auth } from '@/lib/auth';

const Home = () => {
  const session = auth();
  return <>
  <div className={styles.container}>
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
  <div className={styles.container2}>
  <h1>2025 Season Updates: </h1>
  <h2>Tournaments:</h2>
  <div className={styles.tourn}>
    <h3>Santiam Masters - $975</h3>
    <h4>(Pay in full to enter)</h4>
  </div>
  <hr></hr>
  <div className={styles.tourn}>
    <h3>Open Water - $1995</h3>
    <h4>(No Oregon teams allowed entry prior to 4/15)</h4>
    <h4>(Teams may hold a spot with a 1000 deposit prior to same) pay in full prior to 6/1</h4>
  </div>
  </div>
  </>
};

export default Home;