import { NextPage } from "next";
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

interface Props {
    imageUrl: string
    artist: string
    venue: string
    date: string
}

const Event: NextPage<Props> = ({imageUrl, artist, venue, date}) => {
    return (
        <div className='col-3'>
            <div className='card'>
                <Image src={imageUrl} alt="photo" width={306} height={175} className='card-img'/>
                <div className='card-text'>
                    <h2 className='fw-bold'>{artist}</h2>
                    <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;{venue}</h4>
                    <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;{date}</h4>
                    <div className='text-center'>
                        <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event