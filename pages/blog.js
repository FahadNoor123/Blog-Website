import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import Input from '../components/Input';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
    
  // }, [])
  return <div className={styles.container}>
    <Input/>
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return <div key={blogitem.slug}>
          <style jsx>
         {`
          .postInfo{
            font-size: 15px;
            font-style: italic;
            font-weight: bold;
          }
        
         
         `}
       </style>
          <Link href={`/blogpost/${blogitem.slug}`}>
            <p className={styles.blogItemh3}>{blogitem.title}<span className={"postInfo"}>Post By kamran Khan</span></p></Link>
          <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p><br/>
        </div>
      
      
      })}
    </main>
  </div>
};


export async function getStaticProps(context) { 
  <Input/>
  let data = await fs.promises.readdir("blogdata");
  let myfile; 
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8') 
        allBlogs.push(JSON.parse(myfile))
    }
     
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;
