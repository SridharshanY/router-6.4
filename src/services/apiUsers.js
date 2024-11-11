import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL

export const getSelectedUser = async(id) => {
    try{
        const {data} = await axios(`${baseUrl}${id}`)
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}