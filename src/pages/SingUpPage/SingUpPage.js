import React from "react";
import { LogoImg, ScreenContainer } from './styled'
import logo from '../../assets/img/logo.png'
import SingUpForm from "./SingUpForm";
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SingUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    

    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <SingUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SingUpPage;