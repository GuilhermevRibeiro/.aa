import { h } from 'preact'
import {
  Container,
  Stack,
  useColorMode,
  useColorModeValue,
  Text,
  Input,
  Flex,
  Link,
  Button,
  ButtonGroup,
  Avatar,
  AvatarBadge,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import CardAzul from '@client/components/CaixaPesquisa'

import fotoPerfil from '../../../public/souv/image-perfil.svg'

export default function EditarPerfil() {
  const { colorMode } = useColorMode()
  return (
    <Container maxW={'3x1'} p={4} bg={useColorModeValue('gray.100', 'rgba(12,14,22,255)')} minHeight={'100vh'}>
      <CardAzul titulo={'Perfil'} />
      <br />

      <Stack
        borderRadius={'xl'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <Text fontSize={'30px'} color={'black'} marginLeft={'14px'} as={'b'}>
          Editar Perfil
        </Text>

        <Flex color={'white'} alignSelf={'center'} direction={'row'} align={'center'}>
          <Box flex={1} p={'4'}>
            <Avatar size={'xl'} src={fotoPerfil}>
              <AvatarBadge
                as={IconButton}
                size={'sm'}
                rounded={'full'}
                top={'-10px'}
                colorScheme={'red'}
                aria-label={'remove Image'}
                icon={<CloseIcon />}
              />
            </Avatar>
          </Box>
          <Box flex={3} p={'4'}>
            <Link href={'/PaginaErro'}>
              <Button colorScheme={'cyan'} marginLeft={'auto'}>
                <Text color={'white'}>Editar Foto</Text>
              </Button>
            </Link>
          </Box>

          <Box p={'4'}>
            <Text as={'b'} fontSize={'20px'} color={'black'} maxWidth={'70px'} textAlign={'right'}>
              Nome
            </Text>
            <Input placeholder={'Nome Completo'} size={'md'} borderRadius={'10px'} />
            <Text as={'b'} fontSize={'20px'} color={'black'} maxWidth={'70px'} textAlign={'right'}>
              Usuário
            </Text>
            <Input placeholder={'Nome do Usuário'} size={'md'} borderRadius={'10px'} />
          </Box>
          <Box p={'4'}>
            <Text as={'b'} fontSize={'20px'} color={'black'} maxWidth={'70px'} textAlign={'right'}>
              E-mail
            </Text>
            <Input placeholder={'E-mail'} size={'md'} borderRadius={'10px'} />
            <Text as={'b'} fontSize={'20px'} color={'black'} maxWidth={'70px'} textAlign={'right'}>
              Senha
            </Text>
            <Input placeholder={'************'} size={'md'} borderRadius={'10px'} />
          </Box>
        </Flex>

        <Stack direction={'row'} spacing={4} align={'center'}>
          <Flex justifyContent={'flex-end'} width={'100%'}>
            <ButtonGroup variant={'outline'} spacing={'4'} marginRight={'14px'}>
              <Link href={'/PaginaErro'}>
                <Button colorScheme={'cyan'} variant={'outline'} marginRight={2} mr={2}>
                  <Text marginRight={'14px'} marginLeft={'10px'}>
                    Cancelar
                  </Text>
                </Button>
              </Link>
              <Link href={'/Perfil'}>
                <Button colorScheme={'cyan'} variant={'solid'} marginLeft={2} ml={2}>
                  <Text color={'white'} marginRight={'14px'} marginLeft={'10px'}>
                    Salvar
                  </Text>
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Stack>
      </Stack>
      <br />
    </Container>
  )
}
