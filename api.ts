import axios from "axios";

const ENDPOINT = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts'

export interface IPost {
    createdAt: string;
    name: string;
    avatar: string;
    description: string;
    likes: number;
    image: string;
    comments: number;
    liked: boolean;
    saved: boolean;
    location: string;
    id: number;
}

export type IPosts = {
    data: IPost[]
};

export type HeaderData = Pick<IPost, avatar | name | location>;

export type PostInteractionsData = Pick<IPost, liked | likes | comments | saved>;

export type PostMetaData = Pick<IPost, name | description | createdAt>;

export async function getPosts() : Promise<IPosts> {
    try {
        const response = await axios.get(ENDPOINT);
        console.log('resp', response);
        return response.data;
    } catch (error) {
        console.error("Error on posts:", error);
        throw error;
    }
};
