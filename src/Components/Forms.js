import React, {Component} from 'react';

const Forms = () => {

    return(
        <div className="footer">
            <div className="subscribe">
                <div className="sub-form">
                    <h1>Subscribe for Updates!</h1>
                    <label for="email">Email:</label>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </div>
            </div>
            <div className="guestbook">
                <h1>Leave a Comment In Our Guest Book!</h1>
                <label for="email">Name:</label>
                <input type="text" />
                <label for="email">Location:</label>
                <input type="text" />
                <label for="email">Comment:</label>
                <input type="text" />
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Forms;