import { h } from 'preact'
import {
  Container,
  Stack,
  Heading,
  useColorMode,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  CircularProgress,
  CircularProgressLabel,
  Card,
  CardBody,
  Image,
  Button,
  InputGroup,
  Input,
  Icon,
  InputRightElement,
  Link,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

import CardCursos from '@client/components/Cards'

import FundoCursos from '../../../public/souv/Fundo-Cursos.svg'
import LogoSouv from '../../../public/souv/favicon-16x16.png'

interface CardProps {
  src: string
}

function CardHome(props: CardProps) {
  const { colorMode } = useColorMode()
  return (
    <Card style={{ alignItems: 'center', justifyContent: 'center', marginRight: 30, width: 420 }}>
      <CardBody>
        <Image src={props.src} borderRadius={'lg'} />
      </CardBody>
    </Card>
  )
}

export default function Home() {
  const { colorMode } = useColorMode()
  return (
    <Container maxW={'2x1'} bg={useColorModeValue('gray.100', 'rgba(12,14,22,255)')}>
      <br />
      <Heading fontSize={'30px'} mb={8}>
        <Flex justifyContent={'space-between'}>
          Área do Aluno
          <InputGroup alignSelf={'center'} size={'md'} w={'20%'}>
            <Input
              _placeholder={{ color: useColorModeValue('black', 'white') }}
              bgColor={useColorModeValue('white', '#171a23')}
              pr={'4.5rem'}
              type={'text'}
              placeholder={'Pesquisar'}
            />
            <InputRightElement width={'4.5rem'}>
              <Button h={'1.75rem'} size={'sm'}>
                <Icon as={FiSearch} color={useColorModeValue('#171a23', 'white')} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Heading>

      <Stack
        borderRadius={'lg'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <SimpleGrid columns={4} alignSelf={'center'}>
          <CardHome src={FundoCursos} />
          <CardHome src={FundoCursos} />
          <CardHome src={FundoCursos} />
          <CardHome src={FundoCursos} />
        </SimpleGrid>
        <Flex justifyContent={'flex-end'}>
          <Link href={'/PaginaErro'}>
            <Button colorScheme={'cyan'} width={'120px'} size={'md'} variant={'outline'} marginRight={'30px'}>
              Saiba Mais
            </Button>
          </Link>
        </Flex>
      </Stack>
      <br />

      <Stack
        borderRadius={'lg'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <Heading marginLeft={'15'} fontWeight={600} fontSize={{ base: 'xl', md: '3xl', sm: 'xl' }} lineHeight={'100%'}>
          Em Destaque
        </Heading>

        <SimpleGrid columns={4} alignSelf={'center'}>
          <CardCursos
            src={FundoCursos}
            modulos={'8 módulos'}
            titulo={'Introdução ao Jornalismo'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Visualizar'}
            nomelink={'/VisualizarCursos'}
          />
          <CardCursos
            src={FundoCursos}
            modulos={'20 módulos'}
            titulo={'Jornalismo Avançado'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Visualizar'}
            nomelink={'/VisualizarCursos'}
          />
          <CardCursos
            src={FundoCursos}
            modulos={'3 módulos'}
            titulo={'Comunicação e Oratória'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Visualizar'}
            nomelink={'/VisualizarCursos'}
          />
          <CardCursos
            src={FundoCursos}
            modulos={'12 módulos'}
            titulo={'Jornalismo Digital'}
            descricao={'Aprenda tudo sobre jornalismo com nosso curso de Introdução ao Jornalismo Digital'}
            nomeBotao={'Visualizar'}
            nomelink={'/VisualizarCursos'}
          />
        </SimpleGrid>
      </Stack>
      <br />

      <Stack
        borderRadius={'lg'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <Heading marginLeft={'15'} fontWeight={600} fontSize={{ base: 'xl', md: '3xl', sm: 'xl' }} lineHeight={'100%'}>
          Meus Cursos
        </Heading>
        <Flex flexDirection={'column'} justifyContent={'flex-start'}>
          <TableContainer>
            <Table size={'md'}>
              <Thead>
                <Tr>
                  <Th>
                    <Heading as={'h4'} size={'md'} color={'grey'}>
                      Título
                    </Heading>
                  </Th>
                  <Th>
                    <Heading as={'h4'} size={'md'} color={'grey'}>
                      Módulos
                    </Heading>
                  </Th>
                  <Th>
                    <Heading as={'h4'} size={'md'} color={'grey'}>
                      Progresso
                    </Heading>
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>
                    <Text as={'b'} display={'flex'} alignItems={'center'} gap={'5'}>
                      <img src={LogoSouv} alt={''} />
                      Introdução ao Jornalismo
                    </Text>
                  </Td>
                  <Td>
                    <Text as={'b'}>14</Text>
                  </Td>
                  <Td>
                    <CircularProgress value={25} color={'cyan.400'}>
                      <CircularProgressLabel>25%</CircularProgressLabel>
                    </CircularProgress>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as={'b'} display={'flex'} alignItems={'center'} gap={'5'}>
                      <img src={LogoSouv} alt={''} />
                      Jornalismo Avançado
                    </Text>
                  </Td>
                  <Td>
                    <Text as={'b'}>17</Text>
                  </Td>
                  <Td>
                    <CircularProgress value={40} color={'cyan.400'}>
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Stack>
      <br />
    </Container>
  )
}
