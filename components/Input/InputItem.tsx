import React from 'react';
import './Input_itm.scss';

export default function InputItem({ value, onchange, placeholder }: any) {
    return (
        <div>
            <input value={value} onChange={onchange} placeholder={placeholder} />
        </div>
    )
}
