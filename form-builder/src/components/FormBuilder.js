import React from 'react'
import styles from '../styles/builderHome.module.css'
import JsonPanel from './JsonPanel'
import LeftPanel from './LeftPanel'
import WorkSpace from './WorkSpace'

function FormBuilder() {

    return (
        <div className={styles.container}>

            <div className={styles.contentWrapper}>
                <div className={styles.leftPanel}>
                    <LeftPanel />
                </div>
                <div className={styles.workSpace} >
                    <WorkSpace />
                </div>
                <div className={styles.jsonPanel}>
                    <JsonPanel />
                </div>
            </div>
        </div>
    )
}

export default FormBuilder