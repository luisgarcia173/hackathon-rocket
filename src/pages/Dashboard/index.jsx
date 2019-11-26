import React from 'react';
import MainLayout from 'components/MainLayout'

// Teste
import Button from 'components/Button';
import Avatar from 'components/Avatar';

function Dashboard() {
  return (
    <MainLayout>
      dashboard
      <Avatar src="" size={50} type="rounded" />
      <Button>
        Saiba mais
      </Button>
    </MainLayout>
  )
}

export default Dashboard;
