import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube.png'
import thumbMyDeskSetup from '../public/images/contents/youtube.png'
import thumb500PaidUsers from '../public/images/contents/youtube.png'
import thumbFinancialGoal from '../public/images/contents/youtube.png'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       Kiinnostavia videoita (Liittyyen ohjelmointiin)
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="next.js "
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=Sklc_fQBmcs&t=511s"
          />
          <GridItem
            title="CSS"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=OEV8gMkCHXQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="WEB 3 Hype?"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/watch?v=wHTcrmhskto&t=126s"
          />
          <GridItem
            title="Flex Box"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/watch?v=u044iM9xsWU"
          />
        </SimpleGrid>
      </Section>

     
    </Container>
  </Layout>
)

export default Posts
