import { 
    Link,
    ListItem
} from '@chakra-ui/react';

interface PropsCreditList {
    link: string
    text: string,
    title: string,
}

const CreditList = (props: PropsCreditList) => {
    return (
        <ListItem>
            <Link
                isExternal
                href={props.link}
                title={props.title}
            >
                {props.text}
            </Link>
        </ListItem>
    );
};

export default CreditList;