import { Link,  } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';
import moment from 'moment';
import { demoBanner } from '../constants'


const VideoCard = ({ video }) => {

    return (  
        <div className='VideoItem flex flex-col max-w-fit'>
            <div className='headerVideo cursor-pointer w-[200px] xs:w-[300px] h-[111px] xs:h-[167px] overflow-hidden rounded-lg'>
                <Link to={`/video/${video.id.videoId}`}>
                    <img src={video?.snippet?.thumbnails?.high?.url || demoBanner} className='relative bottom-[19px] xs:bottom-[28px] transition-all' alt={video?.snippet?.channelTitle} />
                </Link>
            </div>
            <div className='bodyVideo p-3 pb-2'>
                <Link to={`/video/${video.id.videoId}`}>
                    <h1 className='text-[15px] leading-5 tracking-[-0.5px] font-semibold'>{video?.snippet?.title.slice(0, 50)}</h1>
                </Link>
                <div className='mt-1'>
                    <div className='flex flex-col xs:flex-row xs:justify-between xs:items-center xs:basis-full'>
                        <Link to={`/channel/${video?.snippet?.channelId}`}>
                            <div className='text-[11px] text-gray-400 hover:text-secondary flex items-center gap-1 mt-1 ml-[1%] xs:ml-0'>
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