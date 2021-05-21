import { gsap } from 'gsap';

//Home Grid Items animations on mouseEnter and mouseLeave

let anim: gsap.core.Tween;
export const increaseImage = (e: React.MouseEvent) => {
  anim = gsap.to(e.currentTarget.firstChild, {
    duration: 2,
    scale: 1.1,
    autoAlpha: 0.7,
  });
  anim.play();
};
export const decreaseImage = (e: React.MouseEvent) => {
  anim.timeScale(2).reverse();
};
