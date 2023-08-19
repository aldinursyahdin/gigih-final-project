/* eslint-disable no-unused-vars */
import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import {
    Box,
    SimpleGrid,
    Text,
    Flex,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Divider,
    Button,
    Image
} from "@chakra-ui/react"
import { useLoaderData, Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
const URL = "https://gigihmidterm-production.up.railway.app/video";


export default function Dashboard() {

    const fetchHandler = async () => {

        return await axios.get(URL).then((res) => res.data);
    };

    const navigate = useNavigate();

    const [videos, setVideos] = useState();
    useEffect(() => {
            fetchHandler().then((data) => setVideos(data.videos));
        }, []);
        console.log(videos);
    


    return (
        <SimpleGrid spacing={2} minChildWidth={220} bg="rgb(26, 32, 44)" paddingBottom={10}>
            {videos && videos.map(video => (
                

                <Card key={video._id} w="220px" h="350px" bg="rgb(40, 40, 47)" mt="10px" ml="10px" cursor="pointer" onClick={() => navigate(`/video/${video._id}`)} LinkComponent={Link} to={`/video/${video._id}`} >

                     <CardHeader color="gray.700">
                        
                     </CardHeader>

                    <CardBody color="gray.500" >
                        <a href=""></a>
                        <Image position="absolute" top="0" left="0" w="100%" h="100%" src={video.UrlImageThumbnail} filter='auto' brightness='40%' borderRadius="lg" className="card__image" />
                        
                     </CardBody>

 

                     <CardFooter>
                        <Box bg="red" borderRadius='md' px={2} color="white" pos="absolute" alignContent="center" top="3" left="3">
                            Live
                        </Box>


                        <Box display="flex" bg="rgba(49, 53, 59, 0.7)" borderRadius='md' px={2} color="white" pos="absolute" alignItems="center" top="3" left="16">
                            <ViewIcon />  <Text pl="2" pr="1">    0 </Text>
                        </Box>



                        <Text color={"white"} pos="absolute" top="250" left="3" fontSize={'14px'}>
                            {video.Title}
                        </Text>
                        <Text color={"white"} pos="absolute" top="315" left="3" fontSize={'12.5px'} backgroundColor={'gray.700'} borderRadius={'10'} p={'1'}>
                            {video.Username}
                        </Text>
                     </CardFooter> 

                 </Card> 
            ))}
        </SimpleGrid>
    )
}



