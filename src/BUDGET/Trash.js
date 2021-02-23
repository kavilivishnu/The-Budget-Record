import React, { useEffect } from "react";

function Trash(props) {
    const { finalArray, setFinalArray } = props;

    const handleTrash = () => {
        if (finalArray === []) {
            alert("Sorry🙃! Nothing to delete..");
        }
        else {
            var clicked = window.confirm("Hey there! You're about to empty your TRASH. You sure🤨?");
            if (clicked === true) {
                setFinalArray([]);
            }
            if (clicked === false) {
                setFinalArray(finalArray);
            }
        }
    }

    return (
        <div className="trash" >
            <button className="empty_trash" style={{ color: "white" }} onClick={(e) => handleTrash(e)} >CLEAR TRASH</button>
            {finalArray.map((items, id) => (
                <div key={id} className="trash_items">
                    {/* <button onClick={() => handleSymbol(items)} >Show Symbol</button> */}
                    <p>
                        {" "}
                        <span className="trash_name">
                            <b>EVENT: {items.lebeling}</b><br />
                        </span>
                        <span
                            className="trash_amount">
                            <b>AMOUNT ( {items.digit} {items.bill} ) {""}</b>
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Trash;
