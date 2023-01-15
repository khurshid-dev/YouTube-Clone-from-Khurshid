import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';
import moment from 'moment';
import { demoBanner } from '../constants'

const SideBarVideoCard = ({ suggestVideo }) => {

    return (
        <div className='VideoItem'>
            <Link to={`/video/${suggestVideo.id.videoId}`}>
                <div className='flex gap-1 max-w-fit'>
                    <div className='headerVideo cursor-pointer w-[212px] h-[79px] overflow-hidden rounded-lg'>
                        <img src={suggestVideo?.snippet?.thumbnails?.high?.url || demoBanner} className='relative bottom-[23px] w-[168px] h-[125px] transition-all' alt={suggestVideo?.snippet?.channelTitle} />
                    </div>
                    <div className='bodyVideo p-3 pb-2'>
                        <h1 className='text-[14px] leading-3 tracking-[-0.5px] font-semibold'>{suggestVideo?.snippet?.title.slice(0, 50)}</h1>
                        <div className='text-[12px] text-gray-400 flex items-center gap-1 mt-1'>
                            <p>{suggestVideo?.snippet?.channelTitle}</p>
                            <div className='bg-gray-500 rounded-full ml-1 p-[1px] text-white'><MdOutlineDone /></div>
                        </div>
                        <p className='text-[10px] text-gray-400'>{moment(suggestVideo?.snippet?.publishedAt).fromNow()}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SideBarVideoCard;