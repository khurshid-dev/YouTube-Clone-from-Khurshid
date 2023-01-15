import React from 'react';
import { VideoCard, ChannelCard, Loader } from '.'

const Videos = ({ videos }) => {


    if(!videos.length) return <Loader />
    return (
        <>
            <div className='flex flex-wrap sm:justify-center gap-x-2 gap-y-3'>
                {
                    videos.map((item) => (
                        <div className='basis-auto' key={item.id.videoId}>
                            {item.id.videoId && <VideoCard video={item}  /> }   
                            {item.id.channelId && <ChannelCard video={item} /> }   
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Videos;