import React from 'react';

import './App.css';

import Footer from '../Footer';
import LinkForm from '../Form';
import Header from '../Header';
import LinksList from '../LinksList';

const App = () => {
  return (
    <>
      <Header />
      <LinkForm />
      <LinksList />
      <Footer />
    </>
  )
}
export default App;