

import React, { useState } from 'react';
import "./AddUrl.css";

function AddUrl()  {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (title.trim() && url.trim()) {
      const result = await fetch("http://localhost:3000/api/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ url, title }),
      })
      if(result.ok){
        const data = await result.json();
        console.log(data.data);
        window.location.reload()

      }
      console.log(result);
      setTitle("");
      setUrl("");
    }
  };

  return (
    <div className="add-form-container">
      <div className="add-form">
        <h2 className="form-title">Add New URL</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              placeholder="Enter website title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL Link</label>
            <input 
              type="url" 
              id="url" 
              placeholder="https://google.com" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required 
            />
            <span onClick={() => navigator.clipboard.readText().then(setUrl)}>Paste URl from clipboard</span>
          </div>
          <button type="submit" className="submit-btn"> Add Bookmark</button>
        </form>
      </div>
    </div>
  );
}

export default AddUrl;