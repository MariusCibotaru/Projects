import React, { useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import screenfull from 'screenfull';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

const fotoContext = require.context(
  '../../Image/Foto',
  false,
  /\.(png|jpe?g|svg)$/
);
const fotoFiles: string[] = fotoContext.keys().map((key: string) => fotoContext(key));





export default function Section1() {
  const isCustomSize = useMediaQuery('(max-width: 770px)');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const handleImageClick = (index: number) => {
    setExpandedIndex(index);
  };

  const handleImageClose = () => {
    setExpandedIndex(null);
  };

  const handlePreviousImage = () => {
    if (expandedIndex !== null) {
      const previousIndex = (expandedIndex - 1 + fotoFiles.length) % fotoFiles.length;
      setExpandedIndex(previousIndex);
    }
  };

  const handleNextImage = () => {
    if (expandedIndex !== null) {
      const nextIndex = (expandedIndex + 1) % fotoFiles.length;
      setExpandedIndex(nextIndex);
    }
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
    if (imageRef.current && screenfull.isEnabled) {
      screenfull.request(imageRef.current);
    }
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };
  

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(screenfull.isFullscreen);
    };

    screenfull.on('change', handleFullscreenChange);

    return () => {
      screenfull.off('change', handleFullscreenChange);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <ImageList variant="masonry" cols={isCustomSize ? 2 : 4} gap={15} sx={{ padding: '0 16px' }}>
        {fotoFiles.map((img: string, index: number) => (
          <ImageListItem key={index} sx={{ position: 'relative' }}>
            <img
              ref={expandedIndex === index ? imageRef : null}
              src={img}
              alt={`Foto ${index}`}
              loading="lazy"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => handleImageHover(null)}
              onClick={() => handleImageClick(index)}
            />
            {hoveredIndex === index && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: '24px',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              >
                <AddIcon style={{ width: '40px', height: '40px' }} onClick={() => handleImageClick(index)} />
              </div>
            )}
            {expandedIndex === index && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 9999,
                }}
              >
                <img
                  ref={imageRef}
                  src={img}
                  alt={`Foto ${index}`}
                  style={{
                    maxHeight: isFullscreen ? '100%' : '90%',
                    maxWidth: isFullscreen ? '100%' : '90%',
                    cursor: 'pointer',
                    objectFit: isFullscreen ? 'contain' : 'initial',
                  }}
                  onClick={handleImageClose}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    cursor: 'pointer',
                    color: '#fff',
                    zIndex: 1,
                  }}
                  onClick={handleImageClose}
                >
                  <CloseIcon />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#fff',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={handlePreviousImage}
                >
                  <ArrowBackIosIcon style={{ width: '40px', height: '40px' }} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '0',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#fff',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={handleNextImage}
                >
                  <ArrowForwardIosIcon style={{ width: '40px', height: '40px' }} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '56px',
                    cursor: 'pointer',
                    color: '#fff',
                    zIndex: 1,
                  }}
                  onClick={isFullscreen ? handleExitFullscreen : handleFullscreen}
                >
                  {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </div>
              </div>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
