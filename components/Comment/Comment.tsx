import React from 'react';
export const Comment = ({name, message} : {name:string, message: string}) => {
    return(
            <div className={'w-80 bg-amber-100 h-80 rounded-md p-4'}>
                <div className={'text-xl text-blue-950 content-center'}>{name}</div>
                <div className={'text-sm text-cyan-900 content-center'}>{message}</div>
            </div>
    )
}