/* eslint-disable no-unused-vars */
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Grid, GridItem, AspectRatio, SimpleGrid, Center, Box, AbsoluteCenter, Flex, Text, Spacer, Heading, Card, CardHeader, CardFooter, CardBody, Stack, StackDivider, Link, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Outlet, useNavigate, useParams } from 'react-router-dom'
const URL = "https://gigihmidterm-production.up.railway.app/video";




export default function VideoDetail() {


  const [video, setVideo] = useState();
  const [products, setProducts] = useState();
  const [comments, setComments] = useState();
  const [inputs, setInputs] = useState({
    Username: "",
    Comment: "",
  });
  const id = useParams().id;
  // console.log(id)

  const fetchVideo = async () => {

    return await axios.get(`https://gigihmidterm-production.up.railway.app/video/${id}`).then((res) => res.data);
  };
  useEffect(() => {
    fetchVideo().then((data) => setVideo(data));
  });


  const fetchProducts = async () => {

    return await axios.get(`https://gigihmidterm-production.up.railway.app/video/product/${id}`).then((res) => res.data);
  };
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  });
  // console.log(products);

  const fetchComments = async () => {

    return await axios.get(`https://gigihmidterm-production.up.railway.app/video/comment/${id}`).then((res) => res.data);
  };
  useEffect(() => {
    fetchComments().then((data) => setComments(data));
  });
  // console.log(comments);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };


  const sendRequest = async () => {
    await axios
      .post(`https:gigihmidterm-production.up.railway.app/video/comment/${id}`, {
        username: String(inputs.Username),
        comment: String(inputs.Comment),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };


  return (
    <Grid
      templateAreas={`"product videos comments"
                      "product videos comments"
                      "product videos form"`}
      templateColumns="1fr 4fr 1fr"


    >




      <GridItem area={'product'} h="100%" >
        <Card bg="rgba(255, 255, 255, 0)">
          <CardHeader>
            <Heading size='md'>Product</Heading>
          </CardHeader>

          <CardBody>


            <Stack divider={<StackDivider />} spacing='4' overflowX={'hidden'} overflowY={'auto'} maxHeight='400px' >

              {products && products.map((product, i) => (
                <Box key={product._id}>
                  <Heading size='xs' textTransform='uppercase'>
                    {product.Title}                 <Link href={product.LinkProduct} isExternal>
                      <ExternalLinkIcon mx='2px' />
                    </Link>
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Rp. {product.Price}
                  </Text>

                </Box>
              ))}


            </Stack>

          </CardBody>

          <CardFooter>

          </CardFooter>
        </Card>
      </GridItem>

      <GridItem area={'videos'} h="100%"  >

        <Flex p="30px" mb="30px" alignItems="center">
          <AspectRatio w='900px' ratio={2} >
            <iframe
              src={video && video.LinkVideo}
            />
          </AspectRatio>
        </Flex>

        <Flex>
          <Heading as='h1' pl="30px" mt="-10">
            {video && video.Title}
          </Heading>

        </Flex>

        <Flex>
          <Text pl="30px" >
            {video && video.Username}
          </Text>
        </Flex>

      </GridItem>

      <GridItem area={'comments'} h="100%" bg="rgba(255, 255, 255, 0)">
        <Card bg="rgba(255, 255, 255, 0)" >
          <CardHeader>
            <Heading size='md'>Comments</Heading>
          </CardHeader>

          <CardBody>


            <Stack divider={<StackDivider />} spacing='4' overflowX={'hidden'} overflowY={'auto'} maxHeight='180px'>

              {comments && comments.map((comment) => (
                <Box key={comment._id}>
                  <Text pt='2' fontSize='10px' fontWeight={'bold'} >
                    {comment.Username}
                  </Text>
                  <Text size='xs' >
                    {comment.Comment}
                  </Text>

                </Box>
              ))}


            </Stack>

          </CardBody>

          <CardFooter>

          </CardFooter>
        </Card>
      </GridItem>
      <GridItem area={'form'}  >
        <Box maxW="480px">
          <Form method="post" action="/create" onSubmit={handleSubmit}>
            <FormControl isRequired mb="10px" value={inputs.username}
              onChange={handleChange}>
              <FormLabel>Username:</FormLabel>
              <Input type="text" name="Username" placeholder="Enter a username" />

            </FormControl>

            <FormControl isRequired mb="10px" value={inputs.Comment}
              onChange={handleChange}>
              <FormLabel>Comment:</FormLabel>
              <Textarea

                placeholder="Enter a Comment"
                name="Comment"

              />
            </FormControl>


            <Button type="submit">submit</Button>
          </Form>
        </Box>
      </GridItem>


    </Grid>


  )
}

