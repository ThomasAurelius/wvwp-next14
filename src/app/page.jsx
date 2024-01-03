import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Willamette Valley Water Polo</h1>
      <p className={styles.description}>Established 2002</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button1}>Learn More</button>
        <button className={styles.button2}>Contact</button>
      </div>
    </div>
    <div className={styles.imageContainer}>
    <Image src="/open_water.png" alt="Open Water" width={500} height={500} />
    
    </div>
  </div>;
};

export default Home;