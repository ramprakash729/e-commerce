import React from 'react'
import styled from 'styled-components'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom'
function Header({ signOut, cartItems, user }) {
    const getCount = () => {

        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.Quantity
        })

        return count;
    }
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} alt=""></img>
                </Link>

            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon></LocationOnIcon>
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type="text"></HeaderSearchInput>
                <HeaderSearchIconContainer>
                    <SearchIcon></SearchIcon>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello,{user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts and Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>&Orders</OptionLineTwo>
                </HeaderOption>
            </HeaderNavItems>

            <HeaderOptionCart>
                <Link to="/cart">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <CartCount>{getCount()}</CartCount>
                </Link>
            </HeaderOptionCart>


        </Container>
    )
}

export default Header

const Container = styled.div`
height:60px;
background-color:#0f1111;
display:flex;
align-items:center;
justify-content:space-between;
color:white;

`
const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`

const HeaderOptionAddress = styled.div`
display:flex;
padding-left:9px;
align-items:center;
`
const OptionLineOne = styled.div`
`
const OptionLineTwo = styled.div`
font-weight:700;
`

const HeaderSearch = styled.div`
display:flex;
flex-grow:1;
height:40px;
border-radius:4px;
overflow:hidden;
margin-left:4px;
background-color:white;
:focus-within{
    box-shadow:0 0 0 3px #f90;
}
`

const HeaderSearchIconContainer = styled.div`
background-color:#febd69; 
width:45px;
color:black;
display:flex;
justify-content:center;
align-items:center;
`

const HeaderSearchInput = styled.input`
flex-grow:1;
border:0px;
:focus{
    outline:none;
}
`
const HeaderNavItems = styled.div`
display:flex;

`
const HeaderOption = styled.div`
padding:10px 9px;
cursor:pointer;
`

const HeaderOptionCart = styled.div`
display:flex;
a{
    display:flex;
    align-items:center;
    padding-right:9px;
    color:white;
    text-decoration:none;
}
`

const CartCount = styled.div`
padding-left:4px;
font-weight:700;
color:#f08804;

`