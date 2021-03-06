import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

interface SidebarProps {
    isOpen: boolean
}

export const SidebarContainer = styled.aside<SidebarProps>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
        theme === "light" ? "#ffffffc4" : "#1a202cc4"};

    backdrop-filter: saturate(180%) blur(20px);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: #6ba644;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #6ba644;
`

export const SideMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #6ba644;
    cursor: pointer;

    &:hover {
        color: #047f69;
        transition: 0ms.2 ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    padding: 30px;
`
