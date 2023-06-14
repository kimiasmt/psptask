import React, {useState} from "react";
import {useQuery} from "react-query";
import {BASE_URL} from "../../public/EnvironmentUrl";
const ListPage = () => {
    const [commentList,setComment] = useState<any[]>([])
    const { data, isLoading, error } = useQuery('List', async () => {
        const response = await fetch(`${BASE_URL}/comments`);
        return console.log(response.json().then(data => data));
    });
    return(
        <div>
        kimia test
    </div>)
}

export default ListPage;