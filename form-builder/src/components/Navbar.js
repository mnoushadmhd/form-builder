import React, { useEffect, useState } from 'react'
import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { switchPage } from '../redux/actions/BuilderActions'
import { useDispatch, useSelector } from 'react-redux'
import { matchRoutes, useLocation } from "react-router-dom"
function Navbar() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.allItems);
    const { intialState: { switchs } } = data
    const [bool, setBool] = useState(true)
    const [page, setPage] = useState("home")

    const location = useLocation();

    useEffect(() => {
        checkPage();
    })
    const checkPage = () => {
        if (location.pathname === '/') {
            setBool(true)
        }
        else if (location.pathname === '/publish') {
            setBool(false)
        }
    }

    const switchClick = () => {
        setBool(!bool)
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src={logo} />
                    </div>
                    <div className={styles.publish}>
                        {bool ? <Link to="/publish" onClick={switchClick} className={data.allItems ? styles.button : styles.inactiveButton}>Publish</Link> : <Link to="/" onClick={switchClick} className={styles.returnButton}>Return</Link>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar