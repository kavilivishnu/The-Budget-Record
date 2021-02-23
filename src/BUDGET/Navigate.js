import React from "react";

function Navigate({ setIsTrashShowing }) {
    return (
        <div className="nav" >
            <span
                onClick={() => setIsTrashShowing(false)}
                style={{ marginRight: "150px", cursor: "pointer" }}
            >
                Main Page
      </span>
            <span
                onClick={() => setIsTrashShowing(true)}
                style={{ marginRight: "10px", cursor: "pointer" }}
            >
                Trash
      </span>
        </div>
    );
}

export default Navigate;
