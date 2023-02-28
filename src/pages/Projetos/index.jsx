import { useEffect } from 'react';
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.css'
import Table from '../../components/Table'

import { useDispatch, useSelector } from 'react-redux'
import { allProjetos } from '../../store/modules/projeto/actions'

const Projetos = () => {

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
            <div className="row">
                <div className="col-12">
                    <div className="w-100 d-flex justify-content-between">
                        <h3 className="mb-4 mt-0">Projetos</h3>
                        <div>
                            <button className="btn btn-primary">
                                <span className="mdi mdi-plus">Novo Projeto</span>
                            </button>
                        </div>
                    </div>
                    <Table
                    color='#ffafcc'

                    data={projetos}

                    config={[
                        {
                            label: 'Projeto', key: 'projeto', width: 80, align: 'center', fixed: true
                        },
                        {
                            label: 'Descrição', key: 'descricao', width: 500, align: 'center', fixed: true
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
                    onRowClick={(projeto) => alert(projeto.projeto)}
                    />
                </div>
            </div>
        </div>
    )
};

export default Projetos;