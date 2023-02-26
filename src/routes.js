import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import './styles.css'

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Projetos from "./pages/Projetos";
import Atividades from './pages/Atividades';

const Routes = () => {
    return (
        <>
        <Header/>
        <div className="container-fluid h-100">
            <div className="row h-100">
                <Router>
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/" element={<Projetos/>} />
                        <Route axact path="/atividades" element={<Atividades/>} />

                    </Switch>
                </Router>
            </div>

        </div>

        </>
    )
};

export default Routes;