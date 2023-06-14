import React from "react";
import {useQuery} from "react-query";
import {getCommentList} from "../api/list";
import {Comment} from "../../components/Comment/Comment";
import styles from './list.module.scss'
const ListPage = () => {
    const { data, isLoading, error } = useQuery('List', getCommentList);

    if(isLoading) {
        return <div>Loading!</div>
    }
    return(
        <div className={styles.list}>
            {data?.map((item:any) => {
                return(
                    <div key={item.id} >
                    <Comment name={item.name} message={item.body}/>
                </div>)
            })}
    </div>)
}

export default ListPage;