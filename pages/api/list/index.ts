import {client} from "../index";

export const getCommentList = async () => {
    const { data } = await client.get("/comments");
    return data;
};