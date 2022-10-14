import { useState } from 'react'

import { Flex, Text, IconButton, Heading, Divider } from '@chakra-ui/react'

import { FiMenu, FiHome, FiSettings } from 'react-icons/fi'

import { 
    FaEye, 
    FaKeyboard, 
    FaBrain, 
    FaRegWindowRestore, 
    FaCode, 
    FaPuzzlePiece,
    FaInfo,
    FaPenSquare,
    FaPlayCircle,
    FaClipboardList
} from "react-icons/fa";

import NavItem from './NavItem'
import ComponentNavItem from './ComponentNavItem'

const MenuSideBar = () => {

    const [navSize, setNavSize] = useState("large")

    return (
        <Flex
            as="nav"
            bg="#f2f2f2"
            height="100vh"
            overflow="1rem"
            overflowY="auto"
            position="sticky"
            overflowX="hidden"
            flexDirection="column"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            width={navSize == "small" ? "7rem" : "19rem"}
            textAlign={navSize == "small" ? "center" : "start"}
        >

            <Flex
                bg="black"
                p={navSize === "small" ? "1rem" : ".5rem 1rem"}
                justifyContent={navSize == "small" ? "center" : "center"}
            >
                <Text
                    color="white"
                    fontWeight="bold"
                    fontSize={navSize == "small" ? "1.1rem" : "2rem"} 
                >
                    AcessHub
                </Text>
            </Flex>

            <Flex
                p=".5rem 1rem"
                justifyContent={navSize == "small" ? "center" : "start"}
            >
                <IconButton
                    icon={<FiMenu />}
                    aria-label='Menu Icon'
                    onClick={() => {
                        if (navSize === "small")
                            setNavSize("large")
                        else
                            setNavSize("small")
                    }}
                />
            </Flex>

            <Flex
                as="ul"
                p="1rem"
                flexDirection="column"
            >
                <NavItem icon={FiHome} navSize={navSize} title="Introdução" />
                <NavItem active navSize={navSize} icon={FiSettings} title="Componentes"/>
            </Flex>

            <Divider/>

            <Flex
                as="ul"
                p="1rem" 
                flexDirection="column"
            >
                <Heading fontSize="1rem">WCAG</Heading>
                <ComponentNavItem navSize={navSize} icon={FaEye} text="Perceptível" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaKeyboard} text="Operável" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaBrain} text="Compressível" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaRegWindowRestore} text="Robusto" link="https://chakra-ui.com" active={false}/>
            </Flex>

            <Divider/>

            <Flex
                as="ul"
                p="1rem" 
                flexDirection="column"
            >
                <Heading fontSize="1rem">eMAG</Heading>
                <ComponentNavItem navSize={navSize} icon={FaCode} text="Marcação" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaPuzzlePiece} text="Comportamento (DOM)" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaInfo} text="Conteúdo/Informação" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaPenSquare} text="Apresentação/Design" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaPlayCircle} text="Multimídia" link="https://chakra-ui.com" active={false}/>
                <ComponentNavItem navSize={navSize} icon={FaClipboardList} text="Formulário" link="https://chakra-ui.com" active={false}/>
            </Flex>
        </Flex>
    )
}

export default MenuSideBar