import React, { useState } from 'react';
import './Folder.css';
import { FiFolder } from 'react-icons/fi';
import { BiDownArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';


const Folder = ({ structure }) => {

    const [expand, setExpand] = useState(false);
    const [arrow, setArrow] = useState(true);
    console.log(structure.isFolder);

    if (structure.isFolder) {
        return (
            <div className='folder-container'>
                <span onClick={
                    () => {
                        setExpand(!expand);
                        setArrow(!arrow);
                    }
                } className="root">
                    {arrow ? <BiRightArrow /> : <BiDownArrow />} &nbsp;
                    <FiFolder />&nbsp;
                    {structure.name}
                    <br />
                </span>
                <div
                    style={
                        {
                            display: expand ? "block" : "none",
                            'padding-left': 10
                        }}>
                    {
                        structure.items.map(
                            (exp, index) => {
                                return <Folder key={index} structure={exp} />
                            })
                    }
                </div>
            </div>
        )

    } else {
        return (
            <span className='file-name'>
                {structure.name}
                <br />
            </span>
        )
    }

}

export default Folder;