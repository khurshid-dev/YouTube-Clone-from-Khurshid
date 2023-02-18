import React from "react";
import { SideBarVideoCard, Loader } from "./";

const SideBarVideo = ({ suggestedVideo }) => {
  if (!suggestedVideo.length) return <Loader />;
  return (
    <>
      <div data-aos="fade-left" data-aos-duration="2500" className="flex flex-col gap-x-2 gap-y-3">
        {suggestedVideo.map((item) => (
          <div className="basis-auto" key={item.id.videoId}>
            {item.id.videoId && <SideBarVideoCard suggestVideo={item} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarVideo;
