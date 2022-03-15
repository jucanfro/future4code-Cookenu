import React,{useState}  from "react";
import { InputsContainer, ScreenContainer } from './styled'
import { CircularProgress, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {login} from '../../services/user'
import {useNavigate} from 'react-router-dom'



const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log("form", form)
        login(form, clear, navigate, setRightButtonText,setIsLoading)
    }

    
    return (
        <ScreenContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        margin="normal"
                        type={"email"}
                        required
                        fullWidth
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin="normal"
                        type={"password"}
                        fullWidth
                        required
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin="normal"
                    >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</>}</Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default LoginForm;