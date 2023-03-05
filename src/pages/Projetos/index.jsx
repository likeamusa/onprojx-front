import { useEffect, useState } from 'react';
import { Button, Drawer,} from 'rsuite';
import 'rsuite/dist/rsuite.css'
import Table from '../../components/Table'

import { useDispatch, useSelector } from 'react-redux'
import { allProjetos, createProject } from '../../store/modules/projeto/actions'

const Projetos = () => {

    const [open, setOpen] = useState(false);
    const [detalheProjeto, setDetalheProjeto] = useState(false);
    const [editProjeto, setEditProjeto] = useState(false);
    
    const projetos = useSelector(state => state.projeto.projetos);

    const dispatch = useDispatch();

    console.log(projetos);

    useEffect(() => {
        dispatch(allProjetos());
    }, []);


    const addProject = () => {
        dispatch(createProject())
    }

    const handlerInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        dispatch(createProject({ [name]: value }));
    }

    return (
        <div className="col p-5 overflow-auto h-100">
            {/* novo */}
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>Novo Projeto</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        <Button onClick={() => {setOpen(false); addProject()}} appearance="primary">Confirmar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="row">
                            <div className="form-group mt-4">
                                <b>Número do projeto</b>
                                <div className="input-group col-6">
                                    <input type="text" className="form-control" placeholder="Número do projeto" onChange={handlerInputChange} />
                                </div>
                            </div>

                            <div className="form-group mt-4 col-6">
                                <b>Tipo</b>
                                <div className="input-group">
                                     <select className='form-control'>
                                        <option value="">Selecione</option>
                                        <option value="1">LPT</option>
                                        <option value="2">Varejo</option>
                                        <option value="3">Alimentador</option>
                                     </select>
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-6">
                                <b>Localidade</b>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Localidade" />
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-12">
                                <b>Regional</b>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Regional" />
                                </div>
                            </div>

                            <div className="form-group mt-4 col-6">
                                <b>Previsão de ínicio</b>
                                <div className="input-group">
                                    <input type="date" className="form-control" placeholder="Previsão de ínicio" />
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-6">
                                <b>Prazo de entrega</b>
                                <div className="input-group">
                                    <input type="date" className="form-control" placeholder="Prazo de entrega" />
                                </div>
                            </div>

                            <div className="form-group mt-4 col-12 h-100">
                                <b>Descrição</b>
                                <div className="input-group h-100">
                                    <input type="text" className="form-control" placeholder="Descrição"  />
                                </div>
                            </div>
                            <div className="form-group mt-4 col-12 h-100">
                                <Button appearance='primary'>Importar Projeto CSV</Button>
                            </div>
                            
                    </div>
                </Drawer.Body>
            </Drawer>

            {/* detalhes */}
            <Drawer open={detalheProjeto} onClose={() => {
                setEditProjeto(false);
                setDetalheProjeto(false);
            }}>
                <Drawer.Header>
                    <Drawer.Title>Novo Projeto</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setEditProjeto(true)} appearance='primary' hidden={editProjeto ? true : false} >Editar</Button>
                        <Button onClick={() => { setDetalheProjeto(false); setEditProjeto(false)}}>Cancelar</Button>
                        <Button onClick={() => {setDetalheProjeto(false); setEditProjeto(false)}} hidden={editProjeto ? false : true} appearance="primary" >Confirmar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="row">
                        <h4>Detalhes</h4>
                            <div className="form-group mt-4">
                                <b>Número do projeto</b>
                                <div className="input-group col-6">
                                    <input type="text" className="form-control" placeholder="Número do projeto" disabled={ editProjeto ? false : true} />
                                </div>
                            </div>

                            <div className="form-group mt-4 col-6">
                                <b>Tipo</b>
                                <div className="input-group">
                                     <select className='form-control' disabled={ editProjeto ? false : true}>
                                        <option value="">Selecione</option>
                                        <option value="1">LPT</option>
                                        <option value="2">Varejo</option>
                                        <option value="3">Alimentador</option>
                                     </select>
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-6">
                                <b>Localidade</b>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Localidade" disabled={ editProjeto ? false : true}/>
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-12">
                                <b>Regional</b>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Regional" disabled={ editProjeto ? false : true}/>
                                </div>
                            </div>

                            <div className="form-group mt-4 col-6">
                                <b>Previsão de ínicio</b>
                                <div className="input-group">
                                    <input type="date" className="form-control" placeholder="Previsão de ínicio" disabled={ editProjeto ? false : true}/>
                                </div>
                            </div>
                            
                            <div className="form-group mt-4 col-6">
                                <b>Prazo de entrega</b>
                                <div className="input-group">
                                    <input type="date" className="form-control" placeholder="Prazo de entrega" disabled={ editProjeto ? false : true}/>
                                </div>
                            </div>

                            <div className="form-group mt-4 col-12">
                                <b>Descrição</b>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Descrição" disabled={ editProjeto ? false : true}/>
                                </div>
                            </div>
                                
                            <div className='mt-4'>
                                <h4>Atividades Programadas</h4>
                                <p className='mt-4'>(Cancelado) - 12/04/2023 - João da Silva - Implantação de um 7 poste com linha viva</p>
                                <p className='mt-4'>(Programado) - 13/04/2023 - Fulano de Tal - Lançamento de cabo do poste tal ao poste tal</p>
                                <p className='mt-4'>(Programado) - 13/04/2023 - Fulano de Tal - Lançamento de cabo do poste tal ao poste tal</p>
                                <p className='mt-4'>(Programado) - 13/04/2023 - Fulano de Tal - Lançamento de cabo do poste tal ao poste tal</p>
                            </div>
                            
                            <div className='mt-4'>
                                <h4>Projeto</h4>
                                <div className='input-group mt-4'>
                                    <a href="http://">(09/12/2023) - Projeto Original</a>
                                </div>
                                <div className='input-group mt-4'>
                                    <a href="http://">(11/12/2023) - Projeto Alterado 1</a>
                                </div>
                                <div className='input-group mt-4'>
                                    <a href="http://">(12/12/2023) - Projeto Alterado 2</a>
                                </div>
                                <div className='input-group mt-4'>
                                    <a href="http://">(13/12/2023) - Projeto As Build</a>
                                </div>
                            </div>

                    </div>
                </Drawer.Body>
            </Drawer>

            <div className="row">
                <div className="col-12">
                    <div className="w-100 d-flex justify-content-between">
                        <h3 className="mb-4 mt-0">Projetos</h3>
                        <div>
                            <button className="btn btn-primary" onClick={() => setOpen(true)} >
                                <span className="mdi mdi-plus">Novo Projeto</span>
                            </button>
                        </div>
                    </div>
                    <Table
                    color='#ffafcc'

                    data={projetos}

                    config={[
                        {
                            label: 'Projeto', key: 'project', width: 80, align: 'center'
                        },
                        {
                            label: 'Descrição', key: 'description', width: 500, align: 'center'
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
                    ]}
                    actions={(projeto) => (
                        <Button color="orange" size='xs'>Ver Informações</Button>
                    )}
                    onRowClick={(projeto) => setDetalheProjeto(true)}/>
                </div>
            </div>
        </div>
    )
};

export default Projetos;