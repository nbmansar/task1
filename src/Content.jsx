import React from "react";

const Content = () =>{
    let value = [
        {'name':'Ansar','DOB':'31-01'},
        {'name':'Agash','DOB':'01-01'},
        {'name':'Pari','DOB':'21-01'},
        
];

const boxColor = {
    margin:'10%',
    height:'50vh',
    border:'1px solid grey',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' 
};
let i=0;
return(
    <div class="container">
        <div className="row">
        {value.map((val, index) => (
            <div className="col-sm-4" key={index}>
            <div className="box" style={boxColor}>
                <p><label htmlFor="name">Name : {val.name}</label></p>
                <p><label htmlFor="DOB">DOB : {val.DOB}</label></p>
            </div>
            </div>
        ))}
        </div>
  </div>
);
}

export default Content;