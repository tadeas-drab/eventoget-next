import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const ContactComponent: NextPage = () => {
    return (
        <div>
            <div className='top-decor'></div>
            <div className='white-bg pt-3 pb-2'>
                <div className='container'>
                    <h2 className='fw-bold mb-3'>Follow us</h2>
                    <div className='row mb-3'>
                        <div className='col-3'>
                            <h3 className='animated-underline'><Image src="/images/instagram.svg" alt="icon" width={20} height={20} />&nbsp;@tripseek</h3>
                        </div>
                        <div className='col-3'>
                            <h3 className='animated-underline'><Image src="/images/messenger.svg" alt="icon" width={20} height={20} />&nbsp;Tripseek</h3>
                        </div>
                        <div className='col-3'>
                            <h3 className='animated-underline'><Image src="/images/linkedin.svg" alt="icon" width={20} height={20} />&nbsp;@tripseek</h3>
                        </div>
                        <div className='col-3'>
                            <h3 className='animated-underline'><Image src="/images/youtube.svg" alt="icon" width={20} height={20} />&nbsp;Tripseek</h3>
                        </div>
                    </div>
                    <h5 className='mt-3 text-center mb-0 fs-085'>Made with ♡ by Feature, not a bug</h5>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent