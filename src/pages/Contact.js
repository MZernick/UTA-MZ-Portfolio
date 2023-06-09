import React from "react";

function Contact() {
    return (
        <div className="background-form">
            <div id="form-div">
                <h3 className="contactFont">Contact Me</h3>
                <form class="form" id="form1">
                    <p class="name">
                        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                    </p>
                    <p class="email">
                        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                    </p>
                    <p class="text">
                        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
                    </p>
                    <div class="submit">
                        <input type="submit" value="SEND" id="button-pink" />
                        <div class="ease"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;