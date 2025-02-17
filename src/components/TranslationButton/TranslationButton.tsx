import { IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";

interface TranslationButtonProps {
    // Define a língua que o botão representa. Podendo ser 'pt' ou 'en'
    language: "pt" | "en";

    ariaLabelButton?: string;
    colorButton?: string;
    colorButtonHover?: string;
    bgButton?: string;
    bgButtonHover?: string;
    tooltipText?: string;
    flagIcon?: React.ReactNode;
};

const TranslationButton: React.FC<TranslationButtonProps> = ({
  language,
  ariaLabelButton,
  colorButton,
  colorButtonHover,
  bgButton,
  bgButtonHover,
  tooltipText,
  flagIcon,
}) => {
  
    const { i18n } = useTranslation();

    // Valores padrão para o tema (usando useColorModeValue)
  
    // Para Português:
    const defaultAriaLabelPT = "Português";
    const defaultColorButtonPT = useColorModeValue("gray.400", "gray.400");
    const defaultColorButtonPTHover = useColorModeValue("yellow.200", "yellow.400");
    const defaultBgButtonPT = useColorModeValue("gray.700", "gray.600");
    const defaultBgButtonHoverPT = useColorModeValue("green.400", "green.700");
    const defaultTooltipTextPT = "Traduzir página para o português";
    const defaultFlagIconPT = <GiBrazilFlag size="2rem" />;

    // Para Inglês:
    const defaultAriaLabelEN = "English";
    const defaultColorButtonEN = useColorModeValue("gray.400", "gray.400");
    const defaultColorButtonENHover = useColorModeValue("red.200", "red.200");
    const defaultBgButtonEN = useColorModeValue("gray.700", "gray.600");
    const defaultBgButtonHoverEN = useColorModeValue("blue.700", "blue.700");
    const defaultTooltipTextEN = "Translate page into English";
    const defaultFlagIconEN = <GiUsaFlag size="1.5rem" />;

    // Escolha dos valores padrão de acordo com o idioma selecionado
    const defaults =
        language === "pt" 
        ? {
            ariaLabel: defaultAriaLabelPT,
            color: defaultColorButtonPT,
            colorHover: defaultColorButtonPTHover,
            bg: defaultBgButtonPT,
            bgHover: defaultBgButtonHoverPT,
            tooltip: defaultTooltipTextPT,
            icon: defaultFlagIconPT,
        }
        : {
            ariaLabel: defaultAriaLabelEN,
            color: defaultColorButtonEN,
            colorHover: defaultColorButtonENHover,
            bg: defaultBgButtonEN,
            bgHover: defaultBgButtonHoverEN,
            tooltip: defaultTooltipTextEN,
            icon: defaultFlagIconEN,
        };

    // Se o usuário passar alguma propriedade, ela sobrescreve o valor padrão
    const finalAriaLabel = ariaLabelButton || defaults.ariaLabel;
    const finalColorButton = colorButton || defaults.color;
    const finalColorButtonHover = colorButtonHover || defaults.colorHover;
    const finalBgButton = bgButton || defaults.bg;
    const finalBgButtonHover = bgButtonHover || defaults.bgHover;
    const finalTooltipText = tooltipText || defaults.tooltip;
    const finalFlagIcon = flagIcon || defaults.icon;

    const isActive = i18n.language === language;

    const handleLanguageChange = () => {
        i18n.changeLanguage(language);
    };

    return (
        <Tooltip
            placement='top'
            label={finalTooltipText}
        >
            <IconButton
                aria-label={finalAriaLabel}
                onClick={handleLanguageChange}
                
                border={isActive ? "2px solid" : "none"}

                _active={{ border: "2px solid", borderColor: finalColorButton }}
                _hover={{ bg: finalBgButtonHover, color: finalColorButtonHover }}
                
                color={isActive ? finalColorButtonHover : finalColorButton}
                background={isActive ? finalBgButtonHover : finalBgButton}
            >
                {finalFlagIcon}
            </IconButton>
        </Tooltip>
    );
};

export default TranslationButton;