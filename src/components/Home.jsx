import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions={
  pos:'absolute',
  left:'50%',
  top:'50%',
  transform:'translate(-50%, -50%)',
  textTransform:'uppercase',
  p:'4',
  size:'4xl'
}
const Home = () => {
  return <Box>
<MyCarousel/>
<Container maxW={'container.xl'} minH={'100vh'} p="16">
  <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m='auto'>
    Services
  </Heading>
<Stack h="full" p={'4'} alignItems={'center'} direction={['column', 'row']}>
  <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
  <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dolore possimus quo earum, deleniti magni hic, culpa ipsum cumque dolores, excepturi aliquam quod. Neque porro asperiores enim quam vero iusto totam. Vero distinctio magnam iure, quas laudantium dolore, consectetur vitae, natus voluptates harum eaque aut voluptatum ipsa in deleniti nemo adipisci minima quam quibusdam. Est ab libero cupiditate, odit voluptatum debitis nihil itaque autem! Unde, maiores debitis. Sint inventore illo debitis dolorum nesciunt, maxime sunt totam fugit, dolore at voluptatum culpa excepturi aspernatur, ut soluta blanditiis! Quos, expedita? Dolorem eius quae sint, omnis saepe unde fugiat maiores deleniti reiciendis perspiciatis in, voluptate exercitationem. Nam, expedita! Facere voluptatem fugiat libero necessitatibus aspernatur sint! In placeat illo doloribus ipsam, numquam eaque possimus ratione praesentium voluptates molestias nam harum sapiente cum, aspernatur velit minus quod reiciendis autem, quasi aperiam. Provident, quis quas enim non dolor sit deserunt cumque fuga a fugit in quam ad nulla corporis nihil iusto aspernatur incidunt doloribus asperiores at dignissimos voluptates nobis aut hic. Enim officia temporibus suscipit inventore illum exercitationem similique cumque? Laborum debitis hic ab! Repellat veniam velit deleniti nulla adipisci eaque vel numquam blanditiis, ullam perferendis voluptate ipsum quibusdam. Nam autem saepe consectetur enim molestias non?
  </Text>
</Stack>
</Container>
  </Box>
}

const MyCarousel=()=>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w="full" h={'100vh'}>
      <Image src={img1}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming is the Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>

  </Carousel>
)

export default Home