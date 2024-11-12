import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL

export const getAllUser = async() => {
    try{
        const {data} = await axios(baseUrl)
        return data
    }
    catch(error){
    }
}

export const getSelectedUser = async(id) => {
    try{
        const {data} = await axios(`${baseUrl}${id}`)
        return data
    }
    catch(error){
    }
}