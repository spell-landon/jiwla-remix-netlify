import clsx from 'clsx';
import { useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import { PROJECTS, Project } from '~/lib/const';
import 'lightbox.js-react/dist/index.css';

const ImageGrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);
  const handleClick = (project: Project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  return (
    <div className='w-full max-w-7xl mx-auto px-0 sm:px-4'>
      <div
        className={clsx(
          'w-full grid grid-cols-1 sm:grid-cols-2 sm:rounded-2xl sm:overflow-hidden'
        )}>
        {PROJECTS.map((project) => {
          const { thumbnail, label } = project;
          return (
            <button
              key={thumbnail}
              onClick={() => handleClick(project)}
              className='relative group w-full aspect-square overflow-hidden transition-all duration-200 ease-out'>
              <img
                key={thumbnail}
                className={clsx(
                  'w-full object-center object-cover inline-block aspect-square md:group-hover:scale-110 transition-all duration-200 ease-out'
                )}
                alt=''
                src={thumbnail}
              />
              <div className='flex flex-col visible opacity-100 md:invisible md:opacity-0 absolute inset-0 md:group-hover:flex md:group-hover:opacity-100 md:group-hover:visible justify-center items-center bg-primary/30 backdrop-blur-sm transition-all duration-200 ease-out gap-2'>
                <span
                  className={clsx(
                    'text-white font-semibold text-2xl md:text-xl font-StardosStencil'
                  )}>
                  {label}
                </span>
                <div className='px-5 pt-2 pb-1 font-normal text-base border border-white text-white bg-transparent hover:bg-white/20 transition-all duration-200 ease-out'>
                  View
                </div>
              </div>
            </button>
          );
        })}
        <SlideshowLightbox
          images={currentProject.images.map((image) => {
            return { src: image, alt: image };
          })}
          showThumbnails={false}
          open={isOpen}
          lightboxIdentifier='lbox1'
          theme='lightbox'
          slideshowInterval={5000}
          onClose={() => {
            setIsOpen(false);
          }}></SlideshowLightbox>
      </div>
    </div>
  );
};

export default ImageGrid;
