import React from 'react';
import classes from './Ingredient.module.css'

const ingredient = (props) => {
    let burgerIngredient = null;

    switch(props.type) {
        case('bread-bottom'):
            burgerIngredient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            burgerIngredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            burgerIngredient = <div className={classes.Meat}></div>;
            break;
        case('cheese'):
            burgerIngredient = <div className={classes.Cheese}></div>;
            break;
        case('salad'):
            burgerIngredient = <div className={classes.Salad}></div>;
            break;
        case('bacon'):
            burgerIngredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }
    return burgerIngredient;
}

export default ingredient;