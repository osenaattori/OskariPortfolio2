import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
       työt<Badge>2021-</Badge>
      </Title>
      <P>
    Ohjelmat ja sivut mitä olen tehnyt.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>NettiSivut</Meta>
          <Link href="https://osesaa.netlify.app/">
          https://osesaa.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/osesää.png" alt="Inkdrop" />
     
    </Container>
  </Layout>
)

export default Work
