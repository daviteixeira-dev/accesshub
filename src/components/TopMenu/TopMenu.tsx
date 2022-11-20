import { 
    Box, 
    Flex, 
    Text, 
    Link, 
    Stack 
} from '@chakra-ui/react';

import TopMenuLogo from './TopMenuLogo';

const MenuItem = ({ children, isLast, to = '/', ...rest }: any) => {
    return (
      <Link href={to} style={{ textDecoration: 'none' }}>
        <Text display='block' {...rest} _hover={{ borderBottom: '3px solid #63B3ED'}}>
          {children}
        </Text>
      </Link>
    );
};

const MenuLinks = () => {
    return (
        <Box>
            <Stack 
                spacing={8}
                align='center'
                pt={[0, 0, 0, 0]}
                m={[0, 0, 0, 0]}
                direction={['row', 'row', 'row', 'row']}
                justify={['space-between', 'space-between', 'flex-end', 'flex-end']}
            >
                <MenuItem to='/'>Início</MenuItem>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }: any) => {
    return (
        <Flex
            top='0'
            py={5}
            px={8}
            as='nav'
            w='100%'
            zIndex={2}
            wrap='wrap'
            align='center'
            position='fixed'
            justify='space-between'
            fontFamily='Inter, sans-serif'
            bg={['blue.600', 'blue.600', 'blue.600', 'blue.600']}
            color={['whiteAlpha.900', 'whiteAlpha.900', 'whiteAlpha.900', 'whiteAlpha.900']}
            {...props}
        >
            {children}
        </Flex>
    );
};

const TopMenu = (props: any) => {

    return(
        <NavBarContainer {...props }>
            <TopMenuLogo 
                color={['whiteAlpha.900', 'whiteAlpha.900', 'whiteAlpha.900', 'whiteAlpha.900']}
            />
            <MenuLinks />
        </NavBarContainer>
    );
};

export default TopMenu;