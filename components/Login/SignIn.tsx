"use client"
// import React,useState from 'react'
import { useState } from 'react';
import './SignIn.scss';
import { Signbtn } from '../Buttons/Signbtn';
import LoginIcons from '../ClientsideComponents/LoginIcons';//icons renders on client side only
import InputItem from '../Input/InputItem';

export default function SignIn() {
    // let name = "HJU"
    const[name,setName]=useState("HYU")
    const func = () => {
        alert("triggered")
        // name="DONENEN"
        setName("triggered")
    }
    return (
        <div className='main-container flx jc-ai-center'>
            <div className='container'>
                {/* Create Account */}
                <div className='flx hw'>
                    <div className='flx flx_row CA1 jc-ai-center'>
                        <div className='fontHdr1'>Welcome Back!</div>
                        <div style={{ width: "70%", textAlign: "center", padding: "1em 0" }}>To keep connected with us please login with your personal info</div>
                        <div style={{ padding: "1em 0" }}>
                            <Signbtn onclick={func}>SIGN IN</Signbtn>
                        </div>
                    </div>
                    <div className='flx flx_row CA2 jc-ai-center'>
                        <div className='fontHdr1' style={{ color: "rgb(25, 125, 82)" }}>Create Account</div>
                        <div><LoginIcons /></div>
                        <div>or use your email for registration</div>
                        <form className=''>
                            <div><InputItem placeholder={name} /></div>
                            <div><InputItem placeholder={name} /></div>
                            <div><InputItem placeholder={name} /></div>
                        </form>
                        <div>
                            <button>SIGN UP</button>
                        </div>
                    </div>
                </div>
                {/* SIgnIn */}
                <div style={{ display: "none" }}>
                    <div>ofdk</div>
                    <div>ofdk</div>
                </div>
            </div>
        </div>
    )
}
