import { Container, Heading, SimpleGrid,  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'




const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={50} mb={4}>
       Työt
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      
      

      
        
      </SimpleGrid>

    

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
       
       
      </SimpleGrid>

     

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
       
        
       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
