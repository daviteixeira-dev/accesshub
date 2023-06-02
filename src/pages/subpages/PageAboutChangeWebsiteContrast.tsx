import {
    Flex,
    Text,
    Hide,
    Show,
    Heading,
    Container
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/TopMenu/MenuMobile';
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar';
import PostComponent from '../../components/PostComponent/PostComponent';
import BadgeWCAGInfoNumber from '../../components/BadgeWCAGInfoNumber/BadgeWCAGInfoNumber';

const PageAboutChangeWebsiteContrast = () => {
    return (
        <Flex>

            <SkipNavLink zIndex={2}>
                Ir para o conteúdo
            </SkipNavLink>

            <Hide below='md'>
                <MenuSideBar />
            </Hide>

            <Container
                p='0'
                height='100vh'
                overflowY='auto'
                maxW='container.xl'
            >

                <Show below='md'>
                    <MenuMobile marginBottom='0' />
                </Show>

                <Flex
                    p='1rem'
                    flexDirection='column'
                >

                    <SkipNavContent />

                    <Heading
                        as='h1'
                        mb='1rem'
                        fontSize='2rem'
                        fontWeight='700'
                        fontFamily='Inter'
                        mt={['5rem', '5rem', '1rem', '1rem']}
                    >
                        Funcionalidade de Mudança de Contraste de um Site
                    </Heading>

                    <Heading
                        as='h2'
                        mb='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Oferecendo um Contraste Mínimo entre Plano de Fundo e Primeiro Plano

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 1.4.3'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.3 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        É crucial garantir que as cores do plano de fundo e do primeiro plano
                        apresentem um contraste adequado para serem visualizadas por pessoas
                        com baixa visão, cromodeficiências ou que utilizam monitores de vídeo
                        monocromático. A fim de melhorar a acessibilidade, evite o uso de
                        imagens como plano de fundo, pois isso pode dificultar a leitura
                        e distrair o usuário.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        A relação de contraste pode ser calculada dividindo-se o valor da
                        luminosidade relativa da cor mais clara de um dos planos pelo valor
                        da luminosidade relativa da cor mais escura do outro plano. A norma
                        ISO-9241-3 recomenda uma relação de contraste mínimo de 3:1 entre
                        plano de fundo e primeiro plano. No entanto, devido à perda de
                        percepção do contraste resultante de baixa acuidade visual,
                        cromodeficiência ou envelhecimento, é recomendado um mínimo de 4,5:1
                    </Text>

                    <Heading
                        as='h2'
                        mb='1rem'
                        display='flex'
                        fontWeight='600'
                        fontSize='1.5rem'
                        fontFamily='Inter'
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems={['start', 'start', 'center', 'center']}
                    >
                        Contraste Aprimorado

                        <BadgeWCAGInfoNumber
                            textWCAG='Critério 1.4.6'
                            tooltipText='Ver Critério WCAG de Sucesso 1.4.6 (inglês)'
                            linkWCAG='https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced'
                        />
                    </Heading>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O critério 1.4.6 da WCAG estabelece que os elementos visuais de uma
                        página web devem apresentar um contraste adequado para facilitar a
                        leitura e compreensão de pessoas com deficiência visual ou dificuldades
                        de leitura. Para atender a esse critério, é importante garantir que
                        o contraste padrão do site esteja em conformidade com as normas de
                        acessibilidade.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        O contraste adequado é medido pelo índice de contraste (IC), que varia
                        de 1:1 (sem contraste) a 21:1 (alto contraste). Para texto normal, o
                        índice de contraste mínimo recomendado é de 4,5:1. Para texto grande
                        (18 pontos ou mais) e texto em negrito, o índice mínimo recomendado
                        é de 3:1.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Portanto, é fundamental que os desenvolvedores de sites estejam
                        atentos ao contraste adequado dos elementos visuais, garantindo
                        a acessibilidade para todas as pessoas.
                    </Text>

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Aqui está um exemplo de código que pode ser usado para
                        mudar o contraste do site através de um botão:
                    </Text>

                    <PostComponent article_name={'alterar-contraste_01'} />

                    <Text
                        mb='1rem'
                        fontWeight='400'
                        fontSize='1.2rem'
                        fontFamily='Inter'
                    >
                        Lembre-se de que esse código é apenas uma sugestão e pode ser
                        adaptado de acordo com as necessidades específicas do seu projeto.
                    </Text>

                </Flex>

                <Footer />

            </Container>
        </Flex>
    )
}

export default PageAboutChangeWebsiteContrast