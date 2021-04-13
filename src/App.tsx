import React, { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransectionModalOpen, setIsNewTransectionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransectionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransectionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionModal}
        isOpen={isNewTransectionModalOpen}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}
