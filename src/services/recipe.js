import axios from 'axios';
import { BASE_URL } from '../constants/urls';


export const createRecipe = (form, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/recipe`, form, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((response) => {
            alert(response.data.message)
            clear()
            setIsLoading(false)
            
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response)
        })

}