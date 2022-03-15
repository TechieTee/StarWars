import React from 'react'
import styled from 'styled-components'

const Index = ({ tableTitle, rows, columns, rowOnClick }) => {
	const fields = []
	return (
		<div style={{ height: 400, width: '100%', overflow: 'hidden' }}>
			<h6 style={{ color: '#aaa' }}>{tableTitle}</h6>
			{/* <DataGrid
				rows={rows || []}
				columns={columns || []}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/> */}
			<Table>
				<thead>
					<tr>
						{columns.map((column, index) => {
							fields.push(column.field)
							return <th key={index}>{column?.headerName}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => {
						return (
							<tr onClick={() => rowOnClick(row)}>
								{fields.map((field, index) => (
									<td key={index}>{row[field]}</td>
								))}
							</tr>
						)
					})}
				</tbody>
			</Table>
		</div>
	)
}
export default Index

const Table = styled.table`
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
	tr {
		&:hover {
			background-color: #ddd;
			cursor: arrow;
			&:hover {
				background-color: #ddd;
				cursor: arrow;
			}
		}
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	td {
		border: 1px solid #ddd;
		padding: 8px;
	}
	th {
		border: 1px solid #ddd;
		padding: 8px;
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #f2f2f2;
		color: #7a7a7a;
	}
`
