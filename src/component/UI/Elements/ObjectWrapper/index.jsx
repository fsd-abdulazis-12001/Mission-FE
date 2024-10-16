 import { Children } from "react"

const index = ({datas, render}) => {        
    if (datas.length === 0) {
        console.error('data empty')
        return null
    }
    if (typeof render !== 'function') {
        console.error('render must be a function')

        return null
    }
     return Children.toArray(datas.map((data, index) => render(data,index)))
}

export default index
