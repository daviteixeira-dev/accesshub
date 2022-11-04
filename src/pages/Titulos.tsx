import { Container, Flex, Heading, Text } from "@chakra-ui/react"
import MenuSideBar from "../components/MenuSideBar/MenuSideBar"
import PostComponent from "../components/PostComponent/PostComponent"

const Titulos = () => {
  return (
    <Flex>
        <MenuSideBar />
        <Container maxW='container.xl' height='100vh' overflowY='auto'>
            <Heading mb='1rem'>Cabeçalhos</Heading>
            <Text mb='1rem'>Á seguir um exemplo do codigo para um cabeçalho: </Text>
            <PostComponent article_name={'article'}/>
        </Container>
    </Flex>
  )
}

export default Titulos