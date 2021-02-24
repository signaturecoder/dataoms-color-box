import React from 'react';
import './Box.css';
const Box = ({boxNum}) => {


 return (
 <div className="Box__Container">
 <div className="Box">{boxNum}</div>
 </div>
 )    
}

export default Box;