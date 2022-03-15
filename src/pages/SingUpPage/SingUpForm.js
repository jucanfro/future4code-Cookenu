import React, {useState} from "react";
import { InputsContainer, ScreenContainer } from './styled'
import { CircularProgress, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { singUp } from "../../services/user";

const SingUpForm = ({setRightButtonText}) => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({name:"", email: "", password: "" })
    
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp(form, clear, navigate,setRightButtonText, setIsLoading)
    }
    return (
        <ScreenContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        margin="none"
                        type={"text"}
                        required
                        fullWidth />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        margin="none"
                        type={"email"}
                        required
                        fullWidth />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin="none"
                        type={"password"}
                        required
                        fullWidth
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin="none"
                    >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Cadastrar</>}</Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default SingUpForm;