import React from 'react';
import styles from './singlePropertyHeader.module.css'
import logoProperty from '../../imgs/singleProperty/new.png'
import Image from 'next/image';

interface SinglePropertyHeaderProps {
  propertyName: string;
  propertyDescription: string;
}

const SinglePropertyHeader: React.FC<SinglePropertyHeaderProps> = ({ propertyName, propertyDescription }) => {
  return (
    <section>
        <div className=' `singlePropertyHeader__handler container py-16 lg:max-w-6xl px-6 m-auto`'>
            <div className={`${styles.headerCard}`}>
                <Image className={styles.cardImg} src={logoProperty} alt='logo' width={108} height={108} />
                <div className={`${styles.headerCardInfo}`}>
                    <h2>
                        {propertyName}
                    </h2>
                    <p>
                      {propertyDescription}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SinglePropertyHeader;
