import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
  Link,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { h } from 'preact'

interface CardProps {
  src: string
  modulos: string
  titulo: string
  descricao: string
  nomeBotao: string
  nomelink: string
}

function CardCursos(props: CardProps) {
  const { colorMode } = useColorMode()
  return (
    <Card style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 30, marginRight: 30, width: 360 }}>
      <CardBody>
        <Image src={props.src} borderRadius={'lg'} />
        <Stack mt={'1'} spacing={'3'}>
          <Text color={useColorModeValue('#6d7784', '#a1afbf')}> {props.modulos} </Text>
          <Heading size={'md'}>{props.titulo}</Heading>
          <Text color={useColorModeValue('#6d7784', '#a1afbf')}> {props.descricao} </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          href={props.nomelink}
          alignItems={'left'}
          justifyContent={'left'}
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
          fontSize={'lg'}
        >
          <Flex
            fontWeight={600}
            align={'center'}
            p={'3'}
            mx={'3'}
            borderRadius={'lg'}
            color={'#0ab8d7'}
            role={'group'}
            cursor={'pointer'}
            _hover={{
              bg: '#0ab8d7',
              color: 'white',
            }}
          >
            {props.nomeBotao}
          </Flex>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardCursos
