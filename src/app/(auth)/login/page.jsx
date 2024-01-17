
import LoginForm from '@/components/loginForm/loginForm'
import styles from './login.module.css'



const LoginPage = async () => {

  return (
    <div className={styles.wrapper}>    
      <LoginForm />
    </div>
  )
}


export default LoginPage

//<form action={handleGithubLogin}>
    //<button className={styles.github}>Login with Github</button>
  //</form>