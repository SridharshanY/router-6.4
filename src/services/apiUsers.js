import axios from "axios";

const baseUrl = process.env.BASE_URL

export const getAllUser = async() => {
    try{
        const {data} = await axios(baseUrl)
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}