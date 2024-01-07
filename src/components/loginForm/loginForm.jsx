'use client'
import styles from './loginForm.module.css'
import { login } from '@/lib/action'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginForm = () => {

   const [state, formAction] = useFormState(login, undefined)

   const router = useRouter()

   useEffect(() => {
       (state?.success) && router.push('/login') 
    }, state?.success, router)

  return (
    <div>
      <form className={styles.form} action={formAction}>
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {state?.error}
          <Link href="/register">Dont have an account? <b>Register</b></Link>
      </form>
   </div>
  )
}

export default LoginForm