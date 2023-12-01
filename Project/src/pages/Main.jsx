import React from 'react'

export default function Main({products}) {
  return (
    <>
      <div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
          {products.map((item,index)=>{
            return <div>
              <img src={item.image} style={{width:"300px"}} />
              <p>{item.title}</p>
              <button>Example Button</button>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
