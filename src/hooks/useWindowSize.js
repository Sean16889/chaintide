import {useState, useEffect} from 'react';

export const useWindowSize = () => {
    // 第一步：声明能够体现视口大小变化的状态
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [isMobile, setIsMobile] = useState(false);

    // 第二步：通过生命周期 Hook 声明回调的绑定和解绑逻辑
    useEffect(() => {

        checkIsMobile()

        const updateSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
            checkIsMobile()
        };

        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);

    }, []);

    function checkIsMobile() {

        setIsMobile(window.innerWidth < 1000)

    }

    return {isMobile, windowWidth: windowSize.width, windowHeight: windowSize.height};
}
