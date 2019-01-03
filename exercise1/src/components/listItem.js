import React from 'react';
import '../styles/listItem.css';

const ListItem = props => {
    const { file } = props;
    //console.log('listitem', file)

    return (
        <tr className="">
            <td>{file.build_stack.name }</td>
        </tr>
    );
};

export default ListItem;
