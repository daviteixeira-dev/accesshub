import { 
  Flex, 
  Text, 
  Container, 
  Heading,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'

const Introduction = () => {
  return (
    <Flex>
      <MenuSideBar />
      <Container maxW='container.xl' height='100vh' overflowY='auto'>
        <Heading as='h1' mb='1rem'>
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
          permite que os usuários possam perceber, compreender, navegar e interagir com a Web, assim 
          como também beneficiam os idosos que tendem a observar a diminuição de suas habilidades 
          como resultado da idade.
        </Text>

        <Text mb='1rem'>
          Entretanto, o desenvolvimento de sistemas Web é, geralmente, realizado sem oferecer o suporte 
          necessário para que pessoas com limitações possam acessá-los sem dificuldades. 
        </Text>

        <Heading as='h2' mb='1rem'>
          Fundamentação teórica
        </Heading>

        <Text mb='1rem'>
          Visto esta problematica, orgãos internacionais se juntaram e criaram o World Wide Web Consortium (W3C), 
          onde este criou a Web Accessibility Initiative (WAI), desenvolvendo assim as Web Content 
          Accessibility Guidelines (WCAG) que descrevem os requisitos para tornar qualquer conteúdo 
          digital acessível a diversos usuários.
        </Text>

        <Text mb='1rem'>
          Logo depois, no Brasil, visto a necessidade de garantir a acessibilidade dos sites e portais do governo brasileiro, foi criado o Modelo de Acessibilidade em Governo Eletrônico (eMAG). Este documento 
          contém um conjunto de recomendações que auxiliam o desenvolvimento do conteúdo digital do governo federal para que seja acessível 
          a todos.
        </Text>

        <Text mb='1rem'>
          Ambos os documentos são diretrizes e especificações que auxiliam no desenvolvimento de projetos 
          web acessiveis, propondo padrões de acessibilidade que visam fornecer a possibilidade de 
          acesso a conteúdo da web para usuários com deficiências, ofertando documentações sobre, 
          recursos, técnicas, código e possíveis falhas, sendo esses dois documentos a base para a 
          construção do AccessHub.
        </Text>

        <Text mb='1rem'>
          Entretanto, podemos observar que existem dificuldades de tornar os projetos de sistemas Web 
          acessíveis, sejam elas pela falta de conhecimento técnico sobre programação acessível por 
          parte dos desenvolvedores ou problemas relacionados à falta de tempo do time. Portanto, oferecer 
          exemplos de implementações como referência, principalmente, para desenvolvedores inexperientes, 
          auxilia no processo de programação de funcionalidades e recursos que estejam em conformidade com 
          as recomendações de acessibilidade, podendo ser reutilizados, diminuindo o retrabalho e 
          agilizando o processo de desenvolvimento.
        </Text>

        <Heading as='h3' mb='1rem'>
          Objetivos
        </Heading>

        <Text mb='1rem'>
          Desta forma, considerando o contexto apresentado, o AccessHub tem como objetivo desenvolver um 
          website a ser usado como um guia sobre funcionalidades de acessibilidade para desenvolvedores Web, 
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

        <Heading as='h4' my='1rem'>
          Referências
        </Heading>


      </Container>
    </Flex>
  )
}

export default Introduction