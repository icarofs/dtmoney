import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
  const [isNewTransacationModalOpen, setIsNewTransacationModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransacationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransacationModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransacationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
