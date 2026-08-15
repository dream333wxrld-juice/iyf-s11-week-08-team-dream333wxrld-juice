import { Outlet, NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function PageLayout({ sidebar }) {
  return (
    <div className="page-layout">
      <Header />
      <div className="page-body">
        <main className="page-content">
          <Outlet />
        </main>
        {sidebar && <aside className="page-sidebar">{sidebar}</aside>}
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout