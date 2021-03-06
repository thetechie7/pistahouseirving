import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    SlideFade,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack,
} from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import PhotoAlbum, { RenderPhoto } from "react-photo-album"
import styled from "styled-components"
import {
    VeggieAppetizers,
    MeatAppetizers,
    VeggieKebabs,
    MeatKebabs,
    VeggieEntrees,
    MeatEntrees,
    NaanBread,
    Rice,
    Desserts,
} from "../../components/cmenu"
import MenuCards from "../../components/Menu Cards/MenuCards"
import { Link } from "react-scroll"
export const RenderDiv = styled.div``

const renderPhoto: RenderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
}) => (
    <SlideFade in={true}>
        <RenderDiv className="render-div">
            <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="bold"
                color="#047f69"
            >
                {alt}
            </Text>
            <img
                alt={alt}
                style={{
                    ...style,
                    width: "100%",
                    padding: 0,
                    transition: "all 1s",
                }}
                {...restImageProps}
            />
        </RenderDiv>
    </SlideFade>
)
const images = [
    {
        src: "/slides/1.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/2.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/3.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/4.jpg",
        width: 125,
        height: 175,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/5.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/6.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/7.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/8.jpg",
        width: 175,
        height: 125,
        alt: "Dessert Table Setup",
    },

    {
        src: "/slides/9.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/10.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/11.jpg",
        width: 125,
        height: 175,
        alt: "Veggie Table Setup",
    },
    {
        src: "/slides/12.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/13.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/14.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/15.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
]

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Head>
                <title>Catering | Pista House Texas</title>
            </Head>
            <Box mt={20} p={5}>
                <Flex justifyContent="center" alignItems="center">
                    <Text
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        color="#047f69"
                        mb={10}
                    >
                        Catering
                    </Text>
                </Flex>
                <PhotoAlbum
                    layout="masonry"
                    photos={images}
                    //@ts-ignore
                    renderPhoto={renderPhoto}
                />
                <VStack spacing={10}>
                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                    >
                        Catering Menu
                    </Text>
                    <Button
                        //@ts-ignore
                        ref={btnRef}
                        onClick={onOpen}
                        position="sticky"
                        top="100"
                        zIndex="10"
                        variant="ghost"
                        color="#ffffff"
                        bg="#047f69"
                    >
                        Open Menu
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement="top"
                        onClose={onClose}
                        //@ts-ignore
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Scroll Through Menu</DrawerHeader>

                            <DrawerBody>
                                <VStack>
                                    <Link
                                        to="veggieappetizers"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Veggie Appetizers
                                    </Link>
                                    <Link
                                        to="meatappetizers"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Meat Appetizers
                                    </Link>
                                    <Link
                                        to="veggiekebabs"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Veggie Kebabs
                                    </Link>
                                    <Link
                                        to="meatkebabs"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Meat Kebabs
                                    </Link>
                                    <Link
                                        to="veggieentrees"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Veggie Entrees
                                    </Link>
                                    <Link
                                        to="meatentrees"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Meat Entrees
                                    </Link>
                                    <Link
                                        to="naanbread"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Naan Bread
                                    </Link>
                                    <Link
                                        to="rice"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Rice
                                    </Link>

                                    <Link
                                        to="desserts"
                                        smooth={true}
                                        duration={700}
                                        spy={true}
                                        offset={-170}
                                        style={{
                                            textDecoration: "none",
                                            color: useColorModeValue(
                                                "#6ba644",
                                                "#beeca0"
                                            ),
                                            cursor: "pointer",
                                        }}
                                        onClick={onClose}
                                    >
                                        Desserts
                                    </Link>
                                </VStack>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button
                                    variant="outline"
                                    mr={3}
                                    onClick={onClose}
                                >
                                    Cancel
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="veggieappetizers"
                    >
                        Veggie Appetizers
                    </Text>
                    <Grid>
                        {VeggieAppetizers.map(
                            (
                                va: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={va.title}
                                    description={va.description}
                                    price={va.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="meatappetizers"
                    >
                        Meat Appetizers
                    </Text>
                    <Grid>
                        {MeatAppetizers.map(
                            (
                                ma: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={ma.title}
                                    description={ma.description}
                                    price={ma.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="veggiekebabs"
                    >
                        Veggie Kebabs
                    </Text>
                    <Grid>
                        {VeggieKebabs.map(
                            (
                                vk: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={vk.title}
                                    description={vk.description}
                                    price={vk.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="meatkebabs"
                    >
                        Meat Kebabs
                    </Text>
                    <Grid>
                        {MeatKebabs.map(
                            (
                                mk: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={mk.title}
                                    description={mk.description}
                                    price={mk.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="veggieentrees"
                    >
                        Veggie Entrees
                    </Text>
                    <Grid>
                        {VeggieEntrees.map(
                            (
                                ve: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={ve.title}
                                    description={ve.description}
                                    price={ve.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="meatentrees"
                    >
                        Meat Entrees
                    </Text>
                    <Grid>
                        {MeatEntrees.map(
                            (
                                me: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={me.title}
                                    description={me.description}
                                    price={me.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="naanbread"
                    >
                        Naan Bread
                    </Text>
                    <Grid>
                        {NaanBread.map(
                            (
                                nb: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={nb.title}
                                    description={nb.description}
                                    price={nb.price}
                                />
                            )
                        )}
                    </Grid>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="rice"
                    >
                        Rice
                    </Text>
                    <Grid>
                        {Rice.map(
                            (
                                r: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={r.title}
                                    description={r.description}
                                    price={r.price}
                                />
                            )
                        )}
                    </Grid>

                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color={useColorModeValue("#6ba644", "#beeca0")}
                        id="desserts"
                    >
                        Desserts
                    </Text>
                    <Grid>
                        {Desserts.map(
                            (
                                de: {
                                    title: any
                                    description: any
                                    price: any
                                },
                                index: React.Key | null | undefined
                            ) => (
                                <MenuCards
                                    key={index}
                                    title={de.title}
                                    description={de.description}
                                    price={de.price}
                                />
                            )
                        )}
                    </Grid>
                </VStack>
            </Box>
            {/* <Hero />
            <Services />
            <Testimonials /> */}
        </>
    )
}

export default Home

const Grid = styled.div`
    display: grid;
    justify-content: center;

    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    margin: 0 auto;
    max-width: 500px;
    padding: 0 2rem;
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`
