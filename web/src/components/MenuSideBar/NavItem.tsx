import { 
    Flex, 
    Text, 
    Icon, 
    Link, 
    Menu, 
    MenuButton 
} from "@chakra-ui/react"

interface NavItemProps {
    icon: any,
    active?: any,
    title: string,
    navSize: string
}

const NavItem = (props: NavItemProps) => {

    return (
        <Flex
            as="li"
            w="100%"
            m=".5rem 0"
            flexDirection="column"
        >
            <Menu>
                <Link
                    p=".5rem"
                    display="flex"
                    borderRadius=".5rem"
                    background={props.active && "#d2d2d2"}
                    _hover={{ textDecor: 'none', background: '#d2d2d2' }}
                    justifyContent={props.navSize == "small" ? "center" : "start"}
                >
                    <MenuButton>
                        <Flex>
                            <Icon
                                as={props.icon}
                                fontSize="1.5rem"
                                color={props.active ? "#000" : "gray.500"}
                            />
                            <Text
                                ml="1rem"
                                display={props.navSize == "small" ? "none" : "flex"}
                            >
                                {props.title}
                            </Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export default NavItem