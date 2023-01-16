import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../constants/fetchFromAPI'
import { MdOutlineDone } from 'react-icons/md';
import { Button, Container  } from '@mui/material';
import { Videos } from '../components/index'

const Channel = () => {

    const [videos, setVideos] = useState([]);
    const [channelDetail, setChannelDetail] = useState(null)
    const [subscrided, setSubscrided] = useState(false)
    const { id } = useParams()


    
    useEffect(() => {
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
        fetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
            .then((data) => setChannelDetail(data.items[0]))
    }, [id])



    return (
        <>
            <div className='banner-channel h-[151px] xs:h-[125px] overflow-hidden'>
                <img src={channelDetail?.brandingSettings?.image?.bannerExternalUrl} 
                    className='w-[100vw] h-[509px] ss:h-[343px] xs:h-[259px] relative bottom-[181px] ss:bottom-[98px] xs:bottom-[77px]' alt="" />
            </div>
            <Container maxWidth='xl' className='mt-3'>
                <div className="main-channel px-3 py-3">
                    <div className='flex xs:flex-col xs:text-center items-center basis-[25%] gap-2'>
                        <div className='w-full mr-[1%] flex xs:flex-col items-center gap-2'>
                            <img className='max-w-[100px] h-[100px] ss:max-w-[60px] ss:h-[60px] rounded-full' 
                                src={channelDetail?.snippet?.thumbnails?.high?.url} 
                                alt={channelDetail?.brandingSettings?.title} />
                            <div className='flex flex-col'>
                                <div className='flex items-center xs:mx-auto gap-1 text-base leading-3 font-semibold w-[max-content] cursor-pointer'>
                                    <h6>{channelDetail?.brandingSettings?.channel?.title} </h6>
                                    <MdOutlineDone className='bg-primary rounded-full text-[yellow] box-border p-[1px] text-base' /></div>
                                <div className='text-[12px] w-[max-content] text-[rgb(171,171,171)]'>{channelDetail?.statistics?.viewCount.slice(0, 2)} тыс. подписчиков</div>    
                            </div> 
                        </div>
                        <div className='btn-primary rounded-md ml-2 xs:mx-auto xs:ml-0'>
                            <Button variant={`${subscrided ? 'outlined': 'contained'}`} size="medium" onClick={()=>setSubscrided((prev)=>!prev)}>{`${subscrided ? 'Подписано' : 'Подписаться'}`}</Button>
                        </div>
                    </div>
                </div>
                <div className="videos-channel mt-10 flex justify-center">
                    <Videos videos={videos} channelDetail={channelDetail} />
                </div>
            </Container>
        </>
    )
}

export default Channel;