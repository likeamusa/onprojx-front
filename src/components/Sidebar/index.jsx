import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-white.png';

const withRouter = (Component) => (props) => {
    const location = useLocation();
    return <Component {...props} location={location} />;
};

const Sidebar = ({ location }) => {
    return (
        <sidebar className="col-2 h-100">
            <div className='px-3 py-4'></div>
            <ul className='p-0 m-0'>
                <li>
                    <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                        <span className='mdi mdi-map-legend'></span>
                        <text>Projetos</text>
                    </Link>
                </li>
                <li>
                        <Link to='/atividades' className={location.pathname === '/atividades' ? 'active' : ''}>
                        <span className='mdi mdi-calendar-check'></span>
                        <text>Atividades</text>
                    </Link>
                    
                </li>
            </ul>
        </sidebar>
    )
};

export default withRouter(Sidebar);