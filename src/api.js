import {NEWS_API_KEY} from './config'
import axios from 'axios'

export const getArticles = async(topic) =>{
try {
    const bitcoinRes = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${NEWS_API_KEY}`)
   
    return bitcoinRes.data.articles
} catch (error) {
console.log(error)
}
}