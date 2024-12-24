import styles from './authRightSide.module.css'
import mobView1 from '../../../imgs/rightAuthImgs/mobView1.png'
import mobView2 from '../../../imgs/rightAuthImgs/mobView2.png'
import qrImg from '../../../imgs/rightAuthImgs/qr.png'
import google from '../../../imgs/rightAuthImgs/google.png'
import ios from '../../../imgs/rightAuthImgs/ios.png'
import Image from 'next/image'
export default function AuthRightSide({headText}: { headText: string }) {
  return (
    <div className={styles.authRightSide__handler}>
        <div className={`container py-8 lg:max-w-6xl px-2 m-auto`}>
            <h2 className={styles.rightSideHead}>
            {headText}
            </h2>
            <div className={`${styles.rightSideDetails}`}>
                <div className={`${styles.mocupMobHandler}`}>
                    <Image
                    className={styles.firstmobImg}
                    src={mobView1}
                    alt="ooners App"
                    />
                    <Image
                    className={styles.secondmobImg}
                    src={mobView2}
                    alt="ooners App"
                    />
                </div>
                <div className="flex flex-col items-center mt-8">
                    <p className={styles.subHead}>Scan to download <br/> our app</p>
                    <Image
                    src={qrImg}
                    alt="QR Code"
                    width={120}
                    height={120}
                    className='mb-2'
                    />
                    <p className={styles.subHead}>Or</p>
                    <div className="flex flex-col gap-4 mt-4">
                    <Image
                        src={google} // Replace with the Google Play badge path
                        alt="Google Play"
                        width={120}
                        height={40}
                    />
                    <Image
                        src={ios}
                        alt="App Store"
                        width={120}
                        height={40}
                    />
                </div>
            </div>
            </div>
        </div>
        

    </div>
  )
}
