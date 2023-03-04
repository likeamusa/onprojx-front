import { useEffect, useState } from 'react';
import { Button, Drawer,} from 'rsuite';
import 'rsuite/dist/rsuite.css'
import Table from '../../components/Table'

import { useDispatch, useSelector } from 'react-redux'
import { allProjetos } from '../../store/modules/projeto/actions'

const Projetos = () => {

    const [open, setOpen] = useState(false);

    const projetos = useSelector(state => state.projeto.projetos);

    const dispatch = useDispatch();

    console.log(projetos);

    useEffect(() => {
        dispatch(allProjetos());
    }, []);

    // const projetos = [
    //     {
    //         projeto: 8080201,
    //         descricao: 'Descrição do projeto 1 com mais de uma e mais informacao generica para ',
    //         tipo: 'LPT',
    //         status: 'Pendente',
    //         dataInicio: '01/01/2021',
    //         dataFim: '01/01/2021'
    //     },
    //     {
    //         projeto: 8048652,
    //         descricao: 'Descrição do projeto 2 com mais de uma e mais informacao generica para ',
    //         tipo: 'Varejo',
    //         status: 'Locado',
    //         dataInicio: '01/01/2021',
    //         dataFim: '01/01/2021',
    //     },
    //     {
    //         projeto: 8048652,
    //         descricao: 'Descrição do projeto 3 com mais de uma e mais informacao generica para ',
    //         tipo: 'Varejo',
    //         status: 'Concluído',
    //         dataInicio: '01/01/2021',
    //         dataFim: '01/01/2021',
    //     },
    // ]


    return (
        <div className="col p-5 overflow-auto h-100">
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>Novo Projeto</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        <Button onClick={() => setOpen(false)} appearance="primary">Confirmar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    
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
                            label: 'Projeto', key: 'projeto', width: 80, align: 'center'
                        },
                        {
                            label: 'Descrição', key: 'descricao', width: 500, align: 'center'
                        },
                        {
                            label: 'Tipo', key: 'tipo', align: 'center'
                        },
                        {
                            label: 'Data Início', key: 'dataInicio', align: 'center'
                        },
                        {
                            label: 'Prazo', key: 'dataFim', align: 'center'
                        },
                        {
                            label: 'Status', key: 'status', align: 'center'
                        },
                    ]}
                    actions={(projeto) => (
                        <Button color="orange" size='xs'>Ver Informações</Button>
                    )}
                    onRowClick={(projeto) => setOpen(true)}/>
                </div>
            </div>
        </div>
    )
};

export default Projetos;