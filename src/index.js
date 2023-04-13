import ReactDOM from 'react-dom/client';
import {useState} from 'react'
import './style.scss'

const MyComponent = () => {
    const [items,setItems] = useState([])
    return <>
        <ul>{items.map(it => <li className="test">{it}</li>)}</ul>
        <button onClick={() => setItems([...items, Date.now()])}>Add</button>
    </>
}

customElements.define('my-component',class extends HTMLElement{
    connectedCallback(){
        const root = ReactDOM.createRoot(this)
        root.render(<MyComponent/>)
    }
});


