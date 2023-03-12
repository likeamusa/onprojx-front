import { useEffect, useState } from 'react';
import { Button, Drawer} from 'rsuite';
import 'rsuite/dist/rsuite.css'
import Table from '../../components/Table'

import { useDispatch, useSelector } from 'react-redux'
import { allProjetos, createProject, updateProjeto } from '../../store/modules/projeto/actions'

const Projetos = () => {
    
    const { projetos, form, components, behavior } = useSelector(state => state.projeto);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allProjetos());
    }, []);

    const [projectData, setProjectData] = useState({ project: 0, description: '', local: '', regional: '', type: '', start_date: '', deadline_date: ''});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProjectData((prevState) => ({ ...prevState, [name]: value }));
        console.log(projectData);
    };

    const setComponent = (component, value) => {
        dispatch(updateProjeto({
            components: {...components, [component]: value}
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createProject(projectData));
        setComponent('drawer', false);
        dispatch(allProjetos());
    };


    return (
        <div className="col p-5 overflow-auto h-100">
            {/* novo */}
            <Drawer open={components.drawer} onClose={() => setComponent('drawer', false)}>
                <Drawer.Header>
                    <Drawer.Title>{behavior === 'create' ? 'Novo' : 'Atualizar'} projeto</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setComponent('drawer', false)}>Cancelar</Button>
                        <Button onClick={handleSubmit} appearance="primary">Confirmar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="row">
                            <div className="form-group mt-4">
                                <b>Número do projeto</b>
                                <div className="input-group col-6">
                                    <input type="text" name='project' className="form-control" placeholder="Número do projeto" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group mt-4 col-6">
                                <b>Tipo</b>
                                <div className="input-group">
                                     <select className='form-control' name='type' onChange={handleInputChange} >
                                        <option value="">Selecione</option>
                                        <option value="LPT">LPT</option>
                                        <option value="Varejo">Varejo</option>
                                        <option value="Alimentador">Alimentador</option>
                                     </select>
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-6">
                                <b>Localidade</b>
                                <div className="input-group">
                                    <input type="text" name='local' className="form-control" placeholder="Localidade" onChange={handleInputChange} />
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-12">
                                <b>Regional</b>
                                <div className="input-group">
                                    <input type="text" name='regional' className="form-control" placeholder="Regional" onChange={handleInputChange}/>
                                </div>
                            </div>

                            <div className="form-group mt-4 col-6">
                                <b>Previsão de ínicio</b>
                                <div className="input-group">
                                    <input type="date" name='start_date' className="form-control" placeholder="Previsão de ínicio" onChange={handleInputChange}/>
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-6">
                                <b>Prazo de entrega</b>
                                <div className="input-group">
                                    <input type="date" name='deadline_date' className="form-control" placeholder="Prazo de entrega" onChange={handleInputChange}/>
                                </div>
                            </div>

                            <div className="form-group mt-4 col-12 h-100">
                                <b>Descrição</b>
                                <div className="input-group h-100">
                                    <input type="text" name='description' className="form-control" placeholder="Descrição"  onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group mt-4 col-12 h-100">
                                <Button appearance='primary'>Importar Projeto CSV</Button>
                            </div>
                            
                    </div>
                </Drawer.Body>
            </Drawer>

            {/* tabela */}
            <div className="row">
                <div className="col-12">
                    <div className="w-100 d-flex justify-content-between">
                        <h3 className="mb-4 mt-0">Projetos</h3>
                        <div>
                            <button className="btn btn-primary" onClick={() => {
                                dispatch(updateProjeto({
                                    behavior: 'create'
                                }));

                                setComponent('drawer',true);
                                }} >
                                <span className="mdi mdi-plus">Novo Projeto</span>
                            </button>
                        </div>
                    </div>
                    <Table

                    loading={form.loading}
                    
                    color='#ffafcc'

                    data={projetos}


                    config={[
                        {
                            label: 'Projeto', key: 'project', width: 80, align: 'center'
                        },
                        {
                            label: 'Descrição', key: 'description', width: 500
                        },
                        {
                            label: 'Tipo', key: 'type', align: 'center'
                        },
                        {
                            label: 'Data Início', key: 'start_date', align: 'center'
                        },
                        {
                            label: 'Prazo de Entrega', key: 'deadline_date', align: 'center'
                        },
                        {
                            label: 'Status', key: 'status', align: 'center'
                        },
                        {
                            label: 'Atualizado em', key: 'updatedAt', align: 'center'
                        }
                    ]}
                    actions={(projeto) => (
                        <Button color="orange" size='xs'>Ver Informações</Button>
                    )}/>
                </div>
            </div>
        </div>
    )
};

export default Projetos;