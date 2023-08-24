import { 
  Flex,
  Link,
  Text,
  Hide,
  Show,
  Image,
  Heading,
  ListItem,
  Container,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react';

import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';

import puzzle from '../../public/puzzle.png';

const Introduction = () => {

  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

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
          <MenuMobile marginBottom='0'/>
        </Show>

        <Flex
          p='1rem'
          flexDirection='column'
        >

          <SkipNavContent />

          <Heading
            as='h1'
            mb='1.5rem'
            fontSize='2rem'
            fontWeight='700'
            fontFamily='Inter'
            mt={['6rem', '6rem', '1.5rem', '1.5rem']}
          >
            Sobre o AccessHub
          </Heading>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            É importante garantir o desenvolvimento de conteúdos ou serviços acessíveis na internet 
            que estejam disponíveis para todas as pessoas. Para isso, a adoção de práticas de 
            acessibilidade na Web visa tornar os sites mais acessíveis e utilizáveis pelo maior 
            número possível de pessoas, independentemente de seus conhecimentos, habilidades ou 
            características técnicas.
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            Portanto, implementar funcionalidades de acessibilidade em projetos de desenvolvimento de 
            sistemas Web, significa que pessoas com algum tipo de deficiência podem fazer uso da Web 
            nas mesmas condições que o restante das pessoas. Aplicar as práticas de acessibilidade 
            permite que os usuários possam perceber, compreender, navegar e interagir com a Web.
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            Entretanto, o desenvolvimento de sistemas Web é, geralmente, realizado sem oferecer o suporte 
            necessário para que pessoas com limitações possam acessá-los sem dificuldades. 
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            Dessa forma, criamos o AccessHub, um projeto open-source alinhado as diretrizes e recomendações 
            do WCAG e do eMAG que busca oferecer exemplos de implementações como referência, 
            principalmente, para desenvolvedores inexperientes, facilitando no processo de programação de 
            funcionalidades e recursos que estejam em conformidade com as recomendações de acessibilidade, 
            podendo ser reutilizados, diminuindo o retrabalho e agilizando o processo de desenvolvimento.
          </Text>

          <Heading
            as='h2'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter'
          >
            Objetivos
          </Heading>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            Assim, temos como objetivo lhe proporcionar um guia sobre funcionalidades de acessibilidade para desenvolvedores Web, 
            a fim de prover:
          </Text>

          <UnorderedList>
            <ListItem
              fontSize='1rem'
              fontWeight='500'
              fontFamily='Inter'
            >
              Apresentação de padrões e materiais de referência para ajudar na construção de sistemas 
              Web acessíveis. 
            </ListItem>
            <ListItem
              fontSize='1rem'
              fontWeight='500'
              fontFamily='Inter'
            >
              Sugerir um conjunto de recomendações de funcionalidades para acessibilidade Web.
            </ListItem>
            <ListItem
              fontSize='1rem'
              fontWeight='500'
              fontFamily='Inter'
            >
              Fornecer exemplos open source para acessibilidade Web que possam ser facilmente acessados, 
              compreendidos e compartilhados.
            </ListItem>
          </UnorderedList>

          <Flex
            p='1rem'
            my='2rem'
            textAlign='center'
            alignItems='center'
            borderRadius='1rem'
            flexDirection='column'
            justifyContent='center'
            background={bgColor}
          >
            <Image
              src={puzzle}
              boxSize='6rem'
              borderRadius='full'
              title='Nessa imagem temos uma mão mostrando uma peça de quebra-cabeça, usada para referenciar a ideia de contribuição com o projeto.'
            />

            <Heading
              as='h3'
              my='1rem'
              fontWeight='600'
              color={textColor}
              fontSize='1.5rem'
              fontFamily='Inter'
            >
              Como contribuir?
            </Heading>

            <Text
              mb='1rem'
              fontWeight='500'
              fontSize='1.2rem'
              color={textColor}
              fontFamily='Inter'
            >
              O desenvolvimento do AccessHub é uma iniciativa para a construção de um projeto open-source 
              para a comunidade e contribuições são bem-vindas. Para contribuir, <Link color='blue.900' textDecor='underline' href='https://github.com/daviteixeira-btm/accesshub/pulls' isExternal >acesse e use o mecanismo de 
              contribuição do GitHub</Link>, você pode encontar o passo a passo disponibilizado na descrição do projeto.
            </Text>

          </Flex>

          <Heading
            as='h4'
            mb='1rem'
            fontWeight='600'
            fontSize='1.5rem'
            fontFamily='Inter'
          >
            Referências
          </Heading>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            O AccessHub ainda está em desenvolvimento, podendo receber incrementos conforme a pesquisa 
            avança. Até o momento, temos a <Link fontWeight='bold' color='blue.900' href='https://repositorio.ufc.br/handle/riufc/73954' textDecor='underline' isExternal> monografia</Link> da qual o projeto foi desenvolvido:
          </Text>

          <Text
            mb='1rem'
            fontWeight='400'
            fontSize='1.2rem'
            fontFamily='Inter'
          >
            <Text as='span' fontWeight='bold' >Citação:</Text> SILVA, Davi Teixeira. <Text as='b'>AccessHub: um guia de acessibilidade para desenvolvedores web</Text>. 2023. 88 f. Trabalho de Conclusão de Curso (Graduação em Sistema de Informação)- Universidade Federal do Ceará, Campus de Quixadá, Quixadá, 2023.
          </Text>

        </Flex>

        <Footer />

      </Container>
    </Flex>
  );
};

export default Introduction;