import { h } from 'preact'
import {
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsPlusSquare } from 'react-icons/bs'

import CardCursos from '@client/components/Cards'
import CardAzul from '@client/components/CaixaPesquisa'

import FundoCursos from '../../../public/souv/Fundo-Cursos.svg'

export default function MeusCursos() {
  const { colorMode } = useColorMode()
  return (
    <Container maxW={'3x1'} p={4} bg={useColorModeValue('gray.100', 'rgba(12,14,22,255)')}>
      <CardAzul titulo={'Meus Cursos'} />

      <br />
      <Stack
        borderRadius={'xl'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <Heading marginLeft={'15'} fontWeight={600} fontSize={{ base: 'xl', md: '4xl', sm: '2xl' }} lineHeight={'100%'}>
          Cursos
        </Heading>

        <SimpleGrid columns={4} alignSelf={'center'}>
          <CardCursos
            src={FundoCursos}
            modulos={'8 módulos'}
            titulo={'Introdução ao Jornalismo'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Acessar'}
            nomelink={'/CursoAdquirido'}
          />
          <CardCursos
            src={FundoCursos}
            modulos={'20 módulos'}
            titulo={'Jornalismo Avançado'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Acessar'}
            nomelink={'/CursoAdquirido'}
          />
          <CardCursos
            src={FundoCursos}
            modulos={'3 módulos'}
            titulo={'Comunicação e Oratória'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Acessar'}
            nomelink={'/CursoAdquirido'}
          />
        </SimpleGrid>
        <Link
          href={'/Cursos'}
          alignSelf={'center'}
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
          fontSize={'lg'}
          color={'#0ab8d7'}
        >
          <Flex
            align={'center'}
            border={'2px'}
            p={'4'}
            mx={'4'}
            borderRadius={'lg'}
            role={'group'}
            cursor={'pointer'}
            _hover={{
              bg: '#0ab8d7',
              color: 'white',
            }}
          >
            <Icon as={BsPlusSquare} mr={'15'} boxSize={22} />
            <b>Adquirir mais cursos</b>
          </Flex>
        </Link>
      </Stack>
      <br />
    </Container>
  )
}
