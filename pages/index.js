import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hei, Olen Frontend Developer Oulusta.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Oskari Topias Hirvonen
          </Heading>
          <p> Portfolio</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Tietoa
        </Heading>
        <Paragraph>
          Olen koodauksesta kiinnostunut frontend developer ja tykkään myös
          hakkeroinnista.{' '}
          <NextLink href="/works/inkdrop">
            <Link>työt </Link>
          </NextLink>
          .
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Tietoja
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Syntynyt Oulussa.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Opiskelen Osaossa Tieto-ja viestintätekniikkaa.
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          Opiskelen IT-Tukihenkilöksi, mutta haluan ohjelmoijaksi.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Musiikin tekeminen ja vapaa-ajalla kavereiden kanssa oleminen.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Sosiaalliset mediat.
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/osenaattori" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                @osenaattori
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://osesaa.netlify.app/"
            title="Sää"
            thumbnail={thumbInkdrop}
          >
            Sääsivusto
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Youtube videot
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
