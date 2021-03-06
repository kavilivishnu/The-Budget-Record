// Updated the UI. That is, previously both the current state and the setter state of the array were getting diplayed.
// it was like: EVENT: AMOUNT() and also the one containing information i.e., EVENT: something Amount (345$). This case
// will be seen only when the user had opened the app for the first time. Once the user deletes the whole stuff, the
// not required part will get deleted including the main information. The user can't get to te coclusion by themselves
// that, this will solve the situation. So to make it more user-friendly, instead of associating the heading within the
// map function, we append those headings to the properties within the object of an array. Doing so, only the setter
// state will get displayed but not the current state that doesn't have any information in that. Another update was
// showing an alert related to the "TITLE" part if clicked the name/rename button when not entered anything in the
// filed. Previously the the nitification would pop out when the user hadn't entered any data in the field. Those
//were the two updates made to the app. 

// The previous copy of the whole code of this component is copied in the
// CopyOfMain3.js component.

import React, { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEdit3 } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { MdClearAll } from "react-icons/md";
import Navigate from "./Navigate";
import Trash from "./Trash";

toast.configure();
function BudgetRecord() {
    useEffect(() => {
        toast.info(
            "Hello👋! I'm BUDDY😃. I will help you be aware of your actions in this APP😊",
            { autoClose: 6000 }
        );
        toast.info(
            "Once you're done filling the fields, select the currency currently been used at your place, then add your record😊",
            { autoClose: 10000 }
        );
    }, []);

    const [input, setInput] = useState("");
    const [money, setMoney] = useState("");
    const [array, setArray] = useState([
        { id: null, name: "", amount: "", currency: "" }
    ]);
    const [total, setTotal] = useState(0);
    const eventName = "EVENT NAME : ";
    const [selected, setSelected] = useState("");
    const [symbol, setSymbol] = useState("");
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [text, setText] = useState("");
    const [btn, setBtn] = useState("");
    const [finalArray, setFinalArray] = useState([
        { id: null, lebeling: "", digit: "", bill: "" }
    ]);
    const [isTrashShowing, setIsTrashShowing] = useState(false);

    let totalToInt = parseInt(total);
    let moneyToInt = parseInt(money);
    let deleteTotal = parseInt(total);

    const handleMoney = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setMoney(e.target.value);
        } else {
            alert("Hey! Only NUMBERS please🙃");
        }
    };

    const handleDelete = (items) => {
        const id = items.id;
        const amountToInt = parseInt(items.amount);
        const name = items.name;
        const clicked = window.confirm("You're DELETING AN ITEM!🤨 Are you sure?");
        setArray(array.filter((individualItem) => individualItem.id !== id));
        setFinalArray([
            ...finalArray,
            {
                id: uuidv4(),
                lebeling: name,
                digit: amountToInt,
                bill: selected
            }
        ]);
        if (clicked === true) {
            if (total === 0) {
                setTotal(0);
            } else {
                deleteTotal = totalToInt - amountToInt;
                setTotal(deleteTotal);
                toast.success(
                    "BUDDY: Hello there my beautiful friend! An item has been DELETED from your RECORD👍",
                    { autoClose: 2000 }
                );
            }
        }
        if (clicked === false) {
            setTotal(deleteTotal);
            setArray(array);
            console.log("working");
        }
        setTotal(deleteTotal + symbol);
        if (deleteTotal === 0) {
            setTotal(0);
        }
    };

    const handleEdit = (items) => {
        const ID = items.id;
        const variableName = items.name;
        const amountToInteger = parseInt(items.amount);
        setInput(variableName);
        setMoney(amountToInteger);
        setArray(array.filter((EachItem) => EachItem.id !== ID));
        if (total !== 0) {
            var finalResultWhenEdited = totalToInt - amountToInteger;
            setTotal(finalResultWhenEdited);
        } else {
            setTotal(0);
        }
    };

    const handleClear = () => {
        if ((total === 0) | (array === [])) {
            alert("Nothing to delete my friend!😊");
        } else {
            var confirmation = window.confirm(
                "You're going to DELETE ALL YOUR RECORDS😨. You sure about this?"
            );
            if (confirmation === true) {
                setInput("");
                setMoney("");
                setTotal(0);
                setArray([]);
                setSearch("");
                toast.success(
                    "BUDDY: Hello there my beautiful friend! All you're RECORDS HAVE BEEN DELETED!👍",
                    { autoClose: 5000 }
                );
            }
            if (confirmation === false) {
                setTotal(total);
                setArray(array);
            }
        }
    };

    const handleCurrency = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅😄");
        } else {
            setArray([
                ...array,
                {
                    id: uuidv4(),
                    name: input,
                    amount: money,
                    currency: selected + " , " + "IS THE AMOUNT"
                }
            ]);
            setSymbol(selected);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt + selected;
            setTotal(sumOfMoneyAndTotal);
            setInput("");
            setMoney("");
            toast.success(
                "BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍",
                { autoClose: 6000 }
            );
        }
    };

    const handleTitle = () => {
        if (text === "") {
            alert("BUDDY: Hey there😊! Please fill in the field to give a title");
        } else {
            setBtn(text);
            setText("");
            toast.success(
                "BUDDY: Enjoy your trip my friend! Have a wonderful time✌️😁🥳!!"
            );
        }
    };

    const handleRename = () => {
        if (btn === "") {
            alert(
                "Sorry😅 you got to have a title to edit! You can't edit unless you have a title put up."
            );
        } else {
            setText(btn);
            setBtn("");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("list")) {
            setArray(JSON.parse(localStorage.getItem("list")));
            setTotal(JSON.parse(localStorage.getItem("total")));
            setBtn(JSON.parse(localStorage.getItem("data")));
            setFinalArray(JSON.parse(localStorage.getItem("delete")));
        }
    }, []);

    useEffect(
        () => {
            window.localStorage.setItem("list", JSON.stringify(array));
            window.localStorage.setItem("total", JSON.stringify(total));
        },
        [array],
        [total]
    );

    useEffect(() => {
        window.localStorage.setItem("delete", JSON.stringify(finalArray));
    }, [finalArray]);

    useEffect(() => {
        window.localStorage.setItem("data", JSON.stringify(btn));
    }, [btn]);

    useEffect(() => {
        setFiltered(
            array.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [search, array]);

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "30px",
                backgroundColor: "whitesmoke"
            }}
        >
            <Navigate
                isTrashShowing={isTrashShowing}
                setIsTrashShowing={setIsTrashShowing}
            />
            {!isTrashShowing ? (
                <Fragment>
                    <h1 className="heading-1">
                        <i>Budget Record</i>
                    </h1>
                    <h1 className="title">{btn}</h1>
                    <br />
                    <br />
                    <input
                        className="search1"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your Title here... Eg: Trip to Miami"
                    />
                    <br />
                    <button className="add_button" onClick={(e) => handleTitle(e)}>
                        <span style={{ color: "white" }}>Click to ADD new Title</span>
                    </button>
                    <button className="add_button" onClick={(e) => handleRename(e)}>
                        <span style={{ color: "white" }}>
                            Click to EDIT the existing Title
            </span>
                    </button>
                    <br /><br />
                    <h2 style={{ fontFamily: "Overlock" }} >
                        Select the currency : {" "}
                        <select
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                            style={{ width: "180px", height: "35px" }}
                        >
                            <option value="Click to Select" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >Click to Select</option>
                            <option value="₹" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >₹(Indian RUPEES)</option>
                            <option value="£" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "21px" }} >£(POUND Sterling)</option>
                            <option value="€" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >€(EURO)</option>
                            <option value="¥" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >¥(Japaneese YEN)</option>
                            <option value="د.إ" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >
                                د.إ(DIRHAMS)</option>
                            <option value="$" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >$(Us DOLLAR)</option>
                            <option value="C$" style={{ fontFamily: "Overlock", fontWeight: "bolder", fontSize: "20px" }} >C$(Canadian DOLLAR)</option>
                        </select>
                    </h2>
                    <input
                        className="input_name"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter Event Name..."
                    />
                    <input
                        className="input_amount"
                        value={money}
                        onChange={handleMoney}
                        placeholder="Enter Amount..."
                    />
                    <br />
                    <button className="add_button" onClick={(e) => handleCurrency(e)}><span style={{ color: "white" }} >Add To The Record</span></button>
                    <br /> <br /> <br /><br />
                    <input
                        className="search"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for your event here..."
                    />
                    <br /> <br />
                    <h3 className="heading-2">
                        YOUR TOTAL IS ({" "}
                        <span style={{ color: "black", fontStyle: "italic" }}>{total}</span>{" "}
            )
          </h3>
                    <h3 className="heading-2">
                        <span style={{ color: "#525252", fontSize: "22px" }}>
                            Any further calculations? We've got you covered!
            </span>{" "}
                        <a
                            href="https://startcalculating.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "dodgerblue" }}
                        >
                            Visit this page...
            </a>
                    </h3>
                    <button className="clear_all_button" onClick={(e) => handleClear(e)}>
                        <MdClearAll className="clear" size="23px" />
                    </button>
                    {filtered.map((items, id) => (
                        <div key={id} className="all_items">
                            <p className="items">
                                <b>
                                    <span className="items_name">{items.name}</span>
                                    <span className="items_amount">{items.amount} {items.currency}</span>
                                </b>
                                {total !== 0 ? (
                                    <div className="buttons">
                                        <button
                                            className="edit_button"
                                            onClick={() => handleEdit(items)}
                                        >
                                            <FiEdit3 className="edit" size="20px" />
                                        </button>
                                        <button
                                            className="delete_button"
                                            onClick={() => handleDelete(items)}
                                        >
                                            <IoMdTrash className="delete" size="20px" />
                                        </button>
                                    </div>
                                ) : null}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ) : (
                <Trash
                    finalArray={finalArray}
                    setFinalArray={setFinalArray}
                    eventName={eventName}
                />
            )}
        </div>
    );
}

export default BudgetRecord;

// --------------------------------------------------------------------------------------------------------------------------------------------

// Trash.js copy of previous code structure:

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
                    {/* <button onClick={() => handleSymbol(items)} >Show Symbol</button> */}
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
            ))}
        </div>
    );
}

export default Trash;
