import React from 'react';
import '../Styles/ListItem.css';

const ListItem = (props) => {

	const { file, handleDelete } = props;
	const fileName = file.name || file;
	 //console.log('listitem', file)
	
	return <tr className=''>
		    <td>{<i className="fa fa-tasks" aria-hidden="true"></i>}</td>
			<td>{fileName}</td>
			<td>
				<button type='button' onClick={e => handleDelete(file)}>
					X
				</button>
			</td>
		</tr>;
};

export default ListItem;

