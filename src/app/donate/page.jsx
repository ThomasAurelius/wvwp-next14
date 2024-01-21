import React, { useEffect } from 'react'
import styles from './donate.module.css'
import Script from 'next/script'

const DonatePage = () => {

   // useEffect(() => {
   //    window.location.href = 'https://www.paypal.com/donate?hosted_button_id=Z2WY3VJZ2KQ4L'
   // }, [])

 

  return (
    <div className={styles.container}>
      <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></Script>
      

    DonatePage</div>
  )
}

export default DonatePage