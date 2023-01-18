import { Flex } from '@chakra-ui/react'

interface MenuSideBarItemProps {
    navSize: string,
    menuOption: string
}

const MenuSideBarItem = (props: MenuSideBarItemProps) => {

    return (
        <Flex
            ml='1rem' 
            fontSize='1rem' 
            color='gray.800' 
            fontWeight='500' 
            _hover={{ textDecor: 'none' }} 
            display={props.navSize == 'small' ? 'none' : 'flex'}
        >
            {props.menuOption}
        </Flex>
    )
}

export default MenuSideBarItem