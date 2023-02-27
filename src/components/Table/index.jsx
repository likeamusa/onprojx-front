import { Popover, Table, Whisper } from 'rsuite'

const { Column, HeaderCell, Cell } = Table;



const TableComponent = ({ data , config, actions, onRowClick }) => {
    return (
        <Table
            height={400} data={data} onRowClick={onRowClick}>
                {config.map((c) => (
                    <Column flexGrow={!c.width ? 1 : 0} width={c.width} align={c.align} fixed={c.fixed}>
                    <HeaderCell>{c.label}</HeaderCell>
                        <Cell dataKey={c.key} />
                    </Column>
                ))}
                <Column width={150} fixed='right' align='center'>
                    <HeaderCell>Ação</HeaderCell>
                    <Cell>
                        {(item) => actions(item)}
                    </Cell>
                </Column>
               
            
        </Table>
    )
}

export default TableComponent;