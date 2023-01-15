import { useState, useEffect } from 'react'
import { Category, Videos } from '../components'
import { fetchFromAPI } from '../constants/fetchFromAPI.js'

const Main = () => {

    const [selectedCategory, setSelectedCategory] = useState('Netflix')
    const selectedCategoryHandler = (categorys) => setSelectedCategory(categorys);

    const [videos, setVideos] = useState([]);

    
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])


    return (
        <div className='flex flex-col'>
            <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
            <div className='w-[90%] h-[90vh] mx-[4%] mt-4'>
                <h4 className='text-2xl font-bold mb-4'>{selectedCategory} <span className='text-secondary'>Videos</span></h4>
                <Videos videos={videos} />
            </div>
        </div>
    )
}

export default Main