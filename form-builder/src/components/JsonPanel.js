import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/jsonPanel.module.css'
function JsonPanel() {
    const data = useSelector(state => state.allItems);
    const { intialState: { allItems, formDetails } } = data
    const [jsonData, setJsonData] = useState("")
    useEffect(() => {
        if (data.allItems) {
            updateJson();
        }
    }, [data.formDetails]);
    const updateJson = () => {
        const jsonData = JSON.stringify(allItems);
        const jString = `${jsonData}`
        setJsonData(jString)
    }
    return (
        <>
            <h3 className={styles.sectionHead}>Json Panel</h3>
            <p style={{ wordBreak: "break-all" }}>
                {
                    jsonData
                }
            </p>
        </>
    )
}

export default JsonPanel