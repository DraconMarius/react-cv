import React from "react";
import emailGif from "../../gif/at.gif";
import avatarGif from "../../gif/nod.gif"
import writeGif from "../../gif/write.gif"



const Contact = () => {
    return (
        <>
            <div className="card">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="Inquirer" value="JohnDoe" />
                        <span className="icon is-small is-left">
                            <img src={avatarGif} alt="icon"></img>

                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email input" value="placeholder@gmail.com" />
                        <span className="icon is-small is-left">
                            <img src={emailGif} alt="icon"></img>
                        </span>
                        {/* <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span> */}
                    </div>
                    {/* <p className="help is-danger is-invisible">This email is invalid</p> */}
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="Text area"></input>
                        <span className="icon is-small is-left">
                            <img src={writeGif} alt="icon"></img>
                        </span>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact