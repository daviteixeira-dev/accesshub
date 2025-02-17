import { SimpleGrid } from '@chakra-ui/react';

import CardOfStatusPainel from './CardOfStatusPainel';

import { useTranslation } from 'react-i18next';

const dataForTheCardOfStatusPainel = [
    {
        cardName: 'currentScenarioPage.initialHTMLCard.title',
        badge_colorBgCode: 'yellow',
        badge_colorBgWaiAria: 'yellow',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.initialHTMLCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.initialHTMLCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.initialHTMLCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.recommendationsCard.title',
        badge_colorBgCode: 'yellow',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.recommendationsCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.recommendationsCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.recommendationsCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.headingCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.headingCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.headingCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.headingCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.skipNavigationCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.skipNavigationCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.skipNavigationCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.skipNavigationCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.breadcrumbsCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'yellow',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.breadcrumbsCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.breadcrumbsCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.breadcrumbsCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.tablesCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.tablesCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.tablesCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.tablesCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.formsCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.formsCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.formsCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.formsCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.linksCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'yellow',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.linksCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.linksCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.linksCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.imagesCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.imagesCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.imagesCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.imagesCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.videosCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.videosCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.videosCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.videosCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.audiosCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.audiosCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.audiosCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.audiosCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.changeFontSizeCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.changeFontSizeCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.changeFontSizeCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.changeFontSizeCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.changeSiteContrastCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.changeSiteContrastCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.changeSiteContrastCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.changeSiteContrastCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.listenToDescriptionCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.listenToDescriptionCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.listenToDescriptionCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.listenToDescriptionCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.keyboardNavigationCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.listenToDescriptionCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.listenToDescriptionCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.listenToDescriptionCard.hasTextualExamples'
    },
    {
        cardName: 'currentScenarioPage.readingMaskCard.title',
        badge_colorBgCode: 'green',
        badge_colorBgWaiAria: 'red',
        badge_colorBgHasText: 'green',
        tooltip_tooltipTextWaiAria: 'currentScenarioPage.readingMaskCard.hasWaiAriaExamples',
        tooltip_tooltipTextCode: 'currentScenarioPage.readingMaskCard.hasCodeExamples',
        tooltip_tooltipTextHasText: 'currentScenarioPage.readingMaskCard.hasTextualExamples'
    },
]

const ComponentStatusPanel = () => {

    const { t } = useTranslation();
    
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
                        cardName={t(item.cardName)}
                        badge_colorBgCode={item.badge_colorBgCode}
                        badge_colorBgWaiAria={item.badge_colorBgWaiAria}
                        badge_colorBgHasText={item.badge_colorBgHasText}
                        tooltip_tooltipTextWaiAria={t(item.tooltip_tooltipTextWaiAria)}
                        tooltip_tooltipTextCode={t(item.tooltip_tooltipTextCode)}
                        tooltip_tooltipTextHasText={t(item.tooltip_tooltipTextHasText)}
                    />
                ))
            }
        </SimpleGrid>
    );
};

export default ComponentStatusPanel;