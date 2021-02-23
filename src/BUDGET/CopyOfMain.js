import React, { useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit3 } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { MdClearAll } from "react-icons/md";
import Navigate from './Navigate';
import Trash from './Trash';

toast.configure()
function BudgetRecord() {
    useEffect(() => {
        toast.info("Hello👋! I'm BUDDY😃. I will help you be aware of your actions in this APP😊", { autoClose: 6000 });
        toast.info("Once you're done filling the fields, click on the currency button that is currently used at your place accordingly, to add the entered data to your record😊", { autoClose: 10000 })
    }, [])

    const [input, setInput] = useState("");
    const [money, setMoney] = useState("");
    const [array, setArray] = useState([
        { id: null, name: "", amount: "", currency: "" }
    ]);
    const [total, setTotal] = useState(0)
    const [dheeram] = useState("د.إ");
    const [dollar] = useState("$");
    const [rupees] = useState("₹");
    const [euro] = useState("€");
    const [pound] = useState("£");
    const [yen] = useState("¥");
    const [canadian] = useState("C$");
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
        if (e.target.value === '' || re.test(e.target.value)) {
            setMoney(e.target.value);
        }
        else {
            alert("Hey! Only NUMBERS please🙃");
        }
    }

    const handleAdd = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + rupees, currency: rupees }]);
            setSymbol(rupees);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyofRupees = sumOfMoneyAndTotal + rupees;
            setTotal(currencyofRupees);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍 in the currency: RUPEE", { autoClose: 2000 });
        }
    }

    const handleDelete = (items) => {
        const id = items.id;
        const amountToInt = parseInt(items.amount);
        const name = items.name;
        const clicked = window.confirm("You're DELETING AN ITEM!🤨 Are you sure?");
        setArray(array.filter(individualItem => individualItem.id !== id));
        setFinalArray([
            ...finalArray,
            { id: uuidv4(), lebeling: name, digit: amountToInt, bill: symbol }
        ]);
        if (clicked === true) {
            if (total === 0) {
                setTotal(0);
            }
            else {
                deleteTotal = totalToInt - amountToInt;
                setTotal(deleteTotal);
                toast.success("BUDDY: Hello there my beautiful friend! An item has been DELETED from your RECORD👍", { autoClose: 2000 });
            }
        }
        if (clicked === false) {
            setTotal(deleteTotal);
            setArray(array);
            console.log("working");
        }
        if (symbol === dheeram) {
            var currencySymbolDheeram = deleteTotal + dheeram;
            setTotal(currencySymbolDheeram);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        if (symbol === rupees) {
            var currencySymbolRupees = deleteTotal + rupees;
            setTotal(currencySymbolRupees);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        if (symbol === dollar) {
            var currencySymbolDollar = deleteTotal + dollar;
            setTotal(currencySymbolDollar);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        if (symbol === euro) {
            var currencySymbolEuro = deleteTotal + euro;
            setTotal(currencySymbolEuro);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        if (symbol === pound) {
            var currencySymbolPound = deleteTotal + pound;
            setTotal(currencySymbolPound);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        if (symbol === yen) {
            var currencySymbolYen = deleteTotal + yen;
            setTotal(currencySymbolYen);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        if (symbol === canadian) {
            var currencySymbolCanadian = deleteTotal + canadian;
            setTotal(currencySymbolCanadian);
            if (deleteTotal === 0) {
                setTotal(0);
            }
        }
        // if (clicked === true) {
        //     var finalResultWhenDeleted = totalToInt - amountToInt;
        //     setTotal(finalResultWhenDeleted);
        //     toast.success("BUDDY: Hello there my beautiful friend! An item has been DELETED from your RECORD👍", { autoClose: 2000 });
        // }
        // if (clicked === false) {
        //     setTotal(total);
        //     setArray(array);
        // }
        // if (symbol === dheeram) {
        //     var currencySymbolDheeram = finalResultWhenDeleted + dheeram;
        //     setTotal(currencySymbolDheeram);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // if (symbol === dollar) {
        //     var currencySymbolDollar = finalResultWhenDeleted + dollar;
        //     setTotal(currencySymbolDollar);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // if (symbol === rupees) {
        //     var currencySymbolRupees = finalResultWhenDeleted + rupees;
        //     setTotal(currencySymbolRupees);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // if (symbol === euro) {
        //     var currencySymbolEuro = finalResultWhenDeleted + euro;
        //     setTotal(currencySymbolEuro);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // if (symbol === pound) {
        //     var currencySymbolPound = finalResultWhenDeleted + pound;
        //     setTotal(currencySymbolPound);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // if (symbol === yen) {
        //     var currencySymbolYen = finalResultWhenDeleted + yen;
        //     setTotal(currencySymbolYen);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // if (symbol === canadian) {
        //     var currencySymbolCanadian = finalResultWhenDeleted + canadian;
        //     setTotal(currencySymbolCanadian);
        //     if (finalResultWhenDeleted === 0) {
        //         setTotal(0);
        //     }
        // }
        // else {
        //     setTotal(0);
        // }
    }

    const handleEdit = (items) => {
        const ID = items.id;
        const variableName = items.name;
        const amountToInteger = parseInt(items.amount);
        setInput(variableName);
        setMoney(amountToInteger);
        setArray(array.filter(EachItem => EachItem.id !== ID));
        if (total !== 0) {
            var finalResultWhenEdited = totalToInt - amountToInteger;
            setTotal(finalResultWhenEdited);
        }
        else {
            setTotal(0);
        }

    }

    const handleClear = () => {
        if (total === 0 | array === []) {
            alert("Nothing to delete my friend!😊");
        }
        else {
            var confirmation = window.confirm("You're going to DELETE ALL YOUR RECORDS😨. You sure about this?");
            if (confirmation === true) {
                setInput("");
                setMoney("");
                setTotal(0);
                setArray([]);
                setSearch("")
                toast.success("BUDDY: Hello there my beautiful friend! All you're RECORDS HAVE BEEN DELETED!👍", { autoClose: 3000 });
            }
            if (confirmation === false) {
                setTotal(total);
                setArray(array);
            }

        }
    }

    const handleDheeram = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅😄");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + dheeram, currency: dheeram }]);
            setSymbol(dheeram);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyOfDheeram = sumOfMoneyAndTotal + dheeram;
            setTotal(currencyOfDheeram);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍", { autoClose: 6000 });
        }
    }

    const handleDollar = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + dollar, currency: dollar }]);
            setSymbol(dollar);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyofDollar = sumOfMoneyAndTotal + dollar;
            setTotal(currencyofDollar);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍", { autoClose: 6000 });
        }
    }

    const handleEuro = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + euro, currency: euro }]);
            setSymbol(euro);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyofEuro = sumOfMoneyAndTotal + euro;
            setTotal(currencyofEuro);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍", { autoClose: 6000 });
        }
    }

    const handlePound = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + pound, currency: pound }]);
            setSymbol(pound);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyofPound = sumOfMoneyAndTotal + pound;
            setTotal(currencyofPound);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍", { autoClose: 6000 });
        }
    }

    const handleYen = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + yen, currency: yen }]);
            setSymbol(yen);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyofYen = sumOfMoneyAndTotal + yen;
            setTotal(currencyofYen);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍", { autoClose: 6000 });
        }
    }

    const handleCanadian = () => {
        if (input === "" || money === "") {
            alert("Yo! You got to FILL THE FIELDS😅");
        }
        else {
            setArray([...array, { id: uuidv4(), name: input, amount: money + canadian, currency: canadian }]);
            setSymbol(canadian);
            var sumOfMoneyAndTotal = moneyToInt + totalToInt;
            var currencyofCanadian = sumOfMoneyAndTotal + canadian;
            setTotal(currencyofCanadian);
            setInput("");
            setMoney("");
            toast.success("BUDDY: Hello there my beautiful friend! An item has been ADDED to your RECORD😁👍", { autoClose: 6000 });
        }
    }

    const handleTitle = () => {
        setBtn(text);
        setText("");
        toast.success("BUDDY: Enjoy your trip my friend! Have a wonderful time✌️😁🥳!!")
    }

    useEffect(() => {
        if (localStorage.getItem("list")) {
            setArray(JSON.parse(localStorage.getItem("list")));
            setTotal(JSON.parse(localStorage.getItem("total")));
            setBtn(JSON.parse(localStorage.getItem("data")));
            setFinalArray(JSON.parse(localStorage.getItem("delete")));
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("list", JSON.stringify(array));
        window.localStorage.setItem("total", JSON.stringify(total));
    }, [array], [total])

    // useEffect(() => {
    //     window.localStorage.setItem("total", JSON.stringify(total));
    // }, [total])

    useEffect(() => {
        window.localStorage.setItem("delete", JSON.stringify(finalArray));
    }, [finalArray])

    useEffect(() => {
        window.localStorage.setItem("data", JSON.stringify(btn));
    }, [btn])

    // useEffect(() => {
    //     window.localStorage.setItem("delete", JSON.stringify(finalArray));
    // }, [finalArray])

    // While using useEffect Hook, the localStorage.setItem() part can be coded in individual useEffect hooks 
    // if required becuase sometimes the states that are mentioned in dependencies of useEffect might get clashed 
    // with each other and might not get the data accordingly from the localStorage when the page will be reloaded 
    // or re-opened when closed. But, when coding the localStorage.getItem() part, all of the getItem() code should 
    // be written in only single useEffect Hook. Because the ultimate goal is, redering back all the data of all 
    // states at once from localStorage when reloaded or re-opened when had been closed for long time. 

    useEffect(() => {
        setFiltered(
            array.filter(item => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, array])

    // The below code takes effect when the state of serch is not changed that is when not used.

    // useEffect(() => {
    //     setFiltered(
    //         array
    //     )
    // }, [array])


    return (
        <div style={{ textAlign: "center", marginTop: "30px", backgroundColor: "whitesmoke" }} >
            <Navigate isTrashShowing={isTrashShowing} setIsTrashShowing={setIsTrashShowing} />
            {!isTrashShowing ? (<Fragment><h1 className="heading-1"><i>Budget Record</i></h1>
                <h1 className="title" >{btn}</h1><br /><br />
                <input className="search1" value={text} onChange={(e) => setText(e.target.value)} placeholder="Change your Title here... Eg: Trip to Miami" /><br />
                <button className="add_button" onClick={(e) => handleTitle(e)} ><span style={{ color: 'white' }} >Name Your Title</span></button><br />
                <input className="input_name" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Event Name..." />
                <input className="input_amount" value={money} onChange={handleMoney} placeholder="Enter Amount..." />
                <br />
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handleAdd(e)} >₹</button>
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handleDheeram(e)} >د.إ</button>
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handleDollar(e)} >$</button>
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handleEuro(e)} >€</button>
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handlePound(e)} >£</button>
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handleYen(e)} >¥</button>
                <button className="add_button" style={{ color: "white" }} onClick={(e) => handleCanadian(e)} >C$</button>
                <br /> <br />
                <br /> <br />
                <input className="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search for your event here..." />
                <br /> <br />
                <h3 className="heading-2">YOUR TOTAL IS ( <span style={{ color: 'black', fontStyle: "italic" }} >{total}</span> )</h3>
                <h3 className="heading-2"><span style={{ color: "#525252", fontSize: "22px" }}>Any further calculations? We've got you covered!</span> <a style={{ color: "dodgerblue" }} target="_blank" href="https://startcalculating.netlify.app">Visit this page...</a></h3>
                <button className="clear_all_button" onClick={(e) => handleClear(e)} ><MdClearAll className="clear" size="23px" /></button>
                {filtered.map((items, id) => (
                    <div key={id} className="all_items" >
                        <p className="items"><b><span className="items_name" >EVENT: {items.name}</span><span className="items_amount" >AMOUNT ( {items.amount} )</span></b>
                            {array.length > 0 ? (
                                <div className="buttons" >
                                    <button className="edit_button" onClick={() => handleEdit(items)} ><FiEdit3 className="edit" size="20px" /></button>
                                    <button className="delete_button" onClick={() => handleDelete(items)}><IoMdTrash className="delete" size="20px" /></button>
                                </div>
                            ) : (null)}
                        </p>
                    </div>
                ))}</Fragment>) : (<Trash finalArray={finalArray} setFinalArray={setFinalArray} symbol={symbol} />)}

        </div>
    )
}

export default BudgetRecord;