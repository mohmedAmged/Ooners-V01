import React from 'react'
import AuthRightSide from '../AuthRightSideSec/AuthRightSide'
import RegisterFormItems from '../RegisterFormItemsSec/RegisterFormItems'
import styles from './registerForm.module.css'
export default function RegisterForm() {
  return (
    <div className="flex min-h-screen ">
        {/* Left Section */}
        <div style={{width: '40%'}} className={` w-1/2 p-10 flex flex-col justify-center items-start ${styles.authLefttSideHandler}`}>
            <RegisterFormItems />
        </div>

        {/* Right Section */}
        <div style={{width: '60%'}} className={`${styles.authRightSideHandler}`}>
            <AuthRightSide headText='Join us now !'/>
        </div>
    </div>
  )
}
