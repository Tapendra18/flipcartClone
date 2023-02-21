import React from 'react'
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import Search from './Search';

const StyleHeader = styled(AppBar)`
    background: #2874f0;
    height:55px;

`
const Component = styled(Box)`
    margin-left:12%;
    line-height: 0;
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style :italic;
`

const PlusImage = styled('img')`
    width:10px;  
    height:10px;
    margin-Left: 4px

`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <div>
            <StyleHeader >
                <Toolbar>
                    <Component>
                        <img src={logoURL} alt="logo" style={{
                            width: 75
                        }} />
                        <Box style={{ display: 'flex' }}>
                            <SubHeading>explore&nbsp;
                                <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt="sub-logo" />
                        </Box>
                    </Component>
                    <Search />
                </Toolbar>
            </StyleHeader>
        </div>
    )
}

export default Header;