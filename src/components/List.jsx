import React, {useState} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function List({places}) {

  return (
    <div className='food-container'>
        {places.map((placeList) => {
            const [index, setIndex] = useState(0)

            const {id, name, location, time, phone, image} = placeList

            const newImage = image[index]

            const checkNumber = number => {
            
                 if(number > image.length - 1)
                 {
                    return 0
                 }
            
                 if(number < 0)
                 {
                  return image.length - 1
                 }
                
                 return number
              }

            const nextImage = () => { setIndex( index => {
                    let newIndex = index + 1
                    return checkNumber(newIndex)
                })
            }

            const prevImage = () => { setIndex(index =>{
                let newIndex = index - 1
                return checkNumber(newIndex)
              })}
       
            return(
                <article key={id} className='place'>

                    <div className='container'>
                        <img className='images' src={newImage}/>

                        <button className='btn-left' onClick={prevImage}>
                            <FaChevronLeft />
                        </button>

                        <button className='btn-right' onClick={nextImage}>
                            <FaChevronRight/>
                        </button>
                    </div>

                    <div className='place-info'>
                        <h3 className='name'>{name}</h3>
                    <div className='underline'></div>

                    <div className='info'>
                        <div className='info-type-container'>
                        <span className='info-type-small'>Open Hours:</span>
                        </div>
                        <div className='info-value-container'>
                        <table className='table'>
                        <tbody>
                        {time.map(({day, hours},index) => (
                            <tr key={index}>
                            <th className='info-value-large'>{day}</th>
                            <td className='info-value-large'>{hours}</td>
                          </tr>
                        ))}
                        </tbody>
                        </table>
                        </div>
                    </div>

                    <div className='info'>
                        <div className='info-type-container'>
                        <span className='info-type-small'>Location:</span>
                        </div>
                        <div className='info-value-container'>
                        <span className='info-value-large'>{location}</span>
                        </div>
                    </div>

                    <div className='info'>
                        <div className='info-type-container'>
                        <span className='info-type-small'>Phone Number:</span>
                        </div>
                        <div className='info-value-container'>
                        <span className='info-value-large'>{phone}</span>
                        </div>
                    </div>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List