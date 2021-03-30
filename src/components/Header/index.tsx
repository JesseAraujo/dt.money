import { useState } from 'react'
import { Container, Content } from './styles'
import Modal from 'react-modal'

import logoImg from '../../assets/logo.svg'



export function Header() {
    const [isNewTransectionModalOpen, setIsNewTransectionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransectionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransectionModalOpen(false)
    }


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleCloseNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}