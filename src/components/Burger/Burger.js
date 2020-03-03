import React from 'react';
import Classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props) => {
    return (
        <div className={Classes.burger}>
            <BurgerIngredient type = "bread-top"></BurgerIngredient>
            <BurgerIngredient type = "cheese"></BurgerIngredient>
            <BurgerIngredient type = "meat"></BurgerIngredient>
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;