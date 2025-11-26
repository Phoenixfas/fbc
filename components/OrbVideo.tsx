import React, { forwardRef } from 'react';

const OrbVideo = forwardRef<HTMLVideoElement>((props, ref) => {
    return (
        <div className="max-w-36 xl:max-w-44 w-full h-44 xl:h-[200px] overflow-hidden flex">
            <video ref={ref} className='w-full h-full bg-transparent object-cover scale-[1.4]' autoPlay loop muted playsInline controls={false} poster="/videos/poster.png">
                <source src="/videos/output.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
});

OrbVideo.displayName = 'OrbVideo';
export default OrbVideo;
