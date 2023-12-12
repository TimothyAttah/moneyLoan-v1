import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import HowItWorks from './pages/howItWorks/HowItWorks';
import About from './pages/about/About';
import Apply from './pages/apply/Apply';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/apply' element={<Apply />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
