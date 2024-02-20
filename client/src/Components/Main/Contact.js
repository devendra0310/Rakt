import React from 'react'


const Contact = () => {
    
    return (
        <form className='contus'>
    <h1 className='text-[40px]'>Contact <span>Here</span></h1>
    <input type='text' name='name' id='' placeholder='Enter Name'/>
    <input type='email' name='email' id='' placeholder='Enter Email'/>
    <input type='phone' name='phone' id='' placeholder='+91 ' />
    <textarea name="Message" id="" cols="30" rows="10" placeholder='Enter Text Here'></textarea>
    <button type='submit'>Send</button>
    </form>
    )
}

export default Contact