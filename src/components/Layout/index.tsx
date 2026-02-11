import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-clip">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
