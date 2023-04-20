import React from "react";
import emailGif from "../../assets/gif/at.gif";
import avatarGif from "../../assets/gif/nod.gif"
import writeGif from "../../assets/gif/write.gif"
//importing and using react hook form for easy form validation
import { useForm } from "react-hook-form";


const Contact = () => {
    //destructuring and getting methods from useForm
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    //destructuring data from submitting, and activate mailto: sine this is front end only for now
    const onSubmit = data => {
        const { user, email, message } = data;
        document.location.href = `mailto:07.scuffs_peaks@icloud.com?subject=${user}&body=${message}
                                                                                                from:${user} (${email})`;
    };


    return (
        <>
            <div className="card mx-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control has-icons-left">
                            <input className="input" defaultValue="" {...register("user", { required: true })} type="text" placeholder="Inquirer" />
                            {/* errors will return when field validation fails  */}
                            {errors.user && <span className="has-text-danger">This field is required</span>}
                            <span className="icon is-small is-left">
                                <img src={avatarGif} alt="icon"></img>

                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                            <input className="input" defaultValue="" {...register("email", { pattern: { value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, message: `not a valid email` }, required: true })} type="text" placeholder="sample@gmail.com" />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span className="has-text-danger">Valid email is required</span>}

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
                            <input className="input" defaultValue="" {...register("message", { required: true })} type="text" placeholder="Message Content" />
                            {/* errors will return when field validation fails  */}
                            {errors.message && <span className="has-text-danger">This field is required</span>}

                            <span className="icon is-small is-left">
                                <img src={writeGif} alt="icon"></img>
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light"
                                type="clear"
                                onClick={() =>
                                    reset({
                                        user: '',
                                        email: '',
                                        message: '',
                                    })
                                }
                            >Cancel</button>
                        </div>
                    </div>
                    <br />
                </form>
            </div>
        </>
    );
};

export default Contact