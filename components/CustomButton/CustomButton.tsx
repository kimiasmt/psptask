import React, {Fragment} from 'react';
export const CustomButton = ({name, action} : {name:string, action: () => void}) => {
    return(
        <Fragment>
            <button className={'text-3xl bg-amber-300'}>{name}</button>
        </Fragment>
    )
}