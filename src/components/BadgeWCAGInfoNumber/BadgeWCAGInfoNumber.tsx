import { 
    Link,
    Badge,
    Tooltip
} from '@chakra-ui/react';

interface BadgeProps {
    textWCAG: string,
    linkWCAG?: string,
    tooltipText: string
}

const BadgeWCAGInfoNumber = (props: BadgeProps) => {
    return (
        <Tooltip
            placement='top'
            label={props.tooltipText}
        >
            <Badge
                p='.3rem'
                variant='solid'
                fontSize='.8rem'
                colorScheme='green'
                borderRadius='.3rem'
                ml={[0, 0, '.5rem', '.5rem']}
                mt={['.5rem', '.5rem', 0, 0]}
            >
                <Link
                    isExternal
                    href={props.linkWCAG}
                >
                    {props.textWCAG}
                </Link>    
            </Badge>
        </Tooltip>
    );
};

export default BadgeWCAGInfoNumber;