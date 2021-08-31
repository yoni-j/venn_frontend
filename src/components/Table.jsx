import React from 'react'
import {useTable} from 'react-table'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default function Table(props) {
    console.log(props.data)

    const data = React.useMemo(
        () => props.data
        ,[props.data]
    )

    const columns = React.useMemo(
        () => [
          {
            Header: 'Our rate',
            accessor: 'our_rate', // accessor is the "key" in the data
          },
        //   {
        //     Header: 'Geographic area 2010 census fips county code',
        //     accessor: 'geographic_area_2010_census_fips_county_code', // accessor is the "key" in the data
        //   },
          {
            Header: 'Geographic area borough',
            accessor: 'geographic_area_borough',
          },
        //   {
        //     Header: 'Geographic area neighborhood tabulation area nta code',
        //     accessor: 'geographic_area_neighborhood_tabulation_area_nta_code', // accessor is the "key" in the data
        //   },
          {
            Header: 'Geographic area neighborhood tabulation area nta_name',
            accessor: 'geographic_area_neighborhood_tabulation_area_nta_name',
          },
          {
            Header: 'Total population 2000 number',
            accessor: 'total_population_2000_number', // accessor is the "key" in the data
          },
          {
            Header: 'Total population 2010 number',
            accessor: 'total_population_2010_number',
          },
          {
            Header: 'Total population change 2000-2010 number',
            accessor: 'total_population_change_2000_2010_number', // accessor is the "key" in the data
          },
          {
            Header: 'Total population change 2000-2010_percent',
            accessor: 'total_population_change_2000_2010_percent',
          },
        ],
        []
    )

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance


    return (
        // apply the table props
        <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell className="header" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </MaUTable>
    )
}
