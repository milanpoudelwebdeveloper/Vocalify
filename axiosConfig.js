import axios from "axios";


let baseURL = process.env.NEXT_PUBLIC_API_URL

export const headers= {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
}


export const axiosInstance =  axios.create({
    baseURL: baseURL,
    headers: headers
})