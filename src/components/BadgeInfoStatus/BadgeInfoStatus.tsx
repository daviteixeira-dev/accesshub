import { 
    Badge, 
    Flex, 
    Icon, 
    Tooltip 
} from '@chakra-ui/react'

import { 
    FaCode, 
    FaFont, 
    FaUniversalAccess 
} from 'react-icons/fa';

interface BadgeInfoProps {
    colorBgCode: string,
    colorBgHasText: string,
    colorBgWaiAria: string,
    tooltipTextCode: string,
    tooltipTextHasText: string,
    tooltipTextWaiAria: string,
}

const BadgeInfoStatus = (props: BadgeInfoProps) => {
    return (
        <Flex
            p='.5rem'
            width='100%'
            alignItems='center'
            borderRadius='.5rem'
            border='1px solid gray'
            justifyContent='space-evenly'
        >
            <Tooltip 
                placement='top'
                label={props.tooltipTextWaiAria}
            >
                <Badge
                    margin='0'
                    padding='0'
                    width='2rem'
                    height='2rem'
                    display='flex'
                    variant='solid'
                    borderRadius='50%'
                    alignItems='center'
                    justifyContent='center'
                    colorScheme={props.colorBgWaiAria}
                >
                    <Icon fontSize='1.5rem' color='whiteAlpha.900'>
                        <FaUniversalAccess />
                    </Icon>
                </Badge>
            </Tooltip>

            <Tooltip 
                placement='top'
                label={props.tooltipTextCode}
            >
                <Badge
                    margin='0'
                    padding='0'
                    width='2rem'
                    height='2rem'
                    display='flex'
                    variant='solid'
                    borderRadius='50%'
                    alignItems='center'
                    justifyContent='center'
                    colorScheme={props.colorBgCode}
                >
                    <Icon fontSize='1.5rem'>
                        <FaCode />
                    </Icon>
                </Badge>
            </Tooltip>

            <Tooltip 
                placement='top'
                label={props.tooltipTextHasText}
            >
                <Badge
                    margin='0'
                    padding='0'
                    width='2rem'
                    height='2rem'
                    display='flex'
                    variant='solid'
                    borderRadius='50%'
                    alignItems='center'
                    justifyContent='center'
                    colorScheme={props.colorBgHasText}
                >
                    <Icon fontSize='1.5rem'>
                        <FaFont />
                    </Icon>
                </Badge>
            </Tooltip>
        </Flex>
    );
};

export default BadgeInfoStatus;