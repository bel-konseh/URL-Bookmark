

import React from 'react'
import "./UrlItem.css"

function UrlItem({id,url, title}) {

  const deleteUrl = async () =>{

    const result = await  fetch(`http://localhost:3000/api/urls/${id}`,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
        
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
    console.log(result);
    window.location.reload()

  }
  return (
    <div className="url-item">
        <div className="url-header">
            <div className="url-title">{title}</div>
        </div>

        <div className="url-actions">
            <button className="action-btn copy-btn" onClick={() => navigator.clipboard.writeText(url)}>
                 Copy URL
            </button>
            <button className='action-btn delete-btn' onClick={deleteUrl}>Delete</button>
            <a href={url} target="_blank" rel="noopener noreferrer" className="action-btn open-btn">
               Visit
            </a>
        </div>
    </div>
  )
}

export default UrlItem
