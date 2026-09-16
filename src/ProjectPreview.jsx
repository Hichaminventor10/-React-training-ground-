import { useRef, useState } from "react";

function ProjectPreview({ video }) {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="project-preview">

      <video
        ref={videoRef}
        src="/REC-20260104122303.mp4"
        muted
        loop
        playsInline
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {!isHovering && (
        <div className="video-blur"></div>
      )}

    </div>
  );
}

export default ProjectPreview;