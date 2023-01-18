import {
    Flex,
    Text,
    Link,
    Menu,
    MenuButton
} from '@chakra-ui/react'

interface MenuSideBarItemProps {
    title: string,
    navSize: string,
}

const MenuSideBarItem = (props: MenuSideBarItemProps) => {

    return (
        <Menu>
            <Link _hover={{ textDecor: 'none' }}>
                <MenuButton>
                    <Text
                        ml='1rem'
                        fontSize='1rem'
                        color='gray.800'
                        fontWeight='500'
                        display={props.navSize == 'small' ? 'none' : 'flex'}
                    >
                        {props.title}
                    </Text>
                </MenuButton>
            </Link>
        </Menu>
    )
}

export default MenuSideBarItem