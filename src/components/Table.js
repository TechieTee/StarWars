import React from 'react'

const Index = ({ rows, columns, rowOnClick }) => {
	const fields = []
	return (
		<div style={{ height: 400, width: '100%' }}>
			{/* <DataGrid
				rows={rows || []}
				columns={columns || []}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/> */}
			<table>
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
			</table>
		</div>
	)
}
export default Index
