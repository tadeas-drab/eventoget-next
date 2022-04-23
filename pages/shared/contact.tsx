import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

const Contact: NextPage = () => {
    return (
        <div>
            <div className='top-decor'></div>
            <div className='white-bg pt-5 pb-3'>
                <div className='container'>
                    <h1 className='fw-bold fs-4 mb-5'>Follow us</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <h3 className='mb-3'><Image src="/images/instagram.svg" alt="icon" width={20} height={20}/>&nbsp;@tripseek</h3>
                            <h3 className='mb-3'><Image src="/images/messenger.svg" alt="icon" width={20} height={20}/>&nbsp;Tripseek</h3>
                            <h3 className='mb-3'><Image src="/images/linkedin.svg" alt="icon" width={20} height={20}/>&nbsp;@tripseek</h3>
                            <h3 className='mb-3'><Image src="/images/youtube.svg" alt="icon" width={20} height={20}/>&nbsp;Tripseek</h3>
                        </div>
                        <div className='col-3 vertical-border-line-thin'>
                            <h5 className='mt-3'><span className='animated-underline'>Browse events</span></h5>
                            <h5 className='mt-3'><span className='animated-underline'>How it works</span></h5>
                            <h5 className='mt-3'><span className='animated-underline'>Create account</span></h5>
                            <h5 className='mt-3'><span className='animated-underline'>Create group</span></h5>
                            <h5 className='mt-3'><span className='animated-underline'>FAQ</span></h5>
                        </div>
                        <div className='col-3 vertical-border-line-thin'>
                            <h5 className='mt-3'><span className='animated-underline'>GDPR</span></h5>
                            <h5 className='mt-3'><span className='animated-underline'>Terms of use</span></h5>
                        </div>
                    </div>
                    <h5 className='mt-5 text-center mb-0'>Made with ♡ by Feature, not a bug</h5>
                </div>
            </div>
        </div>
    )
}

export default Contact