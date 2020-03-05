import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components//Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0, 
            bacon: 0, 
            cheese: 0, 
            meat: 0
        }, 
        totalPrice: 4,
        purchasable:false,
        purchasing:false

    }

    puchaseContinueHandler = () => {
        alert('You continued!!');
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => { 
            return sum + el
        }, 0);

        this.setState({purchasable : sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = oldCount +1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
       const oldCount = this.state.ingredients[type];
       if(oldCount <= 0) {
            return;
       };
       const updatedIngredients = {
           ...this.state.ingredients
       };
       updatedIngredients[type] = oldCount -1;
       const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
       this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
       this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return(
            <Fragment>
                <Modal show = {this.state.purchasing} close = {this.purchaseCancelHandler}>
                    <OrderSummary 
                        price = {this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchaseCanceled = {this.purchaseCancelHandler}
                        purchaseContinue = {this.puchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdd = {this.addIngredientHandler}
                    ingredientRemove = {this.removeIngredientHandler}
                    disableInfo = {disableInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;