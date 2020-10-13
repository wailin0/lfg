import React from 'react';
import '../../styles/Toolbar.css';
import {FaCloudMoon, FaCog} from 'react-icons/fa'


export default function Toolbar(props) {
    const { title, leftItems, rightItems } = props;
    return (
      <div className="toolbar">
        <div className="left-items">{ leftItems }</div>
        <h1 className="toolbar-title">{ title }</h1>
        <div className="right-items">{ rightItems }</div>
      </div>
    );
}