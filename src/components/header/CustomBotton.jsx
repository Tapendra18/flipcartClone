import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button , & > p , & >div {
        margin-right: 40px;
        font-size : 16px;
        align-item: center;
    }
`
const Container = styled(Box)`
     display : flex;
`

const LoginBotton =  styled(Button)`
    color : #2874f0;
    background:#fff;
    text-transform:none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow:none;
    font-weight:600;
    height: 32px;

`

const CustomBotton = () => {
    return (
        <Wrapper>
            <LoginBotton variant='contained'>Login</LoginBotton>
            <Typography style={{marginTop:3 , width: 135 }} >Become a Seller</Typography>
            <Typography style={{marginTop: 3 }} >More</Typography>

            <Container>
            <ShoppingCartIcon />
                <Typography>
                   Cart
                </Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomBotton