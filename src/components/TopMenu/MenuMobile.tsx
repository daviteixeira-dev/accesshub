import { 
  Icon, 
  Flex, 
  Image,
  Button, 
  Drawer,
  DrawerBody, 
  IconButton, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerContent, 
  DrawerOverlay, 
  useDisclosure, 
  DrawerCloseButton, 
  useColorModeValue,
} from '@chakra-ui/react';

import { FaHome, FaRegCompass, FaThLarge } from 'react-icons/fa';

import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import MenuSideBarItem from '../MenuSideBar/MenuSideBarItem';

import ToogleColorMode from '../ToogleComponent/ToogleColorMode';

import logo from '../../assets/logo-accesshub.png'

interface MenuItemsProps {
    marginBottom: string
}

const MenuMobile = (props: MenuItemsProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuColor = useColorModeValue('blue.600', 'gray.800');
  const buttonBgColor = useColorModeValue('blue.400', 'gray.700');
  const menuIconsColor = useColorModeValue('blue.500', 'blue.300');
  const colorToogle = useColorModeValue('yellow.300', 'orange.300');
  const menuSideBarColorBg = useColorModeValue('#cbd5e0', '#bee3f8');

  const menuMobileItem = [
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

  return (
    <Flex 
      as='nav'
      h='5rem'
      w='100%'
      px='1.5rem'
      bg={menuColor}
      boxShadow='sm'
      position='fixed'
      color={colorToogle}
      alignItems='center'
      mb={props.marginBottom}
      justifyContent='space-between' 
    >
        <IconButton 
          onClick={onOpen} 
          icon={<FiMenu />} 
          bg={buttonBgColor} 
          color='whiteAlpha.900' 
          aria-label='Menu Icon' 
        />

        <NavLink to="/">
          <Image
            src={logo}
            boxSize='50px'
            borderRadius='full'
            alt='Logomarca do AccessHub.'
          />
        </NavLink>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />

          <DrawerContent>
            
            <DrawerCloseButton />

            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Flex
                as='ul'
                p='1rem'
                flexDirection='column'
              >
                {
                  menuMobileItem.map((item, index) => (
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
                        justifyContent='start'
                        _hover={{ background: menuSideBarColorBg }}
                      >
                        <Icon
                          fontSize='1.5rem'
                          color={menuIconsColor}
                        >
                          {item.icon}
                        </Icon>

                        <MenuSideBarItem menuOption={item.name} />
                      </Flex>
                    </NavLink>
                  ))
                }
              </Flex>
            </DrawerBody>

            <DrawerFooter>  
              <Button variant='outline' mr={3} onClick={onClose}>
                Fechar
              </Button>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>
        <ToogleColorMode />
    </Flex>
  );
};

export default MenuMobile;