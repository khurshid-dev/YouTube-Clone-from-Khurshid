import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../constants/fetchFromAPI.js'
import Videos from '../components/videos.jsx';


const Search = () => {
    const {id} = useParams();
    const [videos, setVideos] = useState([])


    useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${id}`)
        .then((id) => setVideos(id.items))
    }, [id])

    return (
        <div className='w-[90%] h-[90vh] mx-[4%] mt-8'>
            <h4 className='text-2xl font-bold mb-8'>Search Result for <span className='text-secondary'>"{id}"</span> Videos</h4>
            <Videos videos={videos} />
        </div>
    )
}

export default Search;