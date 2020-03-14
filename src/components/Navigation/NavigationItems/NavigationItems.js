import React from 'react';
import NavigatioItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'


const navigationItems = () => (
<ul className={classes.NavigationItems}>
    <NavigatioItem link="/" active>Burger Builder</NavigatioItem>
    <NavigatioItem link="/">Checkout</NavigatioItem>
</ul>
);

export default navigationItems;