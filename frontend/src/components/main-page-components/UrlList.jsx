

import React from 'react'
import "./UrlList.css"
import UrlItem from './UrlItem'

function UrlList({urlList}) {
    
  return (
    <div className="url-list">
        {urlList && urlList.length > 0 ? (
            urlList.map((url, index) => (
                <UrlItem key={index} id={url.id} url={url.url} title={url.title}/>
            ))
        ) : (
            <div className="empty-state">
                
                <h3>No URLs Found</h3>
                <p>You haven't saved any URLs yet. Start adding some to see them here.</p>
            </div>
        )}
    </div>
  )
}
export default UrlList