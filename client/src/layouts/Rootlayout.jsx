import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"


export default function RootLayout() {
    return (
        <Grid templateRows="repeat(2, 60px 1fr 10px)" bg="rgb(40, 40, 47)">

            {/* main content & navbar */}
            <GridItem
                as="main"
                colSpan={{ base: 6, lg: 4, xl: 5 }}
                // p="30px 10px"
                // pl="40px"
            >
                <Navbar />
                <Outlet />
            </GridItem>
        </Grid>
    )
}
