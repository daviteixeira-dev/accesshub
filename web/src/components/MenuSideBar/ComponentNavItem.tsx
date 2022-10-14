import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuItem,
} from "@chakra-ui/react"



interface ComponentNavItemProps {
    icon: any,
    active: any,
    text: string,
    link: string,
    navSize: string
}

const ComponentNavItem = (props: ComponentNavItemProps) => {
    return (
        <Flex
            as="li"
            w="100%"
            m=".5rem 0"
            flexDirection="column"
        >
            <Menu>
                <MenuItem 
                    m={0}
                    p={0}
                >
                    <Link
                        p=".5rem"
                        isExternal
                        width='100%'
                        href={props.link}
                        borderRadius=".5rem"
                        background={props.active && "#d2d2d2"}
                        _hover={{ textDecor: 'none', background: '#d2d2d2' }}
                    >
                        <Flex justifyContent={props.navSize == "small" ? "center" : "start"}>
                            <Icon
                                as={props.icon}
                                fontSize="1.5rem"
                                color={props.active ? "#000" : "gray.500"}
                            />
                            <Text
                                ml="1rem"
                                fontSize='1rem'
                                fontWeight='700'
                                display={props.navSize == "small" ? "none" : "flex"}
                            >
                                {props.text}
                            </Text>
                        </Flex>
                    </Link>
                </MenuItem>
            </Menu>
        </Flex>
    )
}

export default ComponentNavItem