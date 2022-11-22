import { 
  Flex, 
  Link,
  Text, 
  Heading,
  ListItem,
  Container, 
  UnorderedList
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'

const Introduction = () => {
  return (
    <Flex>
      <MenuSideBar />
      <Container maxW='container.xl' height='100vh' overflowY='auto'>
        
        <Heading as='h1' my='1rem' fontSize='2rem'>
          Sobre o AccessHub
        </Heading>

        <Text mb='1rem'>
          É importante garantir o desenvolvimento de conteúdos ou serviços acessíveis na internet 
          que estejam disponíveis para todas as pessoas. Para isso, a adoção de práticas de 
          acessibilidade na Web visa tornar os sites mais acessíveis e utilizáveis pelo maior 
          número possível de pessoas, independentemente de seus conhecimentos, habilidades ou 
          características técnicas.
        </Text>

        <Text mb='1rem'>
          Portanto, implementar funcionalidades de acessibilidade em projetos de desenvolvimento de 
          sistemas Web, significa que pessoas com algum tipo de deficiência podem fazer uso da Web 
          nas mesmas condições que o restante das pessoas. Aplicar as práticas de acessibilidade 
          permite que os usuários possam perceber, compreender, navegar e interagir com a Web.
        </Text>

        <Text mb='1rem'>
          Entretanto, o desenvolvimento de sistemas Web é, geralmente, realizado sem oferecer o suporte 
          necessário para que pessoas com limitações possam acessá-los sem dificuldades. 
        </Text>

        <Text mb='1rem'>
          Dessa forma, criamos o AccessHub, um projeto open-source alinhado as diretrizes e recomendações 
          do WCAG e do eMAG que busca oferecer exemplos de implementações como referência, 
          principalmente, para desenvolvedores inexperientes, facilitando no processo de programação de 
          funcionalidades e recursos que estejam em conformidade com as recomendações de acessibilidade, 
          podendo ser reutilizados, diminuindo o retrabalho e agilizando o processo de desenvolvimento.
        </Text>

        <Heading as='h2' mb='1rem' fontSize='1.5rem'>
          Objetivos
        </Heading>

        <Text mb='1rem'>
          Assim, temos como objetivo lhe proporcionar um guia sobre funcionalidades de acessibilidade para desenvolvedores Web, 
          a fim de prover:
        </Text>

        <UnorderedList>
          <ListItem>
            Apresentação de padrões e materiais de referência para ajudar na construção de sistemas 
            Web acessíveis. 
          </ListItem>
          <ListItem>
            Sugerir um conjunto de recomendações de funcionalidades para acessibilidade Web.
          </ListItem>
          <ListItem>
            Fornecer exemplos open source para acessibilidade Web que possam ser facilmente acessados, 
            compreendidos e compartilhados.
          </ListItem>
        </UnorderedList>

        <Heading as='h2' my='1rem' fontSize='1.5rem'>
          Como contribuir?
        </Heading>

        <Text mb='1rem'>
          O desenvolvimento do AccessHub é uma iniciativa para a construção de um projeto open-sourcer 
          para a comunidade e contribuições são bem vindas. Para contribuir, <Link href='https://github.com/daviteixeira-btm/accesshub'>acesse e use o mecanismo de 
          contribuição do Github</Link>, você pode encontar o passo a passo disponibilizado na descrição do projeto.
        </Text>

        <Heading as='h3' mb='1rem' fontSize='1.5rem'>
          Referências
        </Heading>

        <Text mb='1rem'>
          O AccessHub ainda está em desenvolvimento, podendo receber incrementos conforme a pesquisa 
          avança. Até o momento temos o trabalho do qual o projeto está sendo realizado:
        </Text>

        <Text mb='2rem'>
          SILVA, Davi Teixeira; BEZERRA, Carla Ilane Moreira; SOUZA FILHO, José Cezar 
          Junior de. <Text as='b'>ACCESSHUB: GUIA DE ACESSIBILIDADE PARA DESENVOLVEDORES WEB</Text>. 
          2022. 55 f. TCC (Graduação) - Curso de Sistemas de Informação, Universidade Federal do 
          Ceará, Quixadá, 2022.
        </Text>

      </Container>
    </Flex>
  )
}

export default Introduction