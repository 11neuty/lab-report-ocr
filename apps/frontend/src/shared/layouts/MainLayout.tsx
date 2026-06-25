import { Outlet } from 'react-router-dom'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import PageContainer from '@/shared/components/PageContainer'
import '@/shared/styles/layout.css'

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  )
}
