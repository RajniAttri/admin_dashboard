import React from 'react';
import Charts from '../components/Charts';
import Calendar from '../components/Calendar';
import Kanban from '../components/Kanban';
import TableComponent from '../components/Table';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Charts />
      <Calendar />
      <Kanban />
      <TableComponent />
    </div>
  );
};

export default Dashboard;
