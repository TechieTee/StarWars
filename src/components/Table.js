import React from 'react'
import styled from 'styled-components'

const Index = ({ tableTitle, rows, columns, rowOnClick }) => {
	const fields = []
	return (
		<Wrapper>
			<h6>{tableTitle}</h6>
			<Table>
				<thead>
					<tr>
						<th></th>
						{columns.map((column, index) => {
							fields.push(column.field)
							return <th key={index}>{column?.headerName}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{rows.length > 0 &&
						rows.map((row, index) => {
							return (
								<tr key={index} onClick={() => rowOnClick(row)}>
									<td>
										<form>
											<input type='checkbox' />
										</form>
									</td>
									{fields.map((field, index) => (
										<td key={index}>{row[field]}</td>
									))}
								</tr>
							)
						})}
				</tbody>
			</Table>
			<div>
				{rows.length < 1 && (
					<p className='text-center w-100 pb-3'>
						No <span className='text-lowercase'>{tableTitle}</span>
					</p>
				)}
			</div>
		</Wrapper>
	)
}
export default Index

const Table = styled.table`
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
	margin-bottom: 2rem;
	tr {
		cursor: pointer;
		&:hover {
			background-color: #ddd;
			cursor: arrow;
		}
		&:nth-child(even) {
			background-color: #f2f2f2;
		}
	}
	td {
		border: 1px solid #ddd;
		padding: 8px;
		&:last-of-type {
			max-width: 300px;
			overflow-x: auto;
		}
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
const Wrapper = styled.div`
	width: 100%;
	h6 {
		color: #aaa;
	}
`
