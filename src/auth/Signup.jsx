import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {

    const [formData, setFormData] = useState({ userName: "", email: "", password: "", role });

    function changeHandler(e){

        setFormData({...formData, [e.target.name]: e.target.value });

    }

    async function sumbitHandler(e){

        try{

            e.preventDefault();

            console.log("formdata is :",formData);

            const reponse = await axios.post("")

        }catch(erorr){

            console.log(erorr);

        }
    }

    return (
        <div>

            <form onSubmit={sumbitHandler}>

                <input
                    type="text"
                    placeholder="Username"
                    value={formData.userName}
                    name='userName'
                    onChange={}
                />

                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    name='email'
                />

                <input
                    type="password"
                    placeholder="Enter your password "
                    value={formData.password}
                    name='password'
                />
            </form>
        </div>
    )
}

export default Signup