import { useState } from 'react';

import { FiMenu } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

import {
    Flex,
    Text,
    Icon,
    Heading,
    Divider,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';

import {
    FaEye,
    FaCode,
    FaInfo,
    FaHome,
    FaBrain,
    FaThLarge,
    FaKeyboard,
    FaPenSquare,
    FaRegCompass,
    FaPlayCircle,
    FaPuzzlePiece,
    FaClipboardList,
    FaRegWindowRestore
} from 'react-icons/fa';

import MenuSideBarItem from './MenuSideBarItem';
import ToogleColorMode from '../ToogleComponent/ToogleColorMode';

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

    const menuWCAG = [
        {
            path: '/perceptivel',
            name: 'Perceptível',
            icon: <FaEye />
        },
        {
            path: '/operavel',
            name: 'Operável',
            icon: <FaKeyboard />
        },
        {
            path: '/compressivel',
            name: 'Compressível',
            icon: <FaBrain />
        },
        {
            path: '/robusto',
            name: 'Robusto',
            icon: <FaRegWindowRestore />
        }
    ]

    const menuEmag = [
        {
            path: '/marcacao',
            name: 'Marcação',
            icon: <FaCode />
        },
        {
            path: '/comportamento',
            name: 'Comportamento',
            icon: <FaPuzzlePiece />
        },
        {
            path: '/conteudo-Informacao',
            name: 'Conteúdo/Informação',
            icon: <FaInfo />
        },
        {
            path: '/apresentacao-design',
            name: 'Apresentação/Design',
            icon: <FaPenSquare />
        },
        {
            path: '/multimidia',
            name: 'Multimídia',
            icon: <FaPlayCircle />
        },
        {
            path: '/formulario',
            name: 'Formulário',
            icon: <FaClipboardList />
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
                p={navSize === 'small' ? '1rem' : '.5rem 1rem'}
                justifyContent={navSize == 'small' ? 'center' : 'center'}
            >
                <Text
                    fontWeight='bold'
                    color='whiteAlpha.900'
                    fontSize={navSize == 'small' ? '1.1rem' : '2rem'}
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
                
            <Divider />

            <Flex
                as='ul'
                p='1rem'
                flexDirection='column'
            >
                <Heading fontSize='1rem' color={headingsColor}>WCAG</Heading>
                {
                    menuWCAG.map((item, index) => (
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
            
            <Divider />

            <Flex
                as='ul'
                p='1rem'
                flexDirection='column'
            >
                <Heading fontSize='1rem' color={headingsColor}>eMAG</Heading>
                {
                    menuEmag.map((item, index) => (
                        <NavLink 
                            to={item.path} 
                            key={index}
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