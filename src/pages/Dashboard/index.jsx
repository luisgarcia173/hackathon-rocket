import React from 'react';
import MainLayout from 'components/MainLayout'

// Teste
import Button from 'components/Button';
import Avatar from 'components/Avatar';
import Badge from "../../components/Badge";

function Dashboard() {
  return (
    <MainLayout>
      dashboard
      <Avatar src="" size={50} type="rounded" />
      <Button>
        Saiba mais
      </Button>
      <Badge
        fontSize={"ultra_small"}
        padding={"small"}
      >
        Condicional
      </Badge>
    </MainLayout>
  )
}

export default Dashboard;
