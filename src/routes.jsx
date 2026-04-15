import { createHashRouter } from 'react-router-dom'

import Home from './pages/Home'
import ListUsers from './pages/ListUsers'

const router = createHashRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }
])

export default router