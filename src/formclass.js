import React, { useState, useRef, useEffect } from 'react';

function FormClass() {
    let [name, setName] = useState("");
    let [stuff, setStuff] = useState("");

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [agee, setagee] = useState("");


    let inputContainer = useRef("");

    let [users, setUsers] = useState([]);

    let [formUsers, setFormusers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // let user = { name, age };
        let users = JSON.parse(localStorage.getItem('newUsers'));
        users.forEach(element => {
            if (element.username == name) {
                alert('user valid')
            }
            else {
                alert('user invalid')
            }
        });
        // setName('');
        // setAge('');
        console.log(name);
        console.log(users);
        alert("hi")
    }

    const Submit = (e) => {
        e.preventDefault();
        let allnewUsers = { username, agee, email };
        let newUsers = [...formUsers, allnewUsers];
        localStorage.setItem('newUsers', JSON.stringify(newUsers));
        setFormusers((old) => {
            return [...old, allnewUsers]
        })
        setUsername('');
        setagee('');
        setEmail('');
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('newUsers'))
        setUsers(user)
    }, []);

    // const testRef = () => {
    //     alert(inputContainer.current.value);
    // }

    const handleChange = (e) => {
        let value = e.target.value;
        // console.log("kkk")
        setName(value);
        console.log(name)
    }

    const handleStuff = (e) => {
        let value = e.target.value;
        setStuff(value);
    }

    const handleUsername = (e) => {
        let value = e.target.value;
        setUsername(value);
    }

    const handleagee = (e) => {
        let value = e.target.value;
        setagee(value);
    }

    const handleEmail = (e) => {
        let value = e.target.value;
        setEmail(value);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6  card shadow mx-auto m-5">
                        <div className=" mt-4 text-center">
                            <form onSubmit={Submit} className="bg-white mb-5">
                                <h1 className="text-center bg-white">FORM CLASS</h1>
                                <input type="text" value={username} onChange={handleUsername} placeholder="Your Name" className="form-control" />
                                <br />
                                <input type="number" value={agee} onChange={handleagee} placeholder="Your Age" className="form-control" />
                                <br />
                                <input type="text" value={email} onChange={handleEmail} placeholder="Your Email" className="form-control" />
                                <br />
                                <input type="submit" className="btn btn-primary " />
                            </form>
                        </div>
                    </div>
                    <div className="col-6 card shadow mx-auto m-5">
                        <div className=" mt-4 text-center">
                            <form onSubmit={handleSubmit} className="bg-white mb-5">
                                <h1 className="text-center bg-white">ITEM FORM </h1>
                                <input type="text" value={name} onChange={handleChange} placeholder="Your name" className="form-control" />
                                <br />
                                <input type="number" value={stuff} onChange={handleStuff} placeholder="Your item" className="form-control" />
                                <br />
                                <input type="submit" className="btn btn-primary " />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        {/* <form>
                            <input className="form-control" ref={inputContainer} placeholder="text" />
                            <br />
                            <button className="btn btn-primary" onClick={testRef}>Text</button>
                        </form> */}
                        {/* <div>
                                {users.map((user, index) => {
                                    return (<p key={index} className="p-2 font-weight-bold">{user.name}-{user.age}</p>)
                                })}
                            </div> */}
                    </div>
                    <div className="col">
                        <div class="dropdown ">
                            <ul class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> {formUsers.map((allnewUsers, index) => {
                                return (<p key={index} className="p-2 font-weight-bold">{allnewUsers.username}-{allnewUsers.agee}</p>)
                            })}
                                <span class="caret"></span></ul>
                            <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormClass;