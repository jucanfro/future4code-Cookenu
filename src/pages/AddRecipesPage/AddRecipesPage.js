import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { RecipeContainer, ScreenContainer } from './styled';
import AddRecipesForm from './AddRecipesForm';
import { Typography } from "@material-ui/core";

const AddRecepiesPage = () => {
    useProtectedPage()

    return (
        <div>
            <ScreenContainer>
                <Typography gutterBottom variant="h4" align="center" color="textPrimary">Adicionar Receita</Typography>
                <AddRecipesForm />
            </ScreenContainer>
        </div>
    )
}

export default AddRecepiesPage;