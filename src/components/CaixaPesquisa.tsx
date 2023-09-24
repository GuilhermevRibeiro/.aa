import {
  Stack,
  Heading,
  Flex,
  useColorMode,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Icon,
} from '@chakra-ui/react'
import { h } from 'preact'
import { FiSearch } from 'react-icons/fi'

interface CardAzulProps {
  titulo: string
}

function CardAzul(props: CardAzulProps) {
  const { colorMode } = useColorMode()
  return (
    <Stack
      borderRadius={'xl'}
      bgGradient={'linear(cyan.300 0%, #0ab8d7 50%)'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 2, md: 3 }}
    >
      <Heading
        marginLeft={'15'}
        color={useColorModeValue('white', '#171a23')}
        fontWeight={600}
        fontSize={{ base: '2xl', md: '6xl', sm: '4xl' }}
        lineHeight={'100%'}
      >
        {props.titulo}
      </Heading>
      <Flex h={'3'} />
      <InputGroup alignSelf={'center'} size={'lg'} w={'80%'}>
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
    </Stack>
  )
}

export default CardAzul
