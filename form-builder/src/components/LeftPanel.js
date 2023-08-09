import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/leftPanel.module.css'
import { dragItem } from '../redux/actions/BuilderActions'

export const items = [{ id: 1, name: "inputBox", content: "Input Box" }, { id: 2, name: "selectBox", content: "Select Box" },
{ id: 3, name: "checkBox", content: "Checkbox" }, { id: 4, name: "radioButton", content: "Radio Button" },
{ id: 5, name: "button", content: "Button" }]

function LeftPanel() {
    let dItem = ""
    const dispatch = useDispatch()
    const data = useSelector(state => state.allItems)

    const dstartHandler = (e, id) => {
        dItem = id
        dispatch(dragItem(dItem))

    }

    return (
        <>
            <section className={styles.wrapper}>
                <h3 className={styles.sectionHead}>LEFT PANEL</h3>
                <div className={styles.itemsContainer}>
                    {
                        items.map((res) => {
                            return (
                                <div key={res.id} onDragStart={(e) => dstartHandler(e, res.name)} draggable>{res.content}</div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default LeftPanel