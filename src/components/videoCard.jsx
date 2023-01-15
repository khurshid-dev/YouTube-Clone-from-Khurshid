import { Link,  } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';
import moment from 'moment';
import { demoBanner } from '../constants'


const VideoCard = ({ video }) => {

    return (  
        <div className='VideoItem flex flex-col max-w-fit'>
            <div className='headerVideo cursor-pointer w-[200px] h-[111px] overflow-hidden rounded-lg'>
                <Link to={`/video/${video.id.videoId}`}>
                    <img src={video?.snippet?.thumbnails?.high?.url || demoBanner} className='relative bottom-[19px] transition-all' alt={video?.snippet?.channelTitle} />
                </Link>
            </div>
            <div className='bodyVideo p-3 pb-2'>
                <Link to={`/video/${video.id.videoId}`}>
                    <h1 className='text-[12px] leading-3 tracking-[-0.5px] font-semibold'>{video?.snippet?.title.slice(0, 50)}</h1>
                </Link>
                <div className='flex items-center gap-1 mt-1'>
                    <div className='flex flex-col'>
                        <Link to={`/channel/${video?.snippet?.channelId}`}>
                            <div className='text-[11px] w-[max-content] text-gray-400 hover:text-secondary flex items-center gap-1 mt-1 ml-[1%]'>
                                <p className='font-semibold'>{video?.snippet?.channelTitle}</p>
                                <div className='bg-gray-500 rounded-full ml-1 p-[1px] text-white'><MdOutlineDone /></div>
                            </div>
                        </Link>
                        <p className='text-[10px] text-gray-400'>{moment(video?.snippet?.publishedAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoCard