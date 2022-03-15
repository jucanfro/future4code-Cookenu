import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator'

export const login = (form, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            setIsLoading(false)
            goToRecipesList(navigate)
            setRightButtonText("Logout")
            
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const singUp = (form, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            setIsLoading(false)
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}