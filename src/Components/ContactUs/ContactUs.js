import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <section id="contact-container">
        <div className="contact-box">
    <h1 class="h-primary center">Contact Us</h1>
    <div class="form-group">
        <form action="">
            <div class="form">
                    <label for="Name">Name:</label>
                    <input type="text" id="Name" placeholder="Enter Your Name"/>
                </div>
            <div class="form">
                    <label for="Name">Email:</label>
                    <input type="email" id="Name" placeholder="Enter Your Email"/>
                </div>
            <div class="form">
                    <label for="Name">Phone:</label>
                    <input type="text" id="Name" placeholder="Enter Your Phone Number"/>
                </div>
            <div class="form">
                    <label for="Name">Message:</label>
                    <textarea name="Message" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="Submit-btn-outer">

                    <button class="Submit-btn" onclick="SubmitClick()">Submit</button>
                </div>
        </form>
      </div>
    </div>
</section>
  )
}

export default ContactUs