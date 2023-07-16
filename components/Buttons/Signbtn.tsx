'use client'
import './_button.scss';

export function Signbtn({ children, onclick }: any) {
    return (
        <button className="btn" onClick={onclick}>{children}</button>
    )
}
