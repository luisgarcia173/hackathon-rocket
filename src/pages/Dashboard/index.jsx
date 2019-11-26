import React from 'react';
import MainLayout from 'components/MainLayout'

// Teste
import Button from 'components/Button';
import Badge from "../../components/Badge";

function Dashboard() {
  return (
    <MainLayout>
      dashboard
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
