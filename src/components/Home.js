import React, { useEffect, useState } from 'react'
import Categorie from './Categorie'
import { ScaleLoader } from 'react-spinners';
import InfiniteScroll from "react-infinite-scroll-component";
const Home = (props) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);
 


  const updateCategory = async () => {
    setLoading(true)
    let res = await fetch(`https://random-data-api.com/api/v2/users?size=${props.size}`, {
      method: "GET",
    });
    res = await res.json();
    if (res) {
      console.log(res);
      setCategories(res);
    }
    else {
      console.log("error")
    }
    setLoading(false)

  }
 
  useEffect(() => {
    updateCategory()
     // eslint-disable-next-line
  },[])

  const fetchMoreData = async () => {
    const url = `https://random-data-api.com/api/v2/users?size=${props.size}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setCategories(categories.concat(parsedData))
  };

  return (
    <>

     <h1 className ="allcat" >All Users</h1>
      
      <div className='parent-container'>
      
        <InfiniteScroll
          dataLength={categories.length}
          next={fetchMoreData}
          hasMore={categories.length !==100}
          loader={<ScaleLoader
            color="#36d7b7"
            cssOverride={{
              float: 'centre',
              textAlign: 'center'
            }}

          />}
        >
          
          {categories.map(category =>
            <Categorie
              key={category.uid}
              name={category.first_name + category.last_name}
              gender={category.gender}
              img={category.avatar}
              phone={category.phone_number}
              email={category.email}
              address={category.address.state + category.address.country}
            >
            </Categorie>
          )}
         
        </InfiniteScroll>
        </div>
     
    </>
  )
}

export default Home;