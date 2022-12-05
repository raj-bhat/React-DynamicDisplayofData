
import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent";

const TeamName="Debuggerers"
const HeaderComponent =()=>{
    return (
        < div className="header">
        <h1>{TeamName}</h1>
        </div>
    )
}

const data=[
    {
    "name":"Prakash",
     "Company":"Ftx infotech",
     id:1
    },{
   
    "name":"Atish",
   "Company":"ZopSmart",
   id:2
},{
    
    "name":"Garvith",
    "Company":"Adobe",
    id:3
},{   
"name":"Krishna",
"Company":"Rewaa",
id:4
},
{
   
"name":"Rishika",
"Company":"Kalinga Institute of Industrial Technology ",
id:5
},
{
   
"name":"Shubham",
"Company":"Accenture",
id:6
},
{

"name":"Vaibhav",
"Company":"Newgen Software",
id:7
},{

 "name":"Anuradha",
"Company":"Gainsight",
id:8
},{
    "name":"Jagadish",
   "Company":"Deolitte",
   id:9
   }
    
];

const CardDetail=()=>{
    const card=data.map((member)=>{
return <CardComponent memberDetails={member} />
    })

    return card;

    
    
}

const BodyComponent=()=>{
    

    return(
        <CardDetail />
    );

}

const AppLayout=()=>{
    return(
        <>
        <div className="Main-Container">
        <HeaderComponent/>
        <BodyComponent />
        </div></>
        
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


