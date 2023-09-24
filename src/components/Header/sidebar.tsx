import { ReactNode } from 'react'
import { BsMoon } from 'react-icons/bs'
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Button,
  Image,
} from '@chakra-ui/react'
import { FiHome, FiYoutube, FiLock, FiUser, FiMenu, FiSun } from 'react-icons/fi'
import { h } from 'preact'

import logo from '../../../public/souv/logo-black.svg'

function getWindowSize() {
  const { innerWidth, innerHeight } = window
  return { innerHeight, innerWidth }
}

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={useColorModeValue('gray.100', 'rgba(12,14,22,255)')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size={'full'}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={'0.5'}>
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Box
      bg={useColorModeValue('white', '#171a23')}
      borderRight={'1px'}
      borderRightColor={useColorModeValue('gray.200', '#171a23')}
      w={{ base: 'full', md: 60 }}
      pos={'fixed'}
      h={'full'}
      {...rest}
    >
      {/* LOGO SOUV ACADEMY */}
      <Flex h={'20'} alignItems={'center'} mx={'8'} justifyContent={'space-between'}>
        <Image src={logo} alt={'Logo Souv Academy Preta'} />
        {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> - BOTÃO ESTÁ APARECENDO QUANDO NÃO É NECESÁRIO*/}
      </Flex>

      <Flex h={'5'} />

      {/* Botões para acessar as páginas */}
      <Link
        href={'/Home'}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        fontSize={'lg'}
        color={useColorModeValue('#6d7784', '#a1afbf')}
      >
        <Flex
          align={'center'}
          p={'4'}
          mx={'4'}
          borderRadius={'lg'}
          role={'group'}
          cursor={'pointer'}
          _hover={{
            bg: '#0ab8d7',
            color: 'white',
          }}
          {...rest}
        >
          <Icon as={FiHome} mr={'15'} boxSize={22} />
          <b>Home</b>
        </Flex>
      </Link>
      <br />
      <Link
        href={'/Cursos'}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        fontSize={'lg'}
        color={useColorModeValue('#6d7784', '#a1afbf')}
      >
        <Flex
          align={'center'}
          p={'4'}
          mx={'4'}
          borderRadius={'lg'}
          role={'group'}
          cursor={'pointer'}
          _hover={{
            bg: '#0ab8d7',
            color: 'white',
          }}
          {...rest}
        >
          <Icon as={FiYoutube} mr={'15'} boxSize={22} />
          <b>Cursos</b>
        </Flex>
      </Link>
      <br />
      <Link
        href={'/MeusCursos'}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        fontSize={'lg'}
        color={useColorModeValue('#6d7784', '#a1afbf')}
      >
        <Flex
          align={'center'}
          p={'4'}
          mx={'4'}
          borderRadius={'lg'}
          role={'group'}
          cursor={'pointer'}
          _hover={{
            bg: '#0ab8d7',
            color: 'white',
          }}
          {...rest}
        >
          <Icon as={FiLock} mr={'15'} boxSize={22} />
          <b>Meus Cursos</b>
        </Flex>
      </Link>
      <br />
      <Link
        href={'/Perfil'}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        fontSize={'lg'}
        color={useColorModeValue('#6d7784', '#a1afbf')}
      >
        <Flex
          align={'center'}
          p={'4'}
          mx={'4'}
          borderRadius={'lg'}
          role={'group'}
          cursor={'pointer'}
          _hover={{
            bg: '#0ab8d7',
            color: 'white',
          }}
          {...rest}
        >
          <Icon as={FiUser} mr={'15'} boxSize={22} />
          <b>Perfil</b>
        </Flex>
      </Link>
      <Flex h={'20'} />
      {/* MODO CLARO E ESCURO */}
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Button
          aria-label={'Toggle Color Mode'}
          onClick={toggleColorMode}
          _focus={{ boxShadow: 'none' }}
          w={'fit-content'}
        >
          {colorMode === 'light' ? <BsMoon /> : <FiSun />}
        </Button>
      </Flex>
    </Box>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

/* MENU QUANDO A TELA É MENOR QUE O RECOMENDADO*/
const MobileNav = ({ onOpen, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 24 }}
    height={'20'}
    alignItems={'center'}
    bg={useColorModeValue('white', '#171a23')}
    borderBottomWidth={'1px'}
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent={'flex-start'}
    {...rest}
  >
    <IconButton variant={'outline'} onClick={onOpen} aria-label={'open menu'} icon={<FiMenu />} />
    <Flex h={'5'} />
    <Flex h={'20'} alignItems={'center'} mx={'8'} justifyContent={'space-between'}>
      <img src={logo} alt={'Logo Souv Academy Preta'} />
    </Flex>
  </Flex>
)
