import { 
  Flex, 
  Text, 
  Container, 
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'

const Components = () => {
  return (
    <Flex>
      <MenuSideBar />
      <Container maxW='container.xl'>
        <Text>Componentes</Text>
      </Container>
    </Flex>
  )
}

export default Components