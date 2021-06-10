import React from 'react'
import styled from 'styled-components'
import CartItm from './CartItm'
function CartItem({ cartItems }) {
    return (
        <Container>
            <Title>Shoping CartItem</Title><hr></hr>
            <ItemContainer>
                {
                    cartItems.map((item) => (
                        <CartItm
                            id={item.id}
                            item={item.product}


                        ></CartItm>
                    ))
                }

            </ItemContainer>
        </Container>


    )
}

export default CartItem

const Container = styled.div`
// height:300px;
margin-right:18px;
padding:20px;
background-color:white;
flex:0.8;
`
const Title = styled.h1`
margin-bottom:8px;
`

const ItemContainer = styled.div``