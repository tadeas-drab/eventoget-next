import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const Navigation: NextPage = () => {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <div className="w-100">
                <div className="w-100 position-fixed top-0 z-999">
                    <div className="row mt-2">
                        <div className="col-1"></div>
                        <div className="col-2">
                            <Link href="/">
                                <a className="nav-link animated-underline"><h3>Tripseek</h3></a>
                            </Link>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-7 d-none d-md-block">
                            <Link href="">
                                <a className="nav-link float-end animated-underline">Sign up</a>
                            </Link>
                            <Link href="">
                                <a className="nav-link float-end animated-underline">Log in</a>
                            </Link>
                            <Link href="/#HowItWorks">
                                <a className="nav-link float-end animated-underline">How it works</a>
                            </Link>
                            <Link href="/events">
                                <a className="nav-link float-end animated-underline">Browse events</a>
                            </Link>
                        </div>
                        <div className="col-4 d-block d-md-none"></div>
                        <div className="col-2 d-block d-md-none">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle dropdown-after-none" type="button" id="navMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    M
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navMenu">
                                    <li>
                                        <Link href="/about">
                                            <a className="dropdown-item float-end" href="#">Browse events</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="dropdown-item float-end" href="#">How it works</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="dropdown-item float-end" href="#">Log in</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="dropdown-item float-end" href="#">Sign up</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation