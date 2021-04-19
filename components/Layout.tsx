import Navbar from './Navbar'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
