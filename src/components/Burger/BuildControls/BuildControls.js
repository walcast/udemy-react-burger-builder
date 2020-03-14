import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} 
                label={ctrl.label} 
                add={() => props.ingredientAdd(ctrl.type)}
                remove={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disableInfo[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;