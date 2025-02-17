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
    FaTasks,
    FaThLarge,
    FaRegCompass,
} from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

import MenuSideBarItem from './MenuSideBarItem';
import ToogleColorMode from '../ToogleComponent/ToogleColorMode';
import TranslationButton from '../TranslationButton/TranslationButton';

import logo from '../../../public/logo-accesshub.png';

const MenuSideBar = () => {

    const { t } = useTranslation();

    const [navSize, setNavSize] = useState('large');

    const sideBarItem = [
        {
            path: '/',
            name: 'menuSideBar.home',
            icon: <FaHome />
        },
        {
            path: '/introducao',
            name: 'menuSideBar.introduction',
            icon: <FaRegCompass />
        },
        {
            path: '/componentes',
            name: 'menuSideBar.components',
            icon: <FaThLarge />
        },
        {
            path: '/current-scenario',
            name: 'menuSideBar.currentScenario',
            icon: <FaTasks />
        },
    ]

    const boxColor = useColorModeValue('blue.600', 'gray.800');
    const menuIconsColor = useColorModeValue('blue.500', 'blue.300');
    const colorToogle = useColorModeValue('yellow.300', 'orange.300');
    const menuSideBarColor = useColorModeValue('gray.200', 'gray.800');
    const menuSideBarColorBg = useColorModeValue('#cbd5e0', '#bee3f8');

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
                flexDirection='column'
                justifyContent={navSize == 'small' ? 'space-around' : 'space-evenly'}
            >
                <Flex width='100%' justifyContent='space-evenly'>
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

                <Flex marginTop='1rem' justifyContent='space-evenly'>
                    <TranslationButton language='en'/>

                    <TranslationButton language='pt'/>
                </Flex>
            </Flex>
                
            <Flex
                as='ul'
                p='1rem'
                flexDirection='column'
            >
                {
                    sideBarItem.map((item, index) => (
                        <Flex
                            key={index}
                            as='li'
                            m='.5rem 0'
                            width='100%'
                            display='flex'
                            alignItems='center'
                            borderRadius='.5rem'
                            _hover={{ background: menuSideBarColorBg }}
                            justifyContent={navSize == 'small' ? 'center' : 'start'}
                        >
                            <NavLink 
                                to={item.path}
                                style={({ isActive }) => 
                                    isActive 
                                    ? { 
                                        background: menuSideBarColorBg, borderRadius: '.5rem',  display: 'flex', padding: '.5rem'
                                    } : {background: 'none', display: 'flex', padding: '.5rem'}
                                }
                            >
                                <Icon
                                    fontSize='1.5rem'
                                    color={menuIconsColor}
                                >
                                    {item.icon}
                                </Icon>

                                <MenuSideBarItem menuOption={t(item.name)} navSize={navSize} />
                            </NavLink>
                        </Flex>
                    ))
                }
            </Flex>

        </Flex>
    );
};

export default MenuSideBar;