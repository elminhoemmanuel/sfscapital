import Navbar from './Navbar'

const Layout = ({ children }) => {
    return ( 
        <div className="content relative">
            <Navbar />
            {children}
        </div>
     );
}
 
export default Layout;