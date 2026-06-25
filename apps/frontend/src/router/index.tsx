import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '@/shared/layouts/MainLayout'
import DashboardPage from '@/modules/dashboard/pages/DashboardPage'
import UploadPage from '@/modules/upload/pages/UploadPage'
import PreviewPage from '@/modules/preview/pages/PreviewPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: '/upload', element: <UploadPage /> },
      { path: '/preview', element: <PreviewPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default router
