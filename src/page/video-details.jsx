import { useState, useEffect } from 'react';
import {SideBarVideo, Videos, Loader } from '../components'
import { useParams, Link } from 'react-router-dom';
import { fetchFromAPI } from '../constants/fetchFromAPI';
import ReactPlayer from 'react-player';
import Button from '@mui/material/Button';
import moment from 'moment';


import { MdOutlineDone } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { BiCommentDetail } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { AiFillDownCircle } from 'react-icons/ai';
import { AiFillUpCircle } from 'react-icons/ai';






const VideoDetail = () => {

    const [videos, setVideos] = useState([]);
    const [descript, setDescript] = useState(true)
    const [suggestedVideo, setSuggestedVideo] = useState([])
    const [subscrided, setSubscrided] = useState(false)
    const [videoDetail, setVideoDetail] = useState(null)
    const {id} = useParams();

    useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((id) => setVideoDetail(id.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((id) => setSuggestedVideo(id.items))
    fetchFromAPI(`search?part=snippet&q=${id}`)
        .then((id) => setVideos(id.items))
    }, [id])


    if(!videoDetail?.snippet) return <Loader />

    const { snippet: {channelTitle, description, publishedAt, tags, localized: {title}}, 
            statistics: {commentCount, likeCount, viewCount}} = videoDetail;


    return (
        <div className='max-w-[66%] xl:max-w-[80%] lg:max-w-[98%] md:max-w-[95%] flex md:flex-col justify-center gap-[2%] lg:gap-[1%] mx-auto mt-[1%]'>
            <div className='lg:w-[70%] md:w-full'>
                
                
                {/* ============== Video Play ==========*/}
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing pip controls className='react-player'  />
                



                {/* ============== Main Info ==========*/}
                <div className='text-[20px] sm:text-[17px] font-semibold my-4'>{title}</div>
                
                <div className='flex justify-between'>
                    <div className='flex items-center basis-[25%] ss:basis-[35%] gap-2'>
                        <div className='w-full mr-[1%]'><img className='max-w-[40px] h-[40px] rounded-full' src={videoDetail?.snippet?.thumbnails?.medium?.url} alt={title} /></div>
                        <div className='flex flex-col'>
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <div className='flex items-center gap-1 text-base sm:text-[14px] leading-3 font-semibold w-[max-content] cursor-pointer'>
                                    <h6>{channelTitle} </h6>
                                    <MdOutlineDone className='bg-primary rounded-full text-[yellow] box-border p-[1px] text-base' />
                                </div>
                            </Link>
                            <div className='text-[12px] w-[max-content] text-[rgb(171,171,171)]'>{videoDetail?.statistics?.viewCount.slice(0, 2)} тыс. подписчиков</div>    
                        </div> 
                        <div className='btn-primary ss:hidden rounded-md ml-2 md:text-[12px]'>
                            <Button variant={`${subscrided ? 'outlined': 'contained'}`} size='medium' onClick={()=>setSubscrided((prev)=>!prev)}>{`${subscrided ? 'Подписано' : 'Подписаться'}`}</Button>
                        </div>
                    </div>

                    {/* Subscribe Button for Media query 500 */}
                    <div className='btn-primary hidden ss:block rounded-md ml-2 md:text-[12px]'>
                        <Button variant={`${subscrided ? 'outlined': 'contained'}`} size='small' onClick={()=>setSubscrided((prev)=>!prev)}>{`${subscrided ? 'Подписано' : 'Подписаться'}`}</Button>
                    </div>

                    {/* Like and Dislike Buttons */}
                    <div className='flex items-center ss:hidden'>
                        <div className='text-base '>
                            <Button color='primary'><BiLike  className='like-icons' /> {likeCount.slice(0, 3)} тыс.</Button>
                        </div>
                        <div className='text-base'>
                            <Button color='primary'><BiDislike  className='like-icons' /></Button>
                        </div>
                    </div>
                </div>



                {/* ============== Description ==========*/}
                <div className='description-buttons flex flex-wrap gap-2 mt-6'>
                    <Button variant='outlined' sx={{ borderRadius: '10px', color: 'black', borderColor: 'black', fontSize: '13px', display: 'flex', gap: '5px', paddingX: '6px', paddingY: '3px' }}>
                        <FaEye size={'12px'} />
                        <h6 className='text-[10px]'>{parseInt(viewCount).toLocaleString('en-US')} views</h6>
                    </Button>
                    <Button variant='outlined' sx={{ borderRadius: '10px', color: 'black', borderColor: 'black', fontSize: '13px', display: 'flex', gap: '5px', paddingX: '6px', paddingY: '3px' }}>
                        <FaRegHeart size={'12px'} />
                        <h6 className='text-[10px]'>{parseInt(likeCount).toLocaleString('en-US')} likes</h6>
                    </Button>
                    <Button variant='outlined' sx={{ borderRadius: '10px', color: 'black', borderColor: 'black', fontSize: '13px', display: 'flex', gap: '5px', paddingX: '6px', paddingY: '3px' }}>
                        <BiCommentDetail size={'12px'} />
                        <h6 className='text-[10px]'>{parseInt(commentCount).toLocaleString('en-US')} comments</h6>
                    </Button>
                    <Button variant='outlined' sx={{ borderRadius: '10px', color: 'black', borderColor: 'black', fontSize: '13px', display: 'flex', gap: '5px', paddingX: '6px', paddingY: '3px' }}>
                        <BiTimeFive size={'12px'} />
                        <h6 className='text-[10px]'>{moment(publishedAt).fromNow()}</h6>
                    </Button>
                </div>
                <div className='description p-4  rounded-md w-full mt-3 mb-7 text-[14px] text-white'>
                    <p className={`tracking-[0.1px] mb-2 text-[13px] overflow-hidden 
                            ${descript ? 'h-9' : 'h-full'} transition-all`}>{description}</p>
                    <div className='flex items-center justify-end gap-1 text-white font-bold text-[14px] cursor-pointer transition-all' 
                            onClick={() => setDescript((prev) => !prev)}>
                        <div>{descript ? 'Еще' : 'Свернуть'}</div>
                        <AiFillDownCircle className={`${descript ? 'block' : 'hidden'}`} />
                        <AiFillUpCircle className={`${descript ? 'hidden' : 'block'}`} />
                    </div>
                </div>
                <div className='md:hidden'>
                    {tags.slice(0, 8).map((item, idx) => (
                            <a href='#' className='text-[#5e97e3]' key={idx}>#{item}</a>
                        ))}
                </div> 
            </div>



            <div className='lg:w-[30%] md:hidden'>
                <h1 className='font-bold text-[20px] mb-4'>Похожие <span className='text-secondary'>видео</span></h1>
                <SideBarVideo suggestedVideo={suggestedVideo} />
            </div>
            <div className='hidden md:block '>
                <h1 className='font-bold text-[20px] mb-4'>Похожие <span className='text-secondary'>видео</span></h1>
                <div className='mt-3 flex justify-start max-w-full'>
                    <Videos videos={videos}  />
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;