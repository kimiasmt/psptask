import React from "react";
import {CustomButton} from "../CustomButton/CustomButton";
import {router} from "next/client";
import {useRouter} from "next/router";
// import './menu.scss'
const Menu = () => {
    const router = useRouter();
    const navigateToLink = (url : string):void => {
        router.push(url)
    }

    return(
        <div className={'flex flex-row justify-around content-center w-1/2 bg-blue-100 rounded-lg'}>
            <CustomButton name={'setting'} action={() => navigateToLink('setting')}/>
            <CustomButton name={'list'} action={() => navigateToLink('list')}/>
        </div>
    )
}
export default Menu;