import React from 'react';
import Button from '../components/ui/Button';

export default function New() {
    return (
        <div>
            <p>new diary</p>
            <textarea name="" id=""
                className='w-full border-2'></textarea>
            <Button text="post" />
        </div>
    );
}

