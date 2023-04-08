import { 
  Show,
  Hide,
  Flex,
  Heading,
  Container
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';

const Error404Page = () => {
  return (
    <Flex>

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
          <Heading
            as='h1'
            mb='1.5rem'
            fontSize='2rem'
            fontWeight='700'
            fontFamily='Inter'
            mt={['6rem', '6rem', '1.5rem', '1.5rem']}
          >
            Testando a página de de 404.
          </Heading>
        </Flex>

        <Footer />

      </Container>
    </Flex>
  );
};

export default Error404Page;