import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const Navigation: NextPage = () => {
    return (
        <div className="w-100">
            <div className="w-100 position-fixed top-0 z-999">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-3">
                            <a className="nav-link"><h3>Tripseek</h3></a>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-8 d-none d-md-block">
                            <a className="nav-link float-end">Sign up</a>
                            <a className="nav-link float-end">Log in</a>
                            <a className="nav-link float-end" href="/#HowItWorks" >How it works</a>
                            <a className="nav-link float-end">Browse events</a>
                        </div>
                        <div className="col-6 d-block d-md-none"></div>
                        <div className="col-2 d-block d-md-none">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="navMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navMenu">
                                    <li><a className="dropdown-item" href="#">Browse events</a></li>
                                    <li><a className="dropdown-item" href="#">How it works</a></li>
                                    <li><a className="dropdown-item" href="#">Log in</a></li>
                                    <li><a className="dropdown-item" href="#">Sign up</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navigation