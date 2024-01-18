import styles from './sponsors.module.css'
import Image from 'next/image'

const SponsorsPage = () => {
  return (
   <>
   <h1>Sponsors</h1>
    <div className={styles.container}>
    
      <Image src="/truwest-logo.png" alt="TruWest logo" width={100} height={100} />
      <Image src='/trailerwerks-300x66.jpg' alt="Trailer Werks logo" width={300} height={66} />
      <Image src='/Larrys-Locksmith.jpg' alt="Larry's Locksmith logo" width={180} height={100} />
      <Image src='/UrbanBarrels_JP.jpg' alt="Urban Barrels logo" width={100} height={100} />
      <Image src='/PeterA.-Bernardo-M.D..jpg' alt="Peter A. Bernardo, M.D. logo" width={180} height={110} />
      <Image src='/Sunset-Center-South.jpg' alt="Sunset Center South logo" width={190} height={60} />
      <Image src='/Subway-logo.jpg' alt="Subway logo" width={180} height={80} />
      <Image src='/Salem-transmission.jpg' alt="Salem Transmission logo" width={180} height={80} />
      <Image src='/PW-logo.jpg' alt="PW logo" width={160} height={100} />
      <Image src='/CorvallisMovingAndStorage.jpg' alt="Corvallis Moving and Storage logo" width={180} height={180} />
      <Image src='/FHJA-logo-bluesilver-300x76.jpg' alt="FHJA logo" width={300} height={76} />
    </div>
    </>
  )
}

export default SponsorsPage