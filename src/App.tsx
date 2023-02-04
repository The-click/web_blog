import './style/index.scss'
import { Route, Router, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageLazy } from './pages/Main/MainPage.async';
import { AboutPageLazy } from './pages/About/AboutPage.async';
import { Suspense, useContext, useState } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';


const App = () => { 
    const {theme, toggleTheme} = useTheme();
 
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPageLazy />} />
                <Route path="/about" element={<AboutPageLazy />} />
            </Routes> 
            </Suspense>
        </div>
    );
};

export default App;