import React from "react";
import {CustomButton} from "../CustomButton/CustomButton";
// import './menu.scss'
const Menu = () => {
    return(
        <div className={'flex flex-row justify-around content-center w-1/2 bg-blue-100 rounded-lg'}>
            <CustomButton name={'setting'} action={() => console.log('setting')}/>
            <CustomButton name={'list'} action={() => console.log('setting')}/>
        </div>
    )
}
export default Menu;