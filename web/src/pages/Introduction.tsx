import { 
  Flex, 
  Text, 
  Container 
} from '@chakra-ui/react'

import MenuSideBar from '../components/MenuSideBar/MenuSideBar'

const Introduction = () => {
  return (
    <Flex>
      <MenuSideBar />
      <Container maxW='container.xl'>
        <Text>Introdução</Text>
      </Container>
    </Flex>
  )
}

export default Introduction