import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/ose.png'
import thumbWalknote from '../public/images/works/ose.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/ose.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={50} mb={4}>
       työt
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Sää" thumbnail={thumbInkdrop}>
            Sää sivusto
          </WorkGridItem>
        </Section>
      

      
        
      </SimpleGrid>

    

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
       
       
      </SimpleGrid>

     

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
       
        
       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
