import React, {Fragment} from 'react';
export const CustomButton = ({name, action, styles} : {name:string, action: () => void , styles:any}) => {
    return(
        <Fragment>
            <button className={styles} onClick={action}>{name}</button>
        </Fragment>
    )
}