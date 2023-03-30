import React, { useEffect, useState } from 'react'
import Categorie from './Categorie'
const Home = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      let res = await fetch(`https://random-data-api.com/api/v2/users?size=6`, {
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

      // console.log("res.data", res.data);
    }
    getCategory()
  }, [])





  return (
    <>

      <h1 style={{ textAlign: 'center' }}>All Categories</h1>

      <div className='parent-container'>
        {categories.map(category =>
          <Categorie
           key = {category.id}
            name={category.first_name + category.last_name}
            gender={category.gender}
            img={category.avatar}
            phone={category.phone_number}
            email={category.email}
            address= {category.address.state + category.address.country}
          >
          </Categorie>
        )}
      </div>
    </>
  )
}

export default Home;