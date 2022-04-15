import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        työt<Badge>2021-</Badge>
      </Title>
      <P>Ohjelmat ja sivut mitä olen tehnyt.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>NettiSivut</Meta>
          <Link href="https://osesaa.netlify.app/">
            https://osesaa.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
