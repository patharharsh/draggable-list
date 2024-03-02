import React from 'react'

const ListItem = ({ item, dragHandleProps }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;
  
    return (
      <div
        className="disable-select"
        style={{
          border: "1px solid black",
          margin: "4px",
          padding: "10px",
          display: "flex",
          gap: "20px",
          background: "#fff",
          userSelect: "none"
        }}

        onTouchStart={(e) => {
            e.preventDefault();
            console.log("touchStart");
            e.target.style.backgroundColor = "blue";
            document.body.style.overflow = "hidden";
            onTouchStart(e);
          }}
          onMouseDown={(e) => {
            console.log("mouseDown");
            document.body.style.overflow = "hidden";
            onMouseDown(e);
          }}
          onTouchEnd={(e) => {
            e.target.style.backgroundColor = "black";
            document.body.style.overflow = "visible";
          }}
          onMouseUp={() => {
            document.body.style.overflow = "visible";
          }}
      >
        <div>
        {item.id}
        </div>
        <div>:</div>      
        <div>
        {item.name}
            </div>   
       
      </div>
    );
  };

export default ListItem
