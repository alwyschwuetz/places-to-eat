import React from 'react'

function Categories({categories, selectedCategory}) {
  return (
    <div className='btn-container'>
        {categories.map((category, index) => {
            
            return(
                <button key={index} className='category-btn' onClick={() => selectedCategory(category)}>
                    {category}
                </button>
            )
        })}
    </div>
  )
}

export default Categories