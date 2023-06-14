import React, { useState } from 'react';
import './style.css';
import data from './data/data.json';
import Card from './components/Card';
import Pagination from './components/Pagination';

export const App = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="container">
      <Card data={data[page]}/>
      <Pagination page={page} handleChangePage={setPage} />
    </div>
  );
};

export default App;
