import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from 'pages/Main'
import { AboutPage } from 'pages/About'
import { routeConfig } from 'shared/config/routerConfig/routeConfig'

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='page-wrapper'>
    <Routes>
       {Object.values(routeConfig).map(({path, element}) => <Route path={path} element={element} />)}
    </Routes> 
    </div>
    </Suspense>
  )


export default AppRouter