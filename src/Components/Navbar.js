import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import logo from '../../public/images/logo.png'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import LoadingBar from 'react-top-loading-bar';

function Navbar() {
    
  return (
    <>
    <div className={styles.navBar +"  px-5 d-flex align-items-center justify-content-around"}>
        <div className="navBrand d-flex align-items-center">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className={styles.navBrand + ' mb-0 px-1'}>Earthie</p>
        </div>

        <div className="d-flex">
        <div className="navLinks d-flex align-items-center">
            <Link href={"/"} className={styles.navLink + ' px-2'}>Home</Link>
            <Link href={"/categories/"} className={styles.navLink + ' px-2'}>Categories</Link>
            <Link href={"/orders/"} className={styles.navLink + ' px-2'}>Order</Link>
            <Link href={"/contact/"} className={styles.navLink + ' px-2'}>Contact</Link>
           
        </div>  

        <div className={styles.searchWrapper + " d-flex align-items-center px-2 py-1"}>
            <button className={styles.searchBtn + ' d-flex align-items-center'}><Icon icon="material-symbols:search-rounded" /></button>
            <input type="text" className={styles.searchInput + ' px-1'} placeholder="Search" />
        </div>

        <div className={styles.cart + " d-flex align-items-center p-2 mx-2"}>
            <Icon icon="material-symbols:shopping-bag-outline" />
        </div>
        </div>

        <div className={styles.userCta + " d-flex align-items-center p-2"}>
            <div className="btnWrapper">
                <button className={styles.loginBtn + ' p-2 px-3'}>Login</button>
            </div>

            <div className={styles.userProfile + " p-2 mx-2"}>
                <p className={styles.userProfileImg + '  mb-0'}>
                    NS
                </p>
            </div>
        </div>
    </div>

    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>

  )
}

export default Navbar