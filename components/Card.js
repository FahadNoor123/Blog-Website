import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
function Card ()  {
  return (
    <div><div className="card" style={{ width: '50rem' }}>
    <img src="/images/boyss.jpg" className="card-img-top" alt="..." height={"400px"}/>
    <div className="card-body">
      <h2 className="card-title">Junaid Gohar</h2>
      <p className="card-text">"Through insightful perspectives, engaging storytelling, and a genuine connection with readers, the prolific blogger effortlessly transforms complex ideas into captivating narratives that resonate with a global audience</p>
     <Link href={"/blog"}><button type="submit" className="btn btn-primary" href>
              See More
            </button></Link> 
    </div>
  </div>s</div>
  )
}

export default  Card