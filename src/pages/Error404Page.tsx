import {
  Flex,
  Text,
  Button,
  Heading
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import '../styles/Error404Page.css';

const Error404Page = () => {

  const { t } = useTranslation();
  
  return (
    <Flex
      p='1rem'
      height='100vh'
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
          className='number'
          fontFamily='Inter'
          fontSize={['5rem', '5rem', '10rem', '15rem']}
        >
          4
        </Text>

        <Flex
          display='block'
          margin='0 2.1rem'
          position='relative'
          className='illustration'
          width={['5rem','5rem','12.2rem','12.2rem']}
        >
          <Flex
            display='block'
            className='circle'
            borderRadius='50%'
            backgroundColor='#293b49'
            left={['-18px', '-18px', '0', '0']}
            bottom={['-2px', '-2px', '0', '0']}
            width={['7.2rem', '7.2rem', '12.2rem', '12.2rem']}
            height={['7.4rem', '7.4rem', '11.4rem', '11.4rem']}
          ></Flex>

          <Flex
            display='block'
            className='clip'
            height={['9rem', '9rem', '13rem', '13rem']}
            width={['8.5rem', '8.5rem', '12.5rem', '12.5rem']}
          >

            <Flex
              display='block'
              className='paper'
              width={['5.5rem', '5.5rem', '9.2rem', '9.2rem']}
              height={['8.4rem', '8.4rem', '12.4rem', '12.4rem']}
            >

              <Flex
                display='block'
                className='face'
                marginTop='2.3rem'
                position='relative'
              >

                <Flex
                  top='0'
                  display='block'
                  height='0.8rem'
                  className='eyes'
                  width={['2rem', '2rem', '4.6rem', '4.6rem']}
                  left={['1.4rem', '1.4rem', '2.4rem', '2.4rem']}
                >

                  <Flex
                    className='eye eye__left'
                    width={['0.4rem', '0.4rem', '0.8rem', '0.8rem']}
                    height={['0.4rem', '0.4rem', '0.8rem', '0.8rem']}
                  ></Flex>

                  <Flex
                    className='eye eye__right'
                    width={['0.4rem', '0.4rem', '0.8rem', '0.8rem']}
                    height={['0.4rem', '0.4rem', '0.8rem', '0.8rem']}
                  >
                  </Flex>

                </Flex>

                <Flex
                  className='cheeks cheeks__left'
                  display={['none', 'none', 'block', 'block']}
                ></Flex>
                
                <Flex
                  className='cheeks cheeks__right'
                  display={['none', 'none', 'block', 'block']}
                ></Flex>

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
          className='number'
          fontFamily='Inter'
          fontSize={['5rem', '5rem', '10rem', '15rem']}
        >
          4
        </Text>

      </Flex>

      <Heading
        as='h1'
        color='#293b49'
        className='text'
        marginTop='1rem'
        fontWeight='300'
        fontFamily='Inter'
        textAlign='center'
        marginBottom={['1rem', '1rem', '1rem', '2rem']}
        fontSize={['1.5rem', '1.5rem', '1rem', '2rem']}
      >
        {t('404Page.firstParagraph')}
      </Heading>

      <NavLink to='/'>
        <Flex
          color='white'
          padding='1rem'
          fontFamily='Inter'
          className='button'
          textAlign='center'
          backgroundColor='blue.600'
          _hover={{ bg: 'blue.700' }}
        >
          {t('404Page.button')}
        </Flex>
      </NavLink>

    </Flex>
  );
};

export default Error404Page;