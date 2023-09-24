import { h } from 'preact'
import {
  Container,
  Flex,
  Text,
  GridItem,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
  Grid,
  Image,
  Icon,
  Box,
  Link,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { TimeIcon, ChevronRightIcon } from '@chakra-ui/icons'

import CardAzul from '@client/components/CaixaPesquisa'

import FundoCursos from '../../../public/souv/Fundo-Cursos.svg'

function VisualizarCursos() {
  const { colorMode } = useColorMode()

  return (
    <Container maxW={'3x1'} p={4} bg={useColorModeValue('gray.100', 'rgba(12,14,22,255)')}>
      <CardAzul titulo={'Cursos'} />

      <br />
      <Stack
        borderRadius={'xl'}
        bg={useColorModeValue('white', '#171a23')}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 3 }}
      >
        <Heading marginLeft={'15'} fontWeight={600} fontSize={{ base: 'xl', md: '3xl', sm: '2xl' }} lineHeight={'100%'}>
          Introduçao ao jornalismo
        </Heading>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gap={'1'}
            bg={useColorModeValue('white', '#171a23')}
            color={'blackAlpha.700'}
            templateColumns={'repeat(6, 1fr)'}
            w={'98%'}
          >
            <GridItem colSpan={3} borderRadius={'lg'} bg={useColorModeValue('white', '#171a23')} py={{ base: 2, md: 3 }}>
              <Image src={FundoCursos} borderRadius={'lg'} w={'95%'} />
              <Text fontSize={'150%'} color={useColorModeValue('black', 'white')} marginLeft={'14px'} fontWeight={600}>
                Introdução ao jornalismo digital
              </Text>
              <Text fontSize={'85%'} color={useColorModeValue('#6d7784', '#a1afbf')} marginLeft={'14px'}>
                SOUV Academy
              </Text>
              <br />
              <Text fontSize={'110%'} color={useColorModeValue('black', 'white')} marginLeft={'14px'}>
                <Icon as={TimeIcon} mr={'15'} boxSize={22} />
                25 Horas
              </Text>
              <br />
              <Text fontSize={'125%'} color={useColorModeValue('black', 'white')} marginLeft={'14px'} fontWeight={600}>
                Descrição
              </Text>
              <Text fontSize={'100%'} color={useColorModeValue('#6d7784', '#a1afbf')} marginLeft={'14px'}>
                Aprenda tudo sobre jornalismo com nosso curso de introdução ao Jornalismo Digital.
              </Text>
            </GridItem>
            <GridItem colSpan={3} borderRadius={'lg'} bg={useColorModeValue('white', '#171a23')} py={{ base: 2, md: 3 }}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        color={useColorModeValue('black', 'white')}
                        fontWeight={600}
                        w={'110%'}
                        p={4}
                        bg={useColorModeValue('white', '#171a23')}
                        borderRadius={'lg'}
                        border={'2px'}
                        borderColor={'#6d7784'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                      >
                        <Text color={useColorModeValue('black', 'white')} mr={'2'}>
                          Módulo 1
                        </Text>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Introdução
                        </Text>
                        <Flex ml={'auto'}>
                          <ChevronRightIcon boxSize={20} color={'#0ab8d7'} />
                        </Flex>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 1 - O que é jornalismo?
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          8:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 2 - Fundamentos do jornalismo.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          12:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 3 - Dia a dia do jornalista.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          5:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Questionário - Módulo 1.
                      </Text>
                      <Flex ml={'auto'}>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Responder
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        color={useColorModeValue('black', 'white')}
                        fontWeight={600}
                        w={'110%'}
                        p={4}
                        bg={useColorModeValue('white', '#171a23')}
                        borderRadius={'lg'}
                        border={'2px'}
                        borderColor={'#6d7784'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                      >
                        <Text color={useColorModeValue('black', 'white')} mr={'2'}>
                          Módulo 2
                        </Text>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Conceitos Básicos
                        </Text>
                        <Flex ml={'auto'}>
                          <ChevronRightIcon boxSize={20} color={'#0ab8d7'} />
                        </Flex>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 1 - O que é jornalismo?
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          8:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 2 - Fundamentos do jornalismo.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          12:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 3 - Dia a dia do jornalista.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          5:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Questionário - Módulo 2.
                      </Text>
                      <Flex ml={'auto'}>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Responder
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        color={useColorModeValue('black', 'white')}
                        fontWeight={600}
                        w={'110%'}
                        p={4}
                        bg={useColorModeValue('white', '#171a23')}
                        borderRadius={'lg'}
                        border={'2px'}
                        borderColor={'#6d7784'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                      >
                        <Text color={useColorModeValue('black', 'white')} mr={'2'}>
                          Módulo 3
                        </Text>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          O que é Jornalismo Digital?
                        </Text>
                        <Flex ml={'auto'}>
                          <ChevronRightIcon boxSize={20} color={'#0ab8d7'} />
                        </Flex>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 1 - O que é jornalismo?
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          8:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 2 - Fundamentos do jornalismo.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          12:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 3 - Dia a dia do jornalista.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          5:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Questionário - Módulo 3.
                      </Text>
                      <Flex ml={'auto'}>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Responder
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        color={useColorModeValue('black', 'white')}
                        fontWeight={600}
                        w={'110%'}
                        p={4}
                        bg={useColorModeValue('white', '#171a23')}
                        borderRadius={'lg'}
                        border={'2px'}
                        borderColor={'#6d7784'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                      >
                        <Text color={useColorModeValue('black', 'white')} mr={'2'}>
                          Módulo 4
                        </Text>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Formas de comunicação
                        </Text>
                        <Flex ml={'auto'}>
                          <ChevronRightIcon boxSize={20} color={'#0ab8d7'} />
                        </Flex>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 1 - O que é jornalismo?
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          8:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 2 - Fundamentos do jornalismo.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          12:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 3 - Dia a dia do jornalista.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          5:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Questionário - Módulo 4.
                      </Text>
                      <Flex ml={'auto'}>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Responder
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        color={useColorModeValue('black', 'white')}
                        fontWeight={600}
                        w={'110%'}
                        p={4}
                        bg={useColorModeValue('white', '#171a23')}
                        borderRadius={'lg'}
                        border={'2px'}
                        borderColor={'#6d7784'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                      >
                        <Text color={useColorModeValue('black', 'white')} mr={'2'}>
                          Módulo 5
                        </Text>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Encerramento
                        </Text>
                        <Flex ml={'auto'}>
                          <ChevronRightIcon boxSize={20} color={'#0ab8d7'} />
                        </Flex>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 1 - O que é jornalismo?
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          8:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 2 - Fundamentos do jornalismo.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          12:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Aula 3 - Dia a dia do jornalista.
                      </Text>
                      <Flex ml={'auto'}>
                        <TimeIcon boxSize={15} color={'#0ab8d7'} m={5} />
                        <Text color={'#0ab8d7'} mr={'2'}>
                          5:00
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                  <AccordionPanel pb={1}>
                    <Box
                      color={useColorModeValue('black', 'white')}
                      fontWeight={600}
                      w={'100%'}
                      height={8}
                      p={4}
                      bg={useColorModeValue('white', '#171a23')}
                      borderRadius={'lg'}
                      border={'2px'}
                      borderColor={'#6d7784'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                    >
                      <Text color={useColorModeValue('black', 'white')} fontSize={'88%'} mr={'2'}>
                        Questionário - Módulo 5.
                      </Text>
                      <Flex ml={'auto'}>
                        <Text color={'#0ab8d7'} mr={'2'}>
                          Responder
                        </Text>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <br />
              <Link
                href={'/MeusCursos'}
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                fontSize={'lg'}
                color={'#white'}
              >
                <Flex justifyContent={'flex-end'} p={7}>
                  <Button bg={'#0ab8d7'} color={'white'} size={'md'}>
                    Próxima aula
                  </Button>
                </Flex>
              </Link>
            </GridItem>
          </Grid>
        </Flex>
      </Stack>
      <br />
    </Container>
  )
}

export default VisualizarCursos
