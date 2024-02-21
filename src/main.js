import { render } from 'react-dom'
import App from './App/index.js'
import { createRoot } from 'react-dom/client'

const node = document.querySelector('#root')
const root = createRoot(node)

root.render(<App />)
