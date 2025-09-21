
import React from 'react'
import "./UrlList.css"
import UrlItem from './UrlItem'
function UrlList({urlList}) {

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Url title</th>
                    <th>Url description</th>
                    <th>Copy Url to clipboard</th>
                    <th>Open in new tap</th>
                </tr>
            </thead>

            <tbody>
                            
                        
        {
            urlList && urlList.length > 0 && urlList.map((url, index) => {

                return (
                    <UrlItem key={index} url={url.url} title={url.title}/>
                    
                )
            })
        }
        {
            !urlList || urlList && urlList.length === 0 && <p>No urls found please add some</p>
        }
            </tbody>
        </table>
      
    </div>
  )
}

export default UrlList
