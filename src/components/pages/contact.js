import React from "react";
import emailGif from "../../gif/at.gif";
import avatarGif from "../../gif/nod.gif"
import writeGif from "../../gif/write.gif"

const contact = () => {
    return (
        <>
            <div class="card">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Inquirer" value="JohnDoe" />
                        <span class="icon is-small is-left">
                            <img src={avatarGif} alt="icon"></img>

                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                        <input class="input" type="email" placeholder="Email input" value="placeholder@gmail.com" />
                        <span class="icon is-small is-left">
                            <img src={emailGif} alt="icon"></img>
                        </span>
                        {/* <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span> */}
                    </div>
                    {/* <p class="help is-danger is-invisible">This email is invalid</p> */}
                </div>

                <div class="field">
                    <label class="label">Message</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Text area"></input>
                        <span class="icon is-small is-left">
                            <img src={writeGif} alt="icon"></img>
                        </span>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default contact