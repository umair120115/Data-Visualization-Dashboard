import Chart from "chart.js/auto";
import { Bar ,Line,PolarArea} from "react-chartjs-2";
import { useEffect, useState } from "react";
import api from "../../api";
import '../styles/chart.css'
import NavbarHeader from "../components/NavbarHeader";
import { CategoryScale } from "chart.js";
import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link, Navigate,BrowserRouter,Routes,Route } from "react-router-dom";
import SearchResult from "./SearchResult";
import Footer from "../components/Footer";



function Home(){
    function handleClick(e) {
        e.preventDefault();
        api.get(`/home/data/?search=${value}`).then((res)=>res.data).then((data)=>{setSearch(data);
         <Navigate to='/searchresult'/>;
        console.log(data)}).catch((err) => alert(err));
        console.log("you have clicked");
    }

    const[search,setSearch]=useState([])
    const[userDatas,setUserDatas]=useState([]);
    const barChartlabel=userDatas.map((data)=>data.region)
    const barChartdata=userDatas.map((data)=>data.likelihood)
    const lineChartlabel=userDatas.map((data)=>data.intensity)
    const Polar=userDatas.map((data)=>data.relevance)
    const topics=userDatas.map((data)=>data.topic)
    const country=userDatas.map((data)=>data.country)
    const year=userDatas.map((data)=>data.published)
    const sector=userDatas.map((data)=>data.sector)
    const title=userDatas.map((data)=>data.title)
    const[value,setValue]=useState("")

    
   
   
   
    useEffect(()=>{
        getData();
    },[])
    const getData=()=> {
        api.get('/home/data/').then((res) => res.data).then((data) => {
            setUserDatas(data);
            // console.log(data);
        }).catch((err) => alert(err));

    }
    const chartData={
        
        labels: barChartlabel,
        datasets: [
        {
        
        label: "Region and their likelihood",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: barChartdata
        },
        ],
            }

    const LineChartData={
        labels: lineChartlabel,
        datasets: [
                   {
                        label: 'Likelihood and Intensity',
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: barChartdata,
                    },
                ],
            };
    const PolarData={
        labels: sector,
        datasets: [{
          label: 'Relevance',
          data: Polar,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      }
      
   
console.log(chartData)
    
    return <>
    <NavbarHeader />
    <div className="search-bar"><Form className="d-flex" onSubmit={handleClick}>
            <Form.Control
              type="search"
              placeholder="Search"
              value={value}
              onChange={(e)=>setValue(e.target.value)}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"  type='submit' >Search</Button>
          </Form></div>

          <div className="table">
            {search.map((searched)=>(<SearchResult searched={searched}/>))}
          </div>


  <div className="chart-container">
    <h2 className="heading">Data Visuals</h2>
    <div className="bar-chart">{chartData.datasets ? <Bar data={chartData} /> : ""} <p className="bar-title">Region - Likelihood</p></div>
   
    <div className="line-chart">{LineChartData.datasets?<Line data={LineChartData}/>:""}<p className="line-title">Likelihood-Intensity</p></div>
    <div className="polar-chart">{PolarData.datasets?<PolarArea data={PolarData}/>:""}<p className="polar-title">Relevance</p></div>
  </div>
  <Footer/>

    </>
}
export default Home;