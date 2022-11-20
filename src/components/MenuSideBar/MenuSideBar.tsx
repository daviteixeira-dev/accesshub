import { useState } from 'react'

import { FiMenu } from 'react-icons/fi'

import { NavLink } from 'react-router-dom'

import {
    Flex,
    Text,
    Icon,
    Heading,
    Divider,
    IconButton
} from '@chakra-ui/react'

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
} from 'react-icons/fa'

import MenuSideBarItem from './MenuSideBarItem'

const MenuSideBar = () => {

    const [navSize, setNavSize] = useState('large')

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

    return (
        <Flex>
            <Flex
                as='nav'
                bg='gray.200'
                height='100vh'
                overflow='1rem'
                overflowY='auto'
                position='sticky'
                overflowX='hidden'
                flexDirection='column'
                boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
                width={navSize == 'small' ? '7rem' : '19rem'}
                textAlign={navSize == 'small' ? 'center' : 'start'}
            >

                <Flex
                    bg='blue.600'
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
                    p='.5rem 1rem'
                    justifyContent={navSize == 'small' ? 'center' : 'start'}
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
                </Flex>

                <Flex
                    as='ul'
                    p='1rem'
                    flexDirection='column'
                >

                    {
                        sideBarItem.map((item, index) => (
                            <NavLink to={item.path} key={index}>
                                <Flex
                                    as='li'
                                    p='.5rem'
                                    m='.5rem 0'
                                    alignItems='center'
                                    borderRadius='.5rem'
                                    _hover={{ background: 'gray.300' }}
                                    justifyContent={navSize == 'small' ? 'center' : 'start'}
                                >
                                    <Icon
                                        color='blue.500'
                                        fontSize='1.5rem'
                                    >
                                        {item.icon}
                                    </Icon>
                                    <MenuSideBarItem title={item.name} navSize={navSize} />
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
                    <Heading fontSize='1rem' color='gray.900'>WCAG</Heading>
                    {
                        menuWCAG.map((item, index) => (
                            <NavLink to={item.path} key={index}>
                                <Flex
                                    as='li'
                                    p='.5rem'
                                    m='.5rem 0'
                                    alignItems='center'
                                    borderRadius='.5rem'
                                    _hover={{ background: 'gray.300' }}
                                    justifyContent={navSize == 'small' ? 'center' : 'start'}
                                >
                                    <Icon
                                        color='blue.500'
                                        fontSize='1.5rem'
                                    >
                                        {item.icon}
                                    </Icon>
                                    <MenuSideBarItem title={item.name} navSize={navSize} />
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
                    <Heading fontSize='1rem' color='gray.900'>eMAG</Heading>
                    {
                        menuEmag.map((item, index) => (
                            <NavLink to={item.path} key={index}>
                                <Flex
                                    as='li'
                                    p='.5rem'
                                    m='.5rem 0'
                                    alignItems='center'
                                    borderRadius='.5rem'
                                    _hover={{ background: 'gray.300' }}
                                    justifyContent={navSize == 'small' ? 'center' : 'start'}
                                >
                                    <Icon
                                        color='blue.500'
                                        fontSize='1.5rem'
                                    >
                                        {item.icon}
                                    </Icon>
                                    <MenuSideBarItem title={item.name} navSize={navSize} />
                                </Flex>
                            </NavLink>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MenuSideBar