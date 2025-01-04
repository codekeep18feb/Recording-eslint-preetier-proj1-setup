import React, { useRef } from "react";

const SignupUnControlled = () => {
    const formRefs = useRef({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", formRefs.current.username.value);
        console.log("Email:", formRefs.current.email.value);
        
    };

    return (
        <div>
            <h2>SignupUnControlled Here</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" 
                    // ref={formRefs} 
                    ref={(el) => (formRefs.current.username = el)}

                    type="string" />


                <label htmlFor="email">Email</label>
                <input id="email" 

ref={(el) => (formRefs.current.email = el)}
type="string" />



                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupUnControlled;
