import {useEffect, useRef} from "react";
import lottie from 'lottie-web';
import loading_animation from './loadingGradient.json';
import failure from './failure.json';
import success from './success.json';

export const useLottieLoadingAnimation = (options)=>{
    useEffect(()=>{
        const container = document.getElementById('animation_view')
        lottie.loadAnimation(
            {
                container: container,
                animationData: loading_animation,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boole
                ...options
            }
        )
    },[])
    return (<>
        <div id={'animation_view'}>

        </div>
    </>)
}
export const useLottieSuccessAnimation = (options)=>{
    useEffect(()=>{
        const container = document.getElementById('success_view')
        lottie.loadAnimation(
            {
                container: container,
                animationData: success,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boole
                ...options
            }
        )
    },[])
    return (<>
        <div id={'success_view'}>

        </div>
    </>)
}
export const useLottieFailureAnimation = (options)=>{
    useEffect(()=>{
        const container = document.getElementById('failure_view')
        lottie.loadAnimation(
            {
                container: container,
                animationData: failure,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boole
                ...options
            }
        )
    },[])
    return (<>
        <div id={'failure_view'}>

        </div>
    </>)
}