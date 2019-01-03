import React from 'react';
import files from './files';
import ListItem from './listItem';
import '../styles/list.css';

const List = props => {
   

    const fileList = files.map((file, id) => {
        return <ListItem key={id} file={file} />;
    });

    return (
        <div>
            <table className="">
                <tbody>{fileList}</tbody>
            </table>
        </div>
    );
};

export default List;
