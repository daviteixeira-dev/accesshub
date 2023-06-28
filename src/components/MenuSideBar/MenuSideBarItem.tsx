import { Flex, useColorModeValue } from '@chakra-ui/react';

interface MenuSideBarItemProps {
    navSize?: string,
    menuOption: string
};

const MenuSideBarItem = (props: MenuSideBarItemProps) => {

    const menuIconsTextColor = useColorModeValue('gray.800', 'blue.300');

    return (
        <Flex
            ml='1rem'
            width='12rem'
            fontSize='1rem'
            fontWeight='500' 
            color={menuIconsTextColor} 
            _hover={{ textDecor: 'none' }} 
            display={props.navSize == 'small' ? 'none' : 'flex'}
        >
            {props.menuOption}
        </Flex>
    );
};

export default MenuSideBarItem;