import { useEffect, useRef, useState } from 'react'
import './App.css'
import items from './data'
import List from './components/List'
import Categories from './components/Categories'


//flatMap combines all the array collected from category
//... new Set => set is to make repeated items become unique, new is create new object, ... is convert into array
const allCategories = ['all', ...new Set(items.flatMap(item => item.category))]

function App() {
  
  const [categories, setCategory] = useState(allCategories)
  const [places, setPlaces] = useState(items)

  const selectedCategory = category => {
    if(category === 'all')
    {
      return setPlaces(items)
    }
    
    const newPlaces = items.filter(item => item.category.includes(category))
    console.log(newPlaces)
    return setPlaces(newPlaces)
  }

  return (
    <>

      <header className='title'>
        <h2>To Eat In Cyber</h2>
        <div className='underline'></div>
      </header>

      <main className='main-section'>
        <Categories categories={categories} selectedCategory={selectedCategory} />
        <List places={places} />
      </main>

      <footer className='footer'>
          <h3>Contact me <a href='mailto: andralai71@gmail.com'>here</a></h3>
      </footer>

    </>
  )
}

export default App
