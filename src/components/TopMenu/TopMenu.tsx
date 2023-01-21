import { 
    Box, 
    Flex, 
    Text, 
    Link, 
    Stack, 
    useColorModeValue
} from '@chakra-ui/react';

import ToogleColorMode from '../ToogleComponent/ToogleColorMode';

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

    const colorToogle = useColorModeValue('yellow.300', 'orange.300');

    return (
        <Box>
            <Stack 
                m={0}
                pt={0}
                spacing={8}
                align='center'
                direction='row'
                color={colorToogle}
                justify={['space-between', 'space-between', 'flex-end', 'flex-end']}
            >
                <ToogleColorMode />
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }: any) => {

    const menuColor = useColorModeValue('blue.600', 'gray.800');
    
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
            boxShadow='sm'
            bg={menuColor}
            position='fixed'
            color='whiteAlpha.900'
            justify='space-between'
            fontFamily='Inter, sans-serif'
            {...props}
        >
            {children}
        </Flex>
    );
};

const TopMenu = (props: any) => {

    return (
        <NavBarContainer {...props }>
            <TopMenuLogo />
            <MenuLinks />
        </NavBarContainer>
    );
};

export default TopMenu;