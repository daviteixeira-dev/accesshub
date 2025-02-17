import { 
    Flex, 
    Text, 
    Link, 
    Stack,
    useColorModeValue
} from '@chakra-ui/react';

import ToogleColorMode from '../ToogleComponent/ToogleColorMode';

import TopMenuLogo from './TopMenuLogo';
import TranslationButton from '../TranslationButton/TranslationButton';

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

    const bgColor = useColorModeValue('blue.600', 'gray.800');
    const colorToogle = useColorModeValue('yellow.300', 'orange.300');

    return (
        <Stack 
            mt={2}
            spacing={2}
            align='center'
            direction='row'
            bgColor={bgColor}
            color={colorToogle}
            ml={['1rem', '1rem', '0', '0']}
            justifyContent={['space-between', 'space-evenly', 'flex-end', 'flex-end']}
        >
            <ToogleColorMode />

            <TranslationButton language='en'/>

            <TranslationButton language='pt'/>
        </Stack>
    );
};

const NavBarContainer = ({ children, ...props }: any) => {

    const menuColor = useColorModeValue('blue.600', 'gray.800');
    
    return (
        <Flex
            top='0'
            as='nav'
            w='100%'
            zIndex={2}
            wrap='wrap'
            align='center'
            boxShadow='sm'
            bg={menuColor}
            position='fixed'
            alignItems='center'
            color='whiteAlpha.900'
            fontFamily='Inter, sans-serif'
            padding={['.5rem', '5rem', '.5rem', '1rem 1.5rem']}
            justifyContent={['center', 'space-between', 'space-between', 'space-between']}
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