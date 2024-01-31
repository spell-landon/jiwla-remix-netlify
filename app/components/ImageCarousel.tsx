import clsx from 'clsx';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react.js';
import { useState } from 'react';
import { ALL_PROJECT_IMAGES } from '~/lib/const';
import { ChevronRightRounded } from '@mui/icons-material';

export const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 8000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );
  return (
    <div className='w-full max-w-7xl mx-auto px-0 sm:px-4'>
      <div className='relative group w-full sm:rounded-2xl sm:overflow-hidden'>
        <div
          className='keen-slider w-full h-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] transition-all duration-200'
          ref={sliderRef}>
          {ALL_PROJECT_IMAGES.map((image) => {
            return (
              <img
                key={image}
                className={clsx(
                  'keen-slider__slide object-cover object-center w-full'
                )}
                alt=''
                src={image}
              />
            );
          })}
        </div>

        {/* Navigation arrows */}
        {loaded && instanceRef.current && (
          <div className='hidden md:block'>
            {/* Left Arrow */}
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className={clsx(
                'transition-all duration-200 ease-out',
                'invisible opacity-0',
                'group-hover:visible group-hover:opacity-100',
                'flex absolute top-1/2 -translate-y-1/2 z-50 border-2 border-white rounded-full hover:bg-white/20',
                'left-2 sm:left-4 md:left-12 lg:left-16 p-4'
              )}>
              <ChevronRightRounded className='h-6 w-6 scale-x-[-1] text-white' />
            </button>
            {/* Right Arrow */}
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className={clsx(
                'transition-all duration-200 ease-out',
                'invisible opacity-0',
                'group-hover:visible group-hover:opacity-100',
                'flex absolute top-1/2 -translate-y-1/2 z-50 border-2 border-white rounded-full hover:bg-white/20',
                'right-2 sm:right-4 md:right-12 lg:right-16 p-4'
              )}>
              <ChevronRightRounded className='h-6 w-6 text-white' />
            </button>
          </div>
        )}
        {/* Navigation Dots */}
        {loaded && instanceRef.current && (
          <div className='flex gap-1 items-center w-fit mx-auto absolute bottom-4 left-1/2 -translate-x-1/2'>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={clsx(
                    'h-2 rounded-full transition-all duration-200',
                    currentSlide === idx ? 'bg-white w-6' : 'bg-gray-300 w-2'
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
