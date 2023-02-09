import './style/index.scss'
import { Route, Router, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';


const App = () => { 
    const {theme} = useTheme();
  
 
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
            </Suspense>
        </div>
    );
};

export default App;