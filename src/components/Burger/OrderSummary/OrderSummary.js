import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey}</span> : 
                {props.ingredients[igKey]}
            </li>)
        });

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type={'danger'} clicked={props.purchaseCanceled}>Cancel</Button>
            <Button type={'success'} clicked={props.purchaseContinue}>Continue</Button>
        </Fragment>
    );
};

export default orderSummary;