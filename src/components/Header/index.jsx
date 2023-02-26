const Header = () => {
    return (
        <header className="container-fluid d-flex justify-content-end">
            <div className="d-flex align-items-center">
                <div className="text-end mr-3">
                    <span className="d-block m-0 p-0 text-white">Nome do usuário</span>
                    <small className="m-0 p-0">Função</small>
        
                </div>
                    <img src="https://picsum.photos/200" alt="Foto do usuário" />
                    <span className="mdi mdi-chevron-down"></span>
            </div>
        </header>
    );
    
};

export default Header;