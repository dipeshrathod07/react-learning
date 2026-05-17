import { useState } from 'react'

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div >
            <h2>
                Toggle Message
            </h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible?'Hide Message' : 'Show Message'}
            </button>
            {isVisible && <p>Hello, this message is controlled by state.</p>}
        </div>
    )
}

export default ToggleMessage