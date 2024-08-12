import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [formData, setFormData] = useState({ email: "", password: ""});

    const navigate = useNavigate();

    function changeHandler(e){

        setFormData({...formData, [e.target.name]: e.target.value });

    }

    async function sumbitHandler(e){

        try{

            e.preventDefault();

            console.log("formdata is :",formData);

            const reponse = await axios.post("http://localhost:4000/api/login",{

                email:formData.email,
                password:formData.password,

            })

            console.log("resposne is ",reponse.data);

            navigate("/");


        }catch(erorr){

            console.log(erorr);

        }
    }

    return (
        <div>

            <form onSubmit={sumbitHandler} className='flex flex-col'>

                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                />

                <input
                    type="password"
                    placeholder="Enter your password "
                    value={formData.password}
                    name='password'
                    onChange={changeHandler}
                />

                <button type='submit'> Click me </button>

            </form>
        </div>
    )
}

export default Signup