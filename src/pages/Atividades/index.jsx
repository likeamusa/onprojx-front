import { useEffect, useState } from 'react'
import { Drawer, Button } from 'rsuite'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import './Timeline.css'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useDispatch, useSelector } from 'react-redux'

import { filterAtividades } from '../../store/modules/atividade/actions'


const Atividades = () => {

    const dispatch = useDispatch()

    const { atividades }  = useSelector((state) => state.atividade);

    const events = atividades.map((atividade) => ({
        id: atividade.id,
        group: atividade.designated_id,
        title: `${atividade.project} - ${atividade.description}`,
        start_time: moment(atividade.start).toDate(),
        end_time: moment(atividade.end).add(1, 'day'),
    }))

    const designateds = [
        { id: 19859, title: 'Joaozinho da silva' }, 
        { id: 2, title: 'Mormantino Xavier' },
        { id: 19857, title: 'Marionete da Silva' },
        { id: 19858, title: 'Mario Leonardo' },
        { id: 5, title: 'Xerosvaldo da Mata' },
        { id: 6, title: 'Luis Ferdinando' },
        { id: 7, title: 'Jucelino Kubshaksperr' },
        { id: 8, title: 'Marina Silva' },
        { id: 9, title: 'Joao Miguel' },
        { id: 10, title: 'Pino Banner' },
        { id: 11, title: 'Romario Vidente' },
        { id: 12, title: 'Jacaré Limeira' },
        { id: 13, title: 'Pneumatico dos Santos' },
        { id: 14, title: 'Alaide maria' }

    ]

    const items = [
    {
        id: 1,
        group: 1,
        title: '8180234 - Atividade programada pra o dia em que foi designada',
        start_time: moment(0, 'hour'),
        end_time: moment(0, 'hour').add(1, 'day')
    },
    {
        id: 2,
        group: 7,
        title: '8228487 - Atividade programada pra o dia em que foi designada',
        start_time: moment(0, 'hour'),
        end_time: moment(0, 'hour').add(1, 'day')
    },
    {
        id: 3,
        group: 9,
        title: '8472834 - Atividade programada pra o dia em que foi designada',
        start_time: moment(0, 'hour'),
        end_time: moment(0, 'hour').add(1, 'day')
    }
    ]

    const [open, setOpen] = useState(false)

    useEffect(() => {
        dispatch(filterAtividades(
            moment().weekday(0).format('YYYY-MM-DD'),
            moment().weekday(6).format('YYYY-MM-DD')
        ))
    }, [])

    moment.defineLocale('pt-br', { 
        weekdaysMin: 'Do_Seg_Ter_Qua_Qui_Sex_Sá'.split('_'),
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_')
    })

    return (
        <div className="col p-5 overflow-auto h-100">
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>Atividade</Drawer.Title>
                    <Drawer.Actions>
                    <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        <Button onClick={() => setOpen(false)} appearance="primary">Confirmar</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <p>Atividade</p>
                </Drawer.Body>
                
            </Drawer>
            
            <div className="row">
                <div className="col-12">
                <div className="w-100 d-flex justify-content-between">
                        <h3 className="mb-4 mt-0 text-sm">Atividades programadas</h3>
                        <div>
                            <button className="btn btn-primary">
                                <span className="mdi mdi-plus" onClick={() => setOpen(true)}>Nova Atividade</span>
                            </button>
                        </div>
                    </div>
                    
                    <Timeline
                    groups={designateds}
                    items={events}
                    defaultTimeStart={moment().add(-12, 'hour')}
                    defaultTimeEnd={moment().add(12, 'hour')}
                    canChangeGroup={true}
                    canResize={true}
                    onItemDoubleClick={(item, _, time) => {
                        setOpen(true)

                    }}
                    />

                </div>
            </div>
        </div>
    )
};

export default Atividades;