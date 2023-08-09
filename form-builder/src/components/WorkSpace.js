import React, { createElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/workSpace.module.css'
import { items } from './LeftPanel'
import { dragItem, addItem, dropItem, setFormDetails, switchPage } from '../redux/actions/BuilderActions'

function WorkSpace() {

    const [index, setIndex] = useState({ input: 1, select: 1, check: 1, radio: 1, button: 1, all: 1 })
    const [alls, setAll] = useState(1)
    const data = useSelector(state => state.allItems);

    const { intialState: { allItems, formDetails } } = data

    const dispatch = useDispatch()

    const dragHandler = (e) => {
        e.preventDefault();

    }


    const dropHandler = (e) => {
        items.map((res) => {
            if (res.name === data.dragItem) {

                if (res.name === "inputBox") {
                    const items = allItems
                    let keyName = `text${index.input}`
                    let newObj = { name: res.name, cname: keyName, id: alls, [keyName]: "" }
                    items.push(newObj)
                    dispatch(addItem(items))
                    setIndex({ ...index, input: index.input + 1 })
                }
                if (res.name === "selectBox") {
                    const items = allItems
                    let keyName = `select${index.select}`
                    let newObj = { name: res.name, cname: keyName, id: alls, [keyName]: "" }
                    items.push(newObj)
                    dispatch(addItem(items))
                    setIndex({ ...index, select: index.select + 1 })
                }
                if (res.name === "checkBox") {
                    const items = allItems
                    let keyName = `checkBox${index.select}`
                    let newObj = { name: res.name, cname: keyName, id: alls, [keyName]: false }
                    items.push(newObj)
                    dispatch(addItem(items))
                    setIndex({ ...index, check: index.check + 1 })
                }
                if (res.name === "radioButton") {
                    const items = allItems
                    let keyName = `radioButton${index.select}`
                    let newObj = { name: res.name, cname: keyName, id: alls, [keyName]: "" }
                    items.push(newObj)
                    dispatch(addItem(items))
                    setIndex({ ...index, radio: index.radio + 1 })
                }
                if (res.name === "button") {
                    const items = allItems
                    let exists = items.filter((res, i) => res.name === 'button')
                    if (exists.length) {
                        alert("you can add only one submit button")
                    }
                    else {
                        let keyName = `radioButton${index.select}`
                        let newObj = { name: res.name, cname: keyName, id: alls, [keyName]: "" }
                        items.push(newObj)
                        dispatch(addItem(items))
                        setIndex({ ...index, radio: index.radio + 1 })
                    }
                }
                if (data.formDetails) {

                    let itemNo = data.formDetails + 1
                    dispatch(setFormDetails(itemNo))
                }
                else {

                    let itemNo = formDetails + 1
                    dispatch(setFormDetails(itemNo))
                }

                setAll(alls + 1)

                dispatch(dropItem(res.name))
                dispatch(dragItem(""))


            }
        })
    }

    const content = allItems.map((res, i) => {
        const { name, cname, id } = res
        let key = cname
        if (res.name === "inputBox") {

            return (
                <div key={id}>
                    <input type="text" name={cname} />
                </div>
            )
        }
        if (res.name === "selectBox") {

            return (
                <div key={id}>
                    <select name={cname} >
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                    </select>
                </div>
            )
        }
        if (res.name === "checkBox") {

            return (
                <div key={id}>
                    <input type="checkbox" name={cname} />&nbsp;<span>checkBox</span>
                </div>
            )
        }
        if (res.name === "radioButton") {

            return (
                <div key={id}>
                    <input type="radio" name={cname} value="Yes" />&nbsp;<span>Yes</span>&nbsp;&nbsp;<input type="radio" name={cname} value="No" />&nbsp;<span>No</span>
                </div>
            )
        }
        if (res.name === "button") {

            return (
                <div key={id}>
                    <button type='submit'>Submit</button>
                </div>
            )
        }
    })



    const { input, select, check, radio, button, all } = index
    return (
        <>
            <h3 className={styles.sectionHead}>Work Space</h3>
            <div className={styles.workSpace} onDragOver={(e) => dragHandler(e)} onDrop={(e) => dropHandler(e)} >
                {
                    content
                }
            </div>
        </>
    )
}

export default WorkSpace

