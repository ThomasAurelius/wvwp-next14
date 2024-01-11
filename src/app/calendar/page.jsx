import React from 'react'
import styles from './calendar.module.css'

const Calendar = () => {
  return (
    <div className={styles.container}>
      <iframe style={{border:"solid 1px #777", width:"800px", height:"600px", frameborder:"0", scrolling:"no"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=d3Z3cHNlcnZpY2VzQGdtYWlsLmNvbQ&src=aWQ0Yjl2aWgzNGhlbWljZ2w1ODBvc3NsZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&color=%23D50000" ></iframe>
    
    </div>
  )
}

export default Calendar