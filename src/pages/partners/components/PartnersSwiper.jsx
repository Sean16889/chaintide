import React, { useRef,useState, useCallback,useEffect } from 'react';
// Import Swiper React components
// import BearCarousel, {BearSlideCard} from 'bear-react-carousel';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import './styles.css'
import { useWindowSize } from '../../../hooks/useWindowSize';
export default function PartnersSwiper({data,className,direction}) {

  const [isPlaying, setIsPlaying] = useState(false)

  const { isMobile } = useWindowSize()
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
                                                  loop: true,
                                                  direction:direction,
                                                  align:'center'
                              },[AutoScroll({ playOnInit: false })])
  useEffect(() => {
  
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API  AutoScroll({ playOnInit: false })
      toggleAutoplay()
    }
  }, [emblaApi,isMobile])
 
  


  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    // const playOrStop = autoScroll.isPlaying()
    //   ? autoScroll.stop
    //   : autoScroll.play

    autoScroll.play()
  }, [emblaApi])

  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll
  //   if (!autoScroll) return

  //   setIsPlaying(autoScroll.isPlaying())
  //   emblaApi
  //     .on('autoScroll:play', () => setIsPlaying(true))
  //     .on('autoScroll:stop', () => setIsPlaying(false))
  //     .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  // }, [emblaApi])

    // const datas = data.map(row => {
    //     return <BearSlideCard key={row.alt}>
    //               <img src={row.src} style={{height:'38px'}}  alt={row.alt}     srcset="" />
    //           </BearSlideCard>;
    // });
  return (
    
    <div className={`embla  ${className}`}  dir={direction} >
      <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {
              data.map((row,index) => {
                return <div  className={`embla__slide ${direction === 'rtl' ? 'pr-5 mr-5' : 'pl-5 ml-5'}`}  key={index}>
                          <img src={row.src} style={{height:'38px'}}  alt={row.alt}     srcset="" />
                      </div>
                })
            }
          </div>
      </div>
    </div>
  )
}
