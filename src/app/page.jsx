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
  <h1>2026 Season Updates: </h1>
  <h2>Tournaments:</h2>
  <div className={styles.tourn}>
    <h3>Santiam Masters - $975</h3>
    <h4>(Pay in full to enter)</h4>
  </div>
  <hr></hr>
  <div className={styles.tourn}>
  <div>
      <img src="openwater.png" alt="open water polo" width={500} height={400} />
  </div>
    <h3>Oregon Open Water - $1,995</h3>
  <p>
    Registration is now open for this year’s Oregon Open Water tournament June 22-26, 2026.&nbsp;&nbsp;&nbsp;
  </p>

  <p>&nbsp;</p>

  <p>
    If you’re interested in attending this year, please Clink on the PayPal link or email 
    <a href="mailto:wvwpcoach@outlook.com"> Steve Sessa </a> 
     and 
    <a href="mailto:christian.edison62@gmail.com"> Chris Edison </a>
      an invoice for a 50% deposit of the $1,995.00 tournament fee and your spot will be reserved once the deposit is paid.
  </p>

  <p>&nbsp;</p>

  <h3>Tournament fees cover:</h3>
  <div className={styles.tournList}>
    <ul>
      <li>Team campsite</li>
      <li>
        Meals
        <ul>
          <li> - Dinner Monday night</li>
          <li> - Breakfast and dinner Tuesday – Thursday</li>
          <li> -A la cart breakfast Friday morning</li>
        </ul>
      </li>
      <li>Five games per team</li>
      <li>One team entry in the Kap7 Five Lives Challenge</li>
      <li>One entry in the club challenge</li>
      <li>T-Shirt voucher for athletes and coaches.</li>
      <li>(each team is limited to 15 athletes and 2 coaches)</li>
    </ul>
  </div>

  <p>&nbsp;</p>

  <h3>Division:</h3>
  <p>
    18 under boys&nbsp;&nbsp;&nbsp;<br/>
    18 under girls&nbsp;<br/>
    16 under boys&nbsp;<br/>
    14 under co-ed&nbsp;
  </p>

  <p>&nbsp;</p>

  <p>
    If you have any questions, feel free to email 
    <a href="mailto:wvwpcoach@outlook.com"> Steve Sessa</a>
  </p>

  <p>&nbsp;</p>

  <p>
    Stay safe,<br/>
    <h3>Steve Sessa</h3>
    Executive Director Willamette Valley Aquatics<br/>
    Willamette Valley Water Polo and Albany Swim Team
  </p>


  </div>
  </div>
  </>
};

export default Home;