import { useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Drawer } from 'rsuite'
import moment from 'moment'
import 'moment/locale/pt-br'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useDispatch, useSelector } from 'react-redux'

import { filterAtividades } from '../../store/modules/atividade/actions'

const localizer = momentLocalizer(moment)

const Atividades = () => {

    const dispatch = useDispatch()

    const { atividades }  = useSelector((state) => state.atividade);

    const events = atividades.map((atividade) => ({
        title: atividade.title,
        start: moment(atividade.start).toDate(),
        end: moment(atividade.end).toDate()
    }))

    useEffect(() => {
        dispatch(filterAtividades(
            moment().weekday(0).format('YYYY-MM-DD'),
            moment().weekday(6).format('YYYY-MM-DD')
        ))
    }, [])

    return (
        <div className="col p-5 overflow-auto h-100">
            <Drawer>
                <Drawer.Body>
                    
                </Drawer.Body>
            </Drawer>
            <div className="row">
                <div className="col-12">
                <div className="w-100 d-flex justify-content-between">
                        <h3 className="mb-4 mt-0 text-sm">Atividades programadas</h3>
                        <div>
                            <button className="btn btn-primary">
                                <span className="mdi mdi-plus">Nova Atividade</span>
                            </button>
                        </div>
                    </div>
                    
                    <Calendar
                        localizer={localizer}
                        events={events}
                        defaultView="week"
                        selectable
                        resourceAccessor={'ASFLKJ'}
                        popup
                        style={{ height: '100vh'}}
                        messages={{
                            next: 'Próximo',
                            previous: 'Anterior',
                            today: 'Hoje',
                            month: 'Mês',
                            week: 'Semana',
                            day: 'Dia',
                            agenda: 'Agenda',
                        }}
                        popupOffset={{ x: 30, y: 20 }}
                        culture="pt-BR"
                    />
                </div>
            </div>
        </div>
    )
};

export default Atividades;