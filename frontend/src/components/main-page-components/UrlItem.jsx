
import React from 'react'
import "./UrlItem.css"
function UrlItem({url, title}) {
  return (
    // <div>
    //   <div>
        <tr>
            <td>{title}</td>
            <td><img src={url} alt=" " /><span onClick={()=>(navigator.clipboard.writeText(url))}>Copy</span></td>
            <td><a href={url} target='_blank'>Go to</a></td>
        </tr>
    //   </div>
    // </div>
  )
}

export default UrlItem
