import React from "react";

function Trash(props) {
    const { finalArray, setFinalArray, eventName } = props;

    const handleTrash = () => {
        if (finalArray === []) {
            alert("Sorry🙃! Nothing to delete..");
        } else {
            var clicked = window.confirm(
                "Hey there! You're about to empty your TRASH. You sure🤨?"
            );
            if (clicked === true) {
                setFinalArray([]);
            }
            if (clicked === false) {
                setFinalArray(finalArray);
            }
        }
    };

    return (
        <div className="trash">
            <button
                className="empty_trash"
                style={{ color: "white" }}
                onClick={(e) => handleTrash(e)}
            >
                CLEAR TRASH
      </button>
            {finalArray.map((items, id) => (
                <div key={id} className="trash_items">
                    {items.lebeling === "" ? (
                        ""
                    ) : (
                        <div>
                            <p>
                                {" "}
                                <span className="trash_name">
                                    <b>
                                        {" "}
                                        {eventName} {items.lebeling}
                                    </b>
                                    <br />
                                </span>
                                <span className="trash_amount">
                                    <b>
                                        {/* {items.digit} {items.bill} {""} */}
                    AMOUNT : ( {items.digit} {items.bill} ) {""}
                                    </b>
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Trash;
