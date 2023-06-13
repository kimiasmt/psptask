import React, {Fragment} from 'react';
export const CustomButton = ({name, action} : {name:string, action: () => void}) => {
    return(
        <Fragment>
            <button className={'bg-blue-400 p-2 rounded-md w-32 m-4'} onClick={action}>{name}</button>
        </Fragment>
    )
}