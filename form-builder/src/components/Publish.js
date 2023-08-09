import React, { useEffect, useState } from 'react'
import WorkSpace from './WorkSpace'
import styles from '../styles/publish.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { dragItem, addItem, dropItem, setFormDetails } from '../redux/actions/BuilderActions'
function Publish() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.allItems);
    const { intialState: { allItems, formDetails } } = data
    // let content = []
    const [content, setContent] = useState([])
    useEffect(() => {
        creatContent(data)
    }, [])



    let index = 0;
    const creatContent = (data) => {

        let newItems = [...allItems]
        newItems.map((res, i) => {
            if (res.name === 'button') {
                index = i
            }

        })

        let button = newItems.filter((res, i) => res.name === 'button')
        if (index > 0 && button) {

            newItems.splice(index, 1);
        }
        newItems.push(...button)
        dispatch(addItem(newItems))

        let content = newItems.map((res, i) => {

            const { name, cname, id } = res
            let key = cname
            if (res.name === "inputBox") {

                return (
                    <div key={id}>
                        <input type="text" className={styles.inputText} name={cname} value={res[key]} onChange={(event) => changeHandler(event, i, name)} />
                    </div>
                )
            }
            if (res.name === "selectBox") {

                return (
                    <div key={id}>
                        <select className={styles.inputSelect} name={cname} value={res[key]} onChange={(event) => changeHandler(event, i, name)}>
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
                        <input type="checkbox" name={cname} value={res[key]} onChange={(event) => changeHandler(event, i, name)} />&nbsp;<span>checkBox</span>
                    </div>
                )
            }
            if (res.name === "radioButton") {

                return (
                    <div className={styles.radioContainer} key={id}>
                        <div className={styles.radioBox}>
                            <div>
                                <input type="radio" name={cname} value="Yes" onChange={(event) => changeHandler(event, i, name)} />
                            </div>
                            <div>
                                <p>Yes</p>
                            </div>
                        </div>
                        <div className={styles.radioBox}>
                            <div>
                                <input type="radio" name={cname} value="No" onChange={(event) => changeHandler(event, i, name)} />
                            </div>
                            <div>
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                )
            }
            if (res.name === "button") {

                return (
                    <div className={styles.inputCheck} key={id}>
                        <button className={styles.formButton} type='submit' onClick={submitForm}>Submit</button>
                    </div>
                )
            }
        })

        setContent(content)
        console.log("content", content)
    }

    const changeHandler = (e, i, name) => {
        const items = allItems
        if (name === "checkBox") {
            if (items[i][e.target.name]) {
                items[i][e.target.name] = false
            }
            else items[i][e.target.name] = true
        }
        else {
            items[i][e.target.name] = e.target.value
        }
        dispatch(addItem(items))
        console.log(JSON.stringify(items))
    }
    const submitForm = (e) => {
        e.preventDefault()
    }
    // newItems = allItems
    // newItems.map((res, i) => {
    //     if (res.name === 'button') {
    //         index = i
    //     }

    // })
    // let button = newItems.filter((res, i) => res.name === 'button')
    // newItems.splice(index, 1);
    // newItems.push(...button)



    return (
        <>
            <div className={styles.container}>
                <form className={styles.myform} autoComplete="off">
                    <h3 className={styles.formHeading}>Form Heading</h3>
                    {content}
                </form>
            </div>
        </>
    )
}

export default Publish