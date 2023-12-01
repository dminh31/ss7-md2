import React, { useState } from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './pages/Footer'
import Project from "./pages/Project"


export default function App() {
  const [product, setProduct] = useState([
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      count: 0,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      count: 0,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      count: 0,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
   
  ])
  return (
    <>
      <Header></Header>
      <Main products={product}></Main>
      <Footer></Footer>
      <Project></Project>
    </>
  )
}
