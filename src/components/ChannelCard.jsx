import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const ChannelCard = ({ video }) => {
    return (
        <div className='ChannelItem flex flex-col max-w-fit mr-6 mb-2 cursor-pointer hover:scale-90 transition-all'>
            <div className='headerVideo cursor-pointer w-[142px] h-[136px] overflow-hidden rounded-full'>
                <img src={video?.snippet?.thumbnails?.high?.url} className='relative bottom-[0] transition-all' alt={video?.snippet?.channelTitle} />
            </div>
            <div className='bodyVideo flex items-center pt-2 pb-1 mx-auto'>
                <h1 className='text-[13px] leading-3 tracking-[-0.5px] font-semibold'>{video?.snippet?.channelTitle?.slice(0, 50)}</h1>
                <div className='bg-primary rounded-full ml-1 p-[1px] text-white'><MdOutlineDone /></div>
            </div>
            <p className='text-gray-500 text-xs text-center'>{video?.snippet?.description.slice(0, 30)} ...</p>
        </div>
    )
}

export default ChannelCard