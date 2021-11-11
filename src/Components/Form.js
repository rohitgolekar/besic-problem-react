import React, { useState, useEffect } from 'react'

function Form() {
    const [data, setData] = useState([]);
    console.log(data);
    const [state, setstate] = useState({
        username: '',
        email: '',
        phone: '',
        favourite: '',
        comment: '',
    });

    const handleShange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        var oldItems = JSON.parse(localStorage.getItem('FormData')) || [];

        var newItem = {
            'username': state.username,
            'email': state.email,
            'phone': state.phone,
            'favourite': state.favourite,
            'comment': state.comment,
        };

        oldItems.push(newItem);
        localStorage.setItem('FormData', JSON.stringify(oldItems));
        setstate({ username: "", email: "", phone: "", comment: "", favourite: "" });
    }

    useEffect(() => {

        const data = localStorage.getItem('FormData')

        if (data) {
            setData(JSON.parse(data))
        }
        console.log("dasdsds", data);
    }, [state])

    return (
        <>
            <form>
                <div className="form-group text-left my-2">
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" name="username" onChange={handleShange} className="form-control my-2" placeholder="Enter Username" />
                </div>

                <div className="form-group text-left my-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleShange} className="form-control my-2" placeholder="Enter Email" />
                </div>

                <div className="form-group text-left my-2">
                    <label htmlFor="phone">Enter a phone number</label>
                    <input type="tel" onChange={handleShange} className="form-control my-2" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>

                <div className="form-group text-left my-2">
                    <label htmlFor="favourite">Select favourite</label>
                    <select className="form-select" id="favourite" onChange={handleShange} name="favourite">
                        <option defaultValue="">Open this select Favourite</option>
                        <option value="javascript">Javascript</option>
                        <option value="react">React</option>
                        <option value="redux">Redux</option>
                    </select>
                </div>
                <div className="form-group text-left my-2">
                    <label htmlFor="comment">Comments</label>
                    <textarea onChange={handleShange} className="form-control my-2" placeholder="Leave a comment here" id="comment" name="comment"></textarea>
                </div>

                <div className="form-group text-center my-2">
                    <button onClick={submitForm} className="btn btn-success">Submit</button>
                </div>
            </form>




            <ul className="list-group">
                {
                    data.map((item, id) => (
                        <li key={id} className="list-group-item text-left my-2">UserName : {item.username}, Email : {item.email}, Favourite : {item.favourite}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Form
