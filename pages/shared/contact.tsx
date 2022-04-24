import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const Contact: NextPage = () => {
    return (
        <div>
            <div className='top-decor'></div>
            <div className='white-bg pt-5 pb-3'>
                <div className='container'>
                    <h2 className='fw-bold mb-3'>Follow us</h2>
                    <div className='row mb-3'>
                        <div className='col-3'>
                            <h3 className=''><Image src="/images/instagram.svg" alt="icon" width={20} height={20}/>&nbsp;@tripseek</h3>
                        </div>
                        <div className='col-3'>
                            <h3 className=''><Image src="/images/messenger.svg" alt="icon" width={20} height={20}/>&nbsp;Tripseek</h3>
                        </div>
                        <div className='col-3'>
                            <h3 className=''><Image src="/images/linkedin.svg" alt="icon" width={20} height={20}/>&nbsp;@tripseek</h3>
                        </div>
                        <div className='col-3'>
                            <h3 className=''><Image src="/images/youtube.svg" alt="icon" width={20} height={20}/>&nbsp;Tripseek</h3>
                        </div>
                    </div>
                    <hr className='hr-thin'/>
                    <div className='row mt-5'>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline">
                                    <h5 className=' fs-085'><span className='animated-underline'>Browse events</span></h5>
                                </a>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline">
                                    <h5 className=' fs-085'><span className='animated-underline'>How it works</span></h5>
                                </a>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline">
                                    <h5 className=' fs-085'><span className='animated-underline'>Create account</span></h5>
                                </a>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline">
                                    <h5 className=' fs-085'><span className='animated-underline'>FAQ</span></h5>
                                </a>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline">
                                    <h5 className=''><span className='animated-underline'>GDPR</span></h5>
                                </a>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline">
                                    <h5 className=''><span className='animated-underline'>Terms of use</span></h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <h5 className='mt-3 text-center mb-0 fs-085'>Made with ♡ by Feature, not a bug</h5>
                </div>
            </div>
        </div>
    )
}

export default Contact