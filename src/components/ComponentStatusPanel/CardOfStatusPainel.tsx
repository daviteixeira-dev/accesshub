import { 
    Card, 
    Text, 
    Heading, 
    CardBody, 
    CardFooter, 
    CardHeader, 
} from '@chakra-ui/react';

import BadgeInfoStatus from '../BadgeInfoStatus/BadgeInfoStatus';

interface CardOfStatusPainelProps {
    cardName: string,
    badge_colorBgCode: string,
    badge_colorBgWaiAria: string,
    badge_colorBgHasText: string,
    tooltip_tooltipTextCode: string,
    tooltip_tooltipTextWaiAria: string,
    tooltip_tooltipTextHasText: string
}

const CardOfStatusPainel = (props: CardOfStatusPainelProps) => {
    return (
        <Card border='1px solid gray' tabIndex={0}>

            <CardHeader p='.5rem'>
                <Heading fontSize='1rem'>
                    {props.cardName}
                </Heading>
            </CardHeader>

            <CardBody p='.5rem'>
                <Text fontSize='.9rem'>
                    Abaixo, é possível ver os status atuais do componente:
                </Text>
            </CardBody>

            <CardFooter p='.5rem'>
                <BadgeInfoStatus
                    colorBgCode={props.badge_colorBgCode}
                    colorBgWaiAria={props.badge_colorBgWaiAria}
                    colorBgHasText={props.badge_colorBgHasText}
                    tooltipTextWaiAria={props.tooltip_tooltipTextWaiAria}
                    tooltipTextCode={props.tooltip_tooltipTextCode}
                    tooltipTextHasText={props.tooltip_tooltipTextHasText}
                />
            </CardFooter>
        </Card>
    );
};

export default CardOfStatusPainel;