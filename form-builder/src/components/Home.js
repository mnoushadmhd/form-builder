import React from 'react'
import FormBuilder from './FormBuilder'
import PublishModal from './PublishModal'
let bool = true
function Home() {
    return (
        <>
            {
                bool ? <FormBuilder /> : <PublishModal />
            }
        </>
    )
}

export default Home