import React from 'react';

const RecipeDetails = ({ingredients}) => {

    return (
        ingredients.map((ingredient,index) => {
            const weight = ingredient.weight
            const roundedWeight = Math.round(weight)
            return(
            <ul className="ingredient-list" key={index}>
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight - {roundedWeight}</li>
            </ul>
        )})
    )

}
 
export default RecipeDetails;