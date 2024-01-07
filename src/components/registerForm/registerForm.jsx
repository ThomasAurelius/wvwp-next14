'use client'
import styles from './registerForm.module.css'
import { register } from '@/lib/action'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const RegisterForm = () => {

   const [state, formAction] = useFormState(register, undefined)

   const router = useRouter()

   useEffect(() => {
       (state?.success) && router.push('/login') 
    }, state?.success, router)

  return (
    <div>
      <form className={styles.form} action={formAction}>
          <input type="text" placeholder="firstname" name="firstname" />
          <input type="text" placeholder="lastname" name="lastname" />
          <input type="text" placeholder="phone" name="phone" />
          <input type="text" placeholder="email" name="email"/>
          <input type="text" placeholder="street" name="street"/>
          <input type="text" placeholder="city" name="city"/>
          <input type="text" placeholder="state" name="state"/>
          <input type="text" placeholder="zip" name="zip"/>
          <input type="password" placeholder="password" name="password" />
          <input type="password" placeholder="confirm password"  name="confirmPassword"/>
          <button>Register</button>
          {state?.error}
          <Link href="/login">Have an account? <b>Register</b></Link>
      </form>
   </div>
  )
}

export default RegisterForm