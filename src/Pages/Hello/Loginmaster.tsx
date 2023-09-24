import { h } from 'preact'
import {
  Heading,
  Stack,
  Text,
  Input,
  Flex,
  Box,
  Switch,
  Button,
} from '@chakra-ui/react'

import React, { useState } from 'react';

const LoginPage = () => {  
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  
  return (
    <Box
      box-boxSizing='border-box'
      width="353px"
      height= "555px"
      flex-shrink= "0"
      top="261px"
      left="466px"
      position="absolute"
      padding="20px"
    >
      <Stack spacing={4}>
        <Heading
          as="h1"
          size="lg"
          width="334px"
          height="87px"
          left="11px"
          flexShrink="0"
          color="#01B5D8"
          textAlign="left"
          font-family= 'Montserrat, sans-serif'
          fontSize="32px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="41.6px"
        >
          Seja Bem-Vindo ao <br /> Painel de Controle
        </Heading>
        <Text
          width="304px"
          height="55px"
          top="103px"
          left="11px"
          flexShrink="0"
          color="var(--gray-gray-400, #A0AEC0)"
          font-family= 'Montserrat, sans-serif'
          fontSize="18x"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="27px"
        >
          Entre com seu e-mail ou nome de usuário e senha.
        </Text>
        <Text
          width="100%"
          height="100%"
          color= "#2D3748"
          font-size= "18px"
          font-family= "Montserrat"
          font-weight= "600"
          line-height= "25.20px"
          word-wrap= "break-word"
          fontWeight="bold"
        >
          Usuário
        </Text>
        <Box>
          <Input
            placeholder="E-mail ou usuário"
            width="100%"
            height="58px"
            border="1px solid #ccc"
            borderRadius="15px"
            paddingLeft="20px"
          />
        </Box>
        <Text
          width= "100%" 
          height= "100%" 
          color= "2D3748" 
          font-size= "18px" 
          font-family= "Montserrat" 
          font-weight= "600" 
          line-height= "25.20px" 
          word-wrap= "break-word"
          fontWeight= "bold"
        >
          Senha
        </Text>
        <Input
          type="password"
          placeholder="Senha"
          width="100%"
          height="58px"
          border="1px solid #ccc"
          borderRadius="15px"
          paddingLeft="20px"
        />
        <Flex alignItems="center">
          <Box
            display="flex"
            width="36px"
            padding="1.437px 2.5px 1.437px 1.437px"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            gap="9.343px"
          >
            <Switch
              isChecked={rememberMe}
              onChange={handleRememberMeChange}
              borderRadius="97.74px"
              background="linear-gradient(266.33deg, #01B5D8 0%, rgba(1, 181, 216, 1) 100%)"
              boxShadow="0px 4px 10px rgba(1, 181, 216, 0.5)"
              border="none"
              width="100%"
              height="100%"
            />
          </Box>
          <Text
            width="100%"
            height="100%"
            color= "#2D3748"
            font-size= "12px"
            font-family= "Montserrat"
            font-weight= "400"
            line-height= "18px"
            word-wrap= "break-word"
            marginLeft={"10px"}
          >
            Lembrar de mim
          </Text>
        </Flex>
        <Button
          display="flex"
          width="350px"
          height="64px"
          padding="0px 8px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          borderRadius="12px"
          background="#01B5D8"
          color="white" // Define a cor do texto dentro do botão
        >
          Entrar
        </Button>
      </Stack>
      {/* Adicione o texto abaixo */}
      <Text
        marginTop="20px"
        fontSize="12px"
        font-family="Montserrat"
        fontWeight="600"
        color="#A0AEC0"
        textAlign="center"
      >
        @ 2021, Made with Chakra UI @ by <Text color="#01B5D8" display="inline">Arthur Belfort</Text>
      </Text>
    </Box>
  );
};

export default LoginPage;
