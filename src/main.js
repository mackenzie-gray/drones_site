import mg from 'milligram';
import './assets/less/main.less';
import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';

let controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onEnter", 
    duration: "200%"
  }
});

new ScrollMagic.Scene({
    triggerElement: ".intro",
    duration: "50%"
  })
  .setTween(".img-wrap", {x: -150, ease: Linear.easeNone})
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".background1"})
  .setTween(".bg-div1", {y: "-100%", ease: Linear.easeNone})
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rpy"})
  .setTween(".roll-img", {rotation: 30})
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rpy"})
  .setTween(".pitch-img", {rotationX: 80})
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rpy"})
  .setTween(".yaw-img", {rotation: -45})
  .addTo(controller);


console.log(controller);


