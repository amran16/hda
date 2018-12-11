import React from 'react';
//import files from './files';
import ListItem from './ListItem';
import '../Styles/List.css';


const List = (props) => {

    const { files, handleDelete } = props;

    const fileList = files.map((file, index) => {
        return <ListItem key={index} file={file} handleDelete={handleDelete} />;
    })

    return (
        <div>
         <table className=''>
            <tbody>{fileList}</tbody>
         </table>
        </div>
    )
}

export default List;
