

import AddUrl from "../../components/Add-urls/AddUrl";
import UrlList from "../../components/main-page-components/UrlList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [urlList, setUrlList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function getUrls() {

    const token = localStorage.getItem("token");
    if(!token || token === "undefined" || token === null){
      navigate('/login')
    }
      setLoading(true);
          try {
        
              const results = await fetch("http://localhost:3000/api/urls",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );
        console.log(results);
        const data = (await results.json()).data;

        
        setUrlList(data);
        console.log(data);
      } catch (error) {
        console.log(`An Error occured while fetching urls: ${error.message}`);
      }finally{
        setLoading(false);
      }
  }

useEffect(() => {
  getUrls();
},[]);


  return (
    <>
    <AddUrl />
      {
        isLoading ?<div>Loading...</div>:<UrlList urlList={urlList}/>
      }
      
    </>
  )
};

export default Home;