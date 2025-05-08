import { useState ,useRef} from 'react'
import HomePage from './pages/home';
import Header from './components/Header';
import MibleHeader from './components/Header/Mible';
import Footer from './components/Footer';
import './App.css'
import { useWindowSize } from './hooks/useWindowSize';

function App() {


  const positionRef = useRef(null);
  const propositionRef = useRef(null);
  const serviceRef = useRef(null);
  const partnersRef = useRef(null);
  
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const{ isMobile } = useWindowSize()
  return (
    <div className="App  xl:max-w-[1248px] 2xl:max-w-[1440px]">
      { isMobile
       ?   
        <MibleHeader scrollToRef={(refKey) => {
            const refs = {
              positionRef: positionRef,
              propositionRef: propositionRef,
              serviceRef: serviceRef,
              PartnersRef: partnersRef,
            };
            scrollToRef(refs[refKey]);
          }} 
         />  
          :
         <Header scrollToRef={(refKey) => {
          const refs = {
            positionRef: positionRef,
            propositionRef: propositionRef,
            serviceRef: serviceRef,
            PartnersRef: partnersRef,
          };
          scrollToRef(refs[refKey]);
        }} 
      />
      }
      <HomePage 
        positionRef={positionRef}
        propositionRef={propositionRef}
        serviceRef={serviceRef}
        partnersRef={partnersRef}
      />
      <Footer 
      isMobile={isMobile}
      scrollToRef={(refKey) => {
          const refs = {
            positionRef: positionRef,
            propositionRef: propositionRef,
            serviceRef: serviceRef,
            PartnersRef: partnersRef,
          };
          scrollToRef(refs[refKey]);
        }} />
    </div>
  )
}

export default App
