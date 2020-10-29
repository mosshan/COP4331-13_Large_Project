import React from 'react';
import './CSS/title.css';


let style = {
  background: "#FFC904",
  width: "100vw",
}



function PageTitle(props)
{
   return(
     <div class="title-container" style={style}>
       <span class="page-title" id="title">{props.text}</span>
     </div>
     
   );
};

export default PageTitle;
