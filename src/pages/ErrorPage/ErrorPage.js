import React from "react";
import erro from '../../assets/img/erro.png';
import { Typography } from "@material-ui/core";
import {ErrorContainer, ImgErr} from './styled';

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ImgErr src={erro} />
            <Typography color={'primary'} variant={'h4'} align={"center"}>Erro 404 - Página não encontrada.</Typography>
        </ErrorContainer>
    )
}

export default ErrorPage;