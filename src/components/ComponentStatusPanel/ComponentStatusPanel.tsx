import { SimpleGrid } from '@chakra-ui/react';
import CardOfStatusPainel from './CardOfStatusPainel';

const dataForTheCardOfStatusPainel = [
    {
        cardName: 'HTML Inicial',
        badge_colorBgCode: 'yellow',
        badge_colorBgWaiAria: 'yellow',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Possui alguns exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta alguns exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Recomendações',
        badge_colorBgCode: 'yellow',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta alguns exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Cabeçalhos',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Pular Navegação',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Breadcrumbs',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'yellow',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Possui alguns exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Tabelas',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Formulários',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Links',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'yellow',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Possui alguns exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Imagens',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Vídeos',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Áudios',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Mudar o tamanho da fonte',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Alterar o contraste do site',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Ouvir a descrição',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Navegação pelo teclado',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
    {
        cardName: 'Máscara de Leitura',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'Não possui exemplos com WAI-ARIA.',
        tooltip_tooltipTextCode: 'Apresenta exemplos de código.',
        tooltip_tooltipTextHasText: 'Apresenta exemplos textuais.'
    },
]

const ComponentStatusPanel = () => {
    return (
        <SimpleGrid
            p='.5rem'
            spacing={4}
            width='100%'
            height='auto'
            borderRadius='1rem'
            columns={[1, 1, 4, 4]}
            border='1px solid gray'
        >
            {
                dataForTheCardOfStatusPainel.map((item, index) => (
                    <CardOfStatusPainel
                        key={index}
                        cardName={item.cardName}
                        badge_colorBgCode={item.badge_colorBgCode}
                        badge_colorBgWaiAria={item.badge_colorBgWaiAria}
                        badge_colorBgHasText={item.badge_colorBgHasText}
                        tooltip_tooltipTextWaiAria={item.tooltip_tooltipTextWaiAria}
                        tooltip_tooltipTextCode={item.tooltip_tooltipTextCode}
                        tooltip_tooltipTextHasText={item.tooltip_tooltipTextHasText}
                    />
                ))
            }
        </SimpleGrid>
    );
};

export default ComponentStatusPanel;