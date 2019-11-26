import React from 'react';
import MainLayout from 'components/MainLayout'

// Teste
import Button from 'components/Button';

function Dashboard() {
  return (
    <MainLayout>
      dashboard
      <Button color={"secondary"}>
        Saiba mais
      </Button>
    </MainLayout>
  )
}

export default Dashboard;
