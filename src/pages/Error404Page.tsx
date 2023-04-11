import { 
  Show,
  Hide,
  Flex,
  Heading,
  Container,
  Link,
  Text
} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/TopMenu/MenuMobile';
import MenuSideBar from '../components/MenuSideBar/MenuSideBar';

import '../styles/Error404Page.css';

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
          height='100%'
          flexDir='column'
          className='wrapper'
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
        >

          <Flex
            className='error'
            alignItems='center'
            justifyContent='space-between'
          >

            <Text
              lineHeight='1'
              display='block'
              fontWeight='900'
              fontSize='15rem'
              className='number'
              fontFamily='Inter'
            >
              4
            </Text>

            <Flex
              display='block'
              width='12.2rem'
              margin='0 2.1rem'
              position='relative'
              className='illustration'
            >
              <Flex
                left='0'
                bottom='0'
                display='block'
                width='12.2rem'
                height='11.4rem'
                className='circle'
                borderRadius='50%'
                backgroundColor='#293b49'
              ></Flex>

              <Flex
                display='block'
                className='clip'
              >

                <Flex
                  display='block'
                  className='paper'
                >

                  <Flex
                    display='block'
                    className='face'
                    marginTop='2.3rem'
                    position='relative'
                  >

                    <Flex
                      top='0'
                      left='2.4rem'
                      width='4.6rem'
                      display='block'
                      height='0.8rem'
                      className='eyes'
                    >

                      <Flex className='eye eye__left'></Flex>
                      <Flex className='eye eye__right'></Flex>

                    </Flex>

                    <Flex className='cheeks cheeks__left'></Flex>
                    <Flex className='cheeks cheeks__right'></Flex>

                    <Flex
                      left='50%'
                      top='3.1rem'
                      width='1.6rem'
                      display='block'
                      height='0.2rem'
                      className='mouth'
                      borderRadius='0.1rem'
                      backgroundColor='#293b49'
                      transform='translateX(-50%)'
                    ></Flex>

                  </Flex>

                </Flex>

              </Flex>
            </Flex>

            <Text
              lineHeight='1'
              display='block'
              fontWeight='900'
              fontSize='15rem'
              className='number'
              fontFamily='Inter'
            >
              4
            </Text>

          </Flex>

          <Heading
            as='h1'
            fontSize='2rem'
            color='#293b49'
            className='text'
            marginTop='1rem'
            fontWeight='300'
            fontFamily='Inter'
          >
            Ops, error 404. A página que você está procurando não existe.
          </Heading>

          <Link
            href='/'
            color='white'
            marginTop='2rem'
            fontFamily='Inter'
            className='button'
            padding='1.2rem 3rem'
            backgroundColor='blue.600'
          >
            Voltar para a Página Inicial
          </Link>

        </Flex>

        <Footer />

      </Container>
    </Flex>
  );
};

export default Error404Page;