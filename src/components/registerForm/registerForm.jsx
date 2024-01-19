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
          <input type="text" required placeholder="firstname" name="firstname" />
          <input type="text" required placeholder="lastname" name="lastname" />
          <input type="phone" required placeholder="phone" name="phone" />
          <input type="email" required placeholder="email" name="email"/>
          <input type="text" required placeholder="street" name="street"/>
          <input type="text" required placeholder="city" name="city"/>
          <input type="text" required placeholder="state" name="state"/>
          <input type="number" required placeholder="zip" name="zip"/>
          <input type="password" required placeholder="password" name="password" />
          <input type="password" required placeholder="confirm password"  name="confirmPassword"/>
          <button>Register</button>
          {state?.error}
          <Link href="/login">Have an account? <b>Sign In</b></Link>
      </form>
   </div>
  )
}

export default RegisterForm