import React from "react";
import {CustomButton} from "../CustomButton/CustomButton";
import {router} from "next/client";
import {useRouter} from "next/router";
import styles from './menu.module.scss'
const Menu = () => {
    const router = useRouter();
    const navigateToLink = (url : string):void => {
        router.push(url)
    }

    return(
        <div className={styles.menu}>
            <h1 className={styles.menu__title}>PSP Express</h1>
            <div className={styles.menu__container}>
                <CustomButton name={'setting'} action={() => navigateToLink('setting')} styles={styles.menu__button}/>
                <CustomButton name={'list'} action={() => navigateToLink('list')} styles={styles.menu__button}/>
            </div>

        </div>
    )
}
export default Menu;