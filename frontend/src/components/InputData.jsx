import api from "../../api"
import { useState } from "react";
import React from "react";
import '../styles/InputData.css'
import '../styles/Form.css'
import { useNavigate } from "react-router-dom";
function InputData(){
    const [endyear,setEndyear]=useState("")
    const [intensity,setIntensity]=useState("")
    const [sector,setSector]=useState("")
    const [topic,setTopic]=useState("")
    const [insight,setInsight]=useState("")
    const [url,setUrl]=useState("")
    const [region,setRegion]=useState("")
    const [startyear,setStartyear]=useState("")
    const [impact,setImpact]=useState("")
    const [added,setAdded]=useState("")
    const [published,setPublished]=useState("")
    const [country,setCountry]=useState("")
    const [relevance,setRelevance]=useState("")
    const [pestle,setPestle]=useState("")
    const [source,setSource]=useState("")
    const [title,setTitle]=useState("")
    const [likelihood,setLikelihood]=useState("")
    const navigate=useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        api.post('/home/data/', { endyear, intensity, sector, topic, insight, url, region, startyear, impact, added, published, country, relevance, pestle, source, title, likelihood }).then((res) => {
            if (res.status === 201)  {alert("data is usbmitted"); navigate('/')}
            else {alert("Failed to submit.");}
            
        })
            .catch((err) => alert(err));
    }

    return <>
    <div className="input-form">
    <h2 className="heading">Input Data</h2>
        <form  onSubmit={handleSubmit} className="form-container">
            <input type="text" placeholder="End Year" className="form-input" value={endyear} onChange={(e)=>setEndyear(e.target.value)}  />

            <input type="text" placeholder="Intensity" className="form-input" value={intensity} onChange={(e)=>setIntensity(e.target.value)}  />

            <input type="text" placeholder="Sector" className="form-input" value={sector} onChange={(e)=>setSector(e.target.value)}  />

            <input type="text" placeholder="Topic" className="form-input" value={topic} onChange={(e)=>setTopic(e.target.value)}  />

            <input type="text" placeholder="Insight" className="form-input" value={insight} onChange={(e)=>setInsight(e.target.value)}  />

            <input type="text" placeholder="Url" className="form-input" value={url} onChange={(e)=>setUrl(e.target.value)}  />

            <input type="text" placeholder="Region" className="form-input" value={region} onChange={(e)=>setRegion(e.target.value)}  />

            <input type="text" placeholder="Start Year" className="form-input" value={startyear} onChange={(e)=>setStartyear(e.target.value)}  />

            <input type="text" placeholder="Impact" className="form-input" value={impact} onChange={(e)=>setImpact(e.target.value)}  />

            <input type="text" placeholder="Added on" className="form-input" value={added} onChange={(e)=>setAdded(e.target.value)}  />

            <input type="text" placeholder="Published" className="form-input" value={published} onChange={(e)=>setPublished(e.target.value)}  />

            <input type="text" placeholder="Country" className="form-input" value={country} onChange={(e)=>setCountry(e.target.value)}  />

            <input type="text" placeholder="Relevance" className="form-input" value={relevance} onChange={(e)=>setRelevance(e.target.value)}  />

            <input type="text" placeholder="Pestle" className="form-input" value={pestle} onChange={(e)=>setPestle(e.target.value)}  />

            <input type="text" placeholder="Source" className="form-input" value={source} onChange={(e)=>setSource(e.target.value)}  />

            <input type="text" placeholder="Title" className="form-input" value={title} onChange={(e)=>setTitle(e.target.value)}  />

            <input type="text" placeholder="Likelihoos" className="form-input" value={likelihood} onChange={(e)=>setLikelihood(e.target.value)}  />

            
            <button className="form-button" type="submit">
                Submit
            </button>

        </form>
    </div>


    
    
    
    
    
    
    
    
    
    
    </>
}
export default InputData