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

import React, { useState } from 'react'

const CadastroPage = () => {
  const [rememberMe, setRememberMe] = useState(false)

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe)
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh" /* Alterei de height para minHeight */
      backgroundColor="#F7FAFC"
    >
      <Box
        fontSize="26px"
        fontFamily="Montserrat"
        fontWeight="600"
        lineHeight="36.4px"
        color="#2D3748"
        textAlign="center"
        marginBottom="20px"
      >
        Bem-Vindo!
      </Box>
      <Box
        fontSize="18px"
        fontFamily="Montserrat"
        fontWeight="600"
        lineHeight="25.2px"
        textAlign="center"
        marginBottom="10px"
      >
        Acesse nossa plataforma de cursos
      </Box>
      <Box
        fontSize="18px"
        fontFamily="Montserrat"
        fontWeight="600"
        lineHeight="25.2px"
        textAlign="center"
      >
        e estude conosco.
      </Box>
      <Box
        width="452.5px"
        height="713.5px"
        backgroundColor="white"
        borderRadius="15px"
        padding="20px"
        boxShadow="0px 4px 10px rgba(1, 181, 216, 0.5)"
        marginTop="20px"
      >
        <Heading
          fontSize="26px"
          fontFamily="Montserrat"
          fontWeight="600"
          lineHeight="36.4px"
          as="h1"
          size="lg"
          color="#2D3748"
          textAlign="center"
          marginBottom="20px"
        >
          Cadastro
        </Heading>
        <Stack spacing={4}>
          <Box
            fontSize="18px"
            fontFamily="Montserrat"
            fontWeight="600"
            lineHeight="25.2px"
          >
            Nome
          </Box>
          <Input
            placeholder="Nome completo"
            variant="filled"
            size="lg"
            borderRadius="15px"
            paddingLeft="20px"
          />
          <Box fontWeight="bold">Usuário</Box>
          <Input
            placeholder="Nome de usuário"
            variant="filled"
            size="lg"
            borderRadius="15px"
            paddingLeft="20px"
          />
          <Box fontWeight="bold">E-mail</Box>
          <Input
            placeholder="E-mail"
            variant="filled"
            size="lg"
            borderRadius="15px"
            paddingLeft="20px"
          />
          <Box fontWeight="bold">Senha</Box>
          <Input
            type="password"
            placeholder="Senha"
            variant="filled"
            size="lg"
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
            <Box marginLeft="5px">Lembrar de mim</Box>
          </Flex>
          <Button
            width="100%"
            height="64px"
            borderRadius="12px"
            backgroundColor="#01B5D8"
            color="white"
            fontSize="18px"
            fontWeight="bold"
            onClick={() => {
              // Adicione a lógica de cadastro aqui
              console.log('Cadastrado com sucesso!')
            }}
          >
            Cadastrar
          </Button>
          <Box
            marginTop="10px"
            fontSize="18px"
            fontFamily="Montserrat"
            fontWeight="600"
            lineHeight="25.2px"
            textAlign="center"
            color="#A0AEC0"
          >
            Já possui conta? <Box as="span" color="#01B5D8">Entrar</Box>
          </Box>
        </Stack>
      </Box>
      <Box marginTop="20px" color="#A0AEC0">
        @ 2021, Made with Chakra UI by <Box as="span" color="#01B5D8">Arthur Belfort</Box>
      </Box>
    </Flex>
  )
}

export default CadastroPage
