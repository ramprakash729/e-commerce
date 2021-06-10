import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

function Cart({ cartItems }) {

    const getTotalPrice = () => {
         
        let total = 0;
        cartItems.forEach((item) => {
            total+=(item.product.price*item.product.Quantity);
          
        })

        return total;
    }

    const getCount = () => {

        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.Quantity
        })

        return count;
    }
    return (
        <Container>
            <CartItem cartItems={cartItems}></CartItem>
            <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}></CartTotal>
        </Container>

    )
}

export default Cart




const Container = styled.div`
display:flex;
padding:14px 18px 0 18px;
align-items:flex-start;
    `