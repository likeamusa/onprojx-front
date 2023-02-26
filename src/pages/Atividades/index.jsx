import { useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
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
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-4 mt-0">Atividades</h2>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        defaultView="week"
                        selectable
                        popup
                        style={{ height: 600 }}
                    />
                </div>
            </div>
        </div>
    )
};

export default Atividades;