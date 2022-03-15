import React from "react";
import {LogoImg, ScreenContainer, SignUpButton, } from './styled'
import logo from '../../assets/img/logo.png'
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import {goToSignUp} from '../../routes/coordinator'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({rightButtonText,setRightButtonText}) => {
    useUnprotectedPage()
    
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <SignUpButton>
                <Button onClick={() => goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >Não possui conta? Cadastre-se aqui!</Button>
            </SignUpButton>
        </ScreenContainer>
    )
}

export default LoginPage;