import Navbar from './Navbar'

const Layout = ({ children }) => {
    return ( 
        <div className="content relative">
            {children}
        </div>
     );
}
 
export default Layout;