import { useState } from 'react';

import { FiMenu } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

import {
    Flex,
    Text,
    Icon,
    Image,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';

import {
    FaHome,
    FaThLarge,
    FaRegCompass,
} from 'react-icons/fa';

import MenuSideBarItem from './MenuSideBarItem';
import ToogleColorMode from '../ToogleComponent/ToogleColorMode';

import logo from '../../../public/logo-accesshub.png'

const MenuSideBar = () => {

    const [navSize, setNavSize] = useState('large');

    const sideBarItem = [
        {
            path: '/',
            name: 'Página Inicial',
            icon: <FaHome />
        },
        {
            path: '/introducao',
            name: 'Introdução',
            icon: <FaRegCompass />
        },
        {
            path: '/componentes',
            name: 'Componentes',
            icon: <FaThLarge />
        },
    ]

    const boxColor = useColorModeValue('blue.600', 'gray.800');
    const menuIconsColor = useColorModeValue('blue.500', 'blue.300');
    const colorToogle = useColorModeValue('yellow.300', 'orange.300');
    const menuSideBarColor = useColorModeValue('gray.200', 'gray.800');
    const menuSideBarColorBg = useColorModeValue('#cbd5e0', '#bee3f8');
    const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');

    return (
        <Flex
            as='nav'
            height='100vh'
            overflow='1rem'
            overflowY='auto'
            position='sticky'
            overflowX='hidden'
            color={colorToogle}
            bg={menuSideBarColor}
            flexDirection='column'
            boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
            width={navSize == 'small' ? '10rem' : '22rem'}
            textAlign={navSize == 'small' ? 'center' : 'start'}
        >

            <Flex
                bg={boxColor}
                alignItems='center'
                p={navSize === 'small' ? '1rem' : '.5rem 1rem'}
                justifyContent={navSize == 'small' ? 'center' : 'center'}
            >
                <NavLink to="/">
                    <Image
                        src={logo}
                        boxSize='50px'
                        borderRadius='full'
                        alt='Logomarca do AccessHub.'
                    />
                </NavLink>

                <Text
                    fontWeight='bold'
                    fontSize='1.5rem'
                    color='whiteAlpha.900'
                    ml={navSize == 'small' ? '0' : '.5rem'}
                    display={navSize == 'small' ? 'none' : 'flex'}
                >
                    AccessHub
                </Text>
            </Flex>

            <Flex
                w='100%'
                p='.5rem'
                alignSelf='center'
                justifyContent={navSize == 'small' ? 'space-around' : 'space-evenly'}
            >
                <IconButton
                    width='3rem'
                    bg='blue.400'
                    icon={<FiMenu />}
                    color='whiteAlpha.900'
                    aria-label='Menu Icon'
                    _hover={{ background: 'blue.500' }}
                    onClick={() => {
                        if (navSize === 'small')
                            setNavSize('large')
                        else
                            setNavSize('small')
                    }}
                />
                <ToogleColorMode />
            </Flex>
                
            <Flex
                as='ul'
                p='1rem'
                flexDirection='column'
            >
                {
                    sideBarItem.map((item, index) => (
                        <NavLink 
                            key={index} 
                            to={item.path} 
                            style={({ isActive }) => 
                                isActive 
                                ? { 
                                    background: menuSideBarColorBg, borderRadius: '.5rem', margin: '.5rem 0'
                                } : {background: 'none', margin: '.5rem 0'}
                            }
                        >
                            <Flex
                                as='li'
                                p='.5rem'
                                alignItems='center'
                                borderRadius='.5rem'
                                _hover={{ background: menuSideBarColorBg }}
                                justifyContent={navSize == 'small' ? 'center' : 'start'}
                            >
                                <Icon
                                    fontSize='1.5rem'
                                    color={menuIconsColor}
                                >
                                    {item.icon}
                                </Icon>

                                <MenuSideBarItem menuOption={item.name} navSize={navSize} />
                            </Flex>
                        </NavLink>
                    ))
                }
            </Flex>

        </Flex>
    );
};

export default MenuSideBar;