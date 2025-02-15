import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Video = () => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // adjust threshold as needed
    triggerOnce: false,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} data-bgcolor="white">
      <video
        ref={videoRef}
        src="/nature1.mp4"
        loop={true}
        muted={true} // muted required for autoplay on some browsers
      />
    </div>
  );
};

export default Video;
