import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
    VStack,
} from "@chakra-ui/react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { ReactNode } from "react"
import Image from "next/image"

const Footer = () => {
    return (
        <Image
            src="/pistahouselogo.png"
            width="100px"
            height="40px"
            alt="logo"
        />
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function SmallCentered() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}
                color="#6ba644"
                bg={useColorModeValue("white", "rgb(26 32 44)")}
                fontSize={"xs"}
            >
                <Footer />
                <Stack direction={"row"} spacing={6}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/menu"}>Menu</Link>
                    <Link href={"/catering"}>Catering</Link>
                    <Link href={"/aboutus"}>About Us</Link>
                    <Link href={"/contactus"}>Contact Us</Link>
                </Stack>

                <Text>?? 2022 Pista House Texas. All rights reserved</Text>

                <Stack
                    spacing={4}
                    direction="row"
                    align={{ base: "center", md: "center" }}
                 
                >
                    <Link href="tel:+1 (972) 635-5657" color="#047f69">
                        +1 (972) 635-5657
                    </Link>
                    <Link
                        href="https://www.google.com/maps/search/?api=1&query=Pista+House+Irving"
                        color="#047f69"
                        isExternal
                    >
                        901 W Royal Ln, Irving, TX 75039.
                    </Link>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor="#6ba644"
                bg={useColorModeValue("white", "rgb(26 32 44)")}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                    color="#6ba644"
                >
                    <VStack spacing={0} align="center">
                        <Link href="https://geethg.com">
                            <Text textDecoration="underline">
                                Designed by Geeth Gunnampalli
                            </Text>
                        </Link>
                        <Text fontSize="xs">
                            Created with Next.js, Chakra UI, and Styled
                            Components
                        </Text>
                    </VStack>
                    
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton
                            label={"Facbook"}
                            href={"https://www.facebook.com/PistaHouseIrving/"}
                        >
                            <FaFacebook />
                        </SocialButton>
                        <Text
                            fontSize={"sm"}
                            onClick={toggleColorMode}
                            style={{
                                cursor: "pointer",
                            }}
                            pt={1}
                        >
                            Toggle {colorMode === "light" ? "Dark" : "Light"}
                        </Text>
                        <SocialButton
                            label={"Instagram"}
                            href={"https://www.instagram.com/pistahouseirving/"}
                        >
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
