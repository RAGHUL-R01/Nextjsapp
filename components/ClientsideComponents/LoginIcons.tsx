'use client'
import React from 'react'
import { FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';
import './ClientComponents.scss';

export default function LoginIcons() {
    return (
        <div className='flx lg_icons_90'>
            <div><FacebookOutlined /></div>
            <div><GooglePlusOutlined /></div>
            <div><LinkedinOutlined /></div>
        </div>
    )
}
