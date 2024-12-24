import AuthRightSide from "../AuthRightSideSec/AuthRightSide";
import LoginFormItems from "../LoginFormItemsSec/LoginFormItems";
import styles from './loginForm.module.css'

export default function LoginForm() {
  return (
    <div className="flex min-h-screen ">
    {/* Left Section */}
    <div style={{width: '40%'}} className={` w-1/2 p-10 flex flex-col justify-center items-start ${styles.authLefttSideHandler}`}>
        <LoginFormItems />
    </div>

    {/* Right Section */}
    <div style={{width: '60%'}} className={`${styles.authRightSideHandler}`}>
        <AuthRightSide headText='Download the app now !'/>
    </div>
</div>
  )
}
