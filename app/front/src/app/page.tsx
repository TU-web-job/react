'use client';
import {useEffect, useState} from 'react';
import { getHelloMessage } from '../lib/api';

export default function Home() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        getHelloMessage().then((data) => {
            setMessage(data.message);
        });
    }, []);
    return <div>{message ? message : 'Loading...'}</div>;
}