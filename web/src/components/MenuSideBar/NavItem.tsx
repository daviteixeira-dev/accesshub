import {
    Flex,
    Text,
    Link,
    Menu,
    MenuButton
} from '@chakra-ui/react'

interface NavItemProps {
    title: string,
    navSize: string,
}

const NavItem = (props: NavItemProps) => {

    return (
        <Flex>
            <Menu>
                <Link _hover={{ textDecor: 'none' }}>
                    <MenuButton>
                        <Text
                            ml='1rem'
                            fontSize='1rem'
                            fontWeight='500'
                            display={props.navSize == 'small' ? 'none' : 'flex'}
                        >
                            {props.title}
                        </Text>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export default NavItem