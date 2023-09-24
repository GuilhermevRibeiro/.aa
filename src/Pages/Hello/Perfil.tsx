import { h } from 'preact'
import {
  Container,
  Stack,
  Heading,
  useColorMode,
  useColorModeValue,
  Grid,
  GridItem,
  Switch,
  FormLabel,
  WrapItem,
  Wrap,
  ButtonGroup,
  Button,
  Flex,
  Text,
  Link,
} from '@chakra-ui/react'

import CardAzul from '@client/components/CaixaPesquisa'

import fotoPerfil from '../../../public/souv/image-perfil.svg'

export default function Perfil() {
  const { colorMode } = useColorMode()
  return (
    <Container maxW={'2x1'} bg={useColorModeValue('gray.100', 'rgba(12,14,22,255)')} minHeight={'100vh'}>
      <CardAzul titulo={'Perfil'} />
      <br />
      <Stack
        borderRadius={'lg'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <Heading marginLeft={'15'} fontWeight={600} fontSize={{ base: 'xl', md: '4xl', sm: '2xl' }} lineHeight={'100%'}>
          <br />
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Wrap>
              <WrapItem>
                <img src={fotoPerfil} alt={'Foto de Perfil'} />
              </WrapItem>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <Text as={'b'} fontSize={'22px'}>
                    Anna Motta
                  </Text>
                </div>
                <div>
                  <Text as={'i'} fontSize={'22px'} color={'gray.500'}>
                    anamotta23@gmail.com
                  </Text>
                </div>
              </div>
            </Wrap>

            <ButtonGroup variant={'outline'} spacing={'4'} marginRight={'14px'}>
              <Link href={'/EditarPerfil'}>
                <Button colorScheme={'blue'} marginLeft={'auto'}>
                  Editar Perfil
                </Button>
              </Link>
              <Link href={'/PaginaErro'}>
                <Button colorScheme={'red'} marginLeft={'auto'}>
                  Sair
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Heading>
      </Stack>
      <br />
      <Flex justifyContent={'center'} alignItems={'center'} style={{ flex: 1 }}>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          h={'300px'}
          gap={'1'}
          color={'blackAlpha.700'}
          fontWeight={'bold'}
          templateRows={'repeat(3, 1fr)'}
          templateColumns={'repeat(6, 1fr)'}
        >
          <GridItem colSpan={3} borderRadius={'lg'} bg={useColorModeValue('white', '#171a23')} py={{ base: 2, md: 3 }}>
            <Text fontSize={'30px'} color={'black'} marginLeft={'14px'}>
              Perfil
            </Text>
            <br />
            <table>
              <tr>
                <td>
                  <Text as={'b'} marginLeft={'14px'} fontSize={'20px'} color={'gray.400'}>
                    Nome
                  </Text>
                </td>
                <td>
                  <Text as={'b'} marginLeft={'50px'} fontSize={'20px'} color={'gray.400'}>
                    E-mail
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text as={'b'} marginLeft={'14px'} color={'black'} fontSize={'20px'}>
                    Anna Motta
                  </Text>
                </td>
                <td>
                  <Text as={'b'} marginLeft={'50px'} color={'black'} marginRight={'14px'} fontSize={'20px'}>
                    anamotta23@gmail.com
                  </Text>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <Text as={'b'} marginLeft={'14px'} fontSize={'20px'} color={'gray.400'}>
                    Celular
                  </Text>
                </td>
                <td>
                  <Text as={'b'} marginLeft={'50px'} fontSize={'20px'} color={'gray.400'}>
                    Senha
                  </Text>
                </td>
                <br />
              </tr>
              <tr>
                <td>
                  <Text as={'b'} marginLeft={'14px'} color={'black'} fontSize={'20px'}>
                    (61) 98142-7512
                  </Text>
                </td>
                <td>
                  <Text as={'b'} marginLeft={'50px'} color={'black'} fontSize={'20px'}>
                    ***********
                  </Text>
                </td>
              </tr>
            </table>
          </GridItem>
          <GridItem colSpan={3} borderRadius={'lg'} bg={useColorModeValue('white', '#171a23')} py={{ base: 2, md: 3 }}>
            <Text fontSize={'30px'} color={'black'} marginLeft={'14px'}>
              Notificações
            </Text>
            <br />
            <Flex flexDirection={'column'} justifyContent={'flex-start'}>
              <Flex alignItems={'center'}>
                <Switch id={'isRequired'} isRequired marginLeft={'14px'} />
                <FormLabel htmlFor={'isRequired'} fontSize={'20px'} marginLeft={'10px'} width={'auto'} color={'black'}>
                  Novos Cursos
                </FormLabel>
              </Flex>
              <Flex alignItems={'center'}>
                <Switch id={'isRequired'} isRequired marginLeft={'14px'} />
                <FormLabel htmlFor={'isRequired'} fontSize={'20px'} marginLeft={'10px'} width={'auto'} color={'black'}>
                  Newsletter da Souv Academy
                </FormLabel>
              </Flex>
              <Flex alignItems={'center'}>
                <Switch id={'isRequired'} isRequired marginLeft={'14px'} />
                <FormLabel htmlFor={'isRequired'} fontSize={'20px'} marginLeft={'10px'} width={'auto'} color={'black'}>
                  Promoções
                </FormLabel>
              </Flex>
              <Flex alignItems={'center'}>
                <Switch id={'isRequired'} isRequired marginLeft={'14px'} />
                <FormLabel htmlFor={'isRequired'} fontSize={'20px'} marginLeft={'10px'} width={'auto'} color={'black'}>
                  Cursos em Andamento
                </FormLabel>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Container>
  )
}
