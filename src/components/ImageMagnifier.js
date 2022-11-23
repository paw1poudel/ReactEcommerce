import React, { useState } from 'react'
export default function ImageMagnifier({
    src,
    width,
    height,
    magnifierHeight = 100,
    magnifieWidth = 100,
    zoomLevel = 1.5
  })

  {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
   
    return (
      <div
        style={{
          position: "relative",
          height: height,
          width: width,
         
        }}
      >
        <img
          src={src}
          style={{ height: height, width: width}}
          draggable="false"
          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
  
        
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
         
          onMouseLeave={() => {
       
            setShowMagnifier(false);
          }}
          alt={"magnifier"}
          onClick={()=>previewImage(src)}
        />
  
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
            borderRadius:"50px",
  
            pointerEvents: "none",
 
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,

            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            opacity: "1",
            border: " 2px solid lightgray",
            backgroundColor: "transparent",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
  
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
          }}
        ></div>
      </div>
    );
  }