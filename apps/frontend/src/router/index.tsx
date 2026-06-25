import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '@/shared/layouts/MainLayout'
import DashboardPage from '@/modules/dashboard/pages/DashboardPage'
import UploadPage from '@/modules/upload/pages/UploadPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: '/upload', element: <UploadPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default router
