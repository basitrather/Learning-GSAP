import { gsap } from 'gsap';

//BASICS
// Method to() : It allows to define the destination values
gsap.to('.box', { rotate: 360, duration: 3, x: 500 });

// Method from(): It allows to start from a point to actual point of element
gsap.from('.box', { opacity: 0, duration: 3, x: 1200 });

//Method fromTo(): It allows define BOTH the starting and ending values for an animation
gsap.fromTo('.box', { opacity: 0, x: -300 }, { opacity: 1, duration: 2, x: 200 });

//We can also store the animation into a variable
const ani = gsap.to('.box', { duration: 2, x: 300 }); //now we can perfom different types of animations to this variable

//Timeline in js: A Timeline is a container for animations performing multiple animations in sequence
const boxTimeline = gsap.timeline();
boxTimeline
  .to('.one-box', { duration: 1, x: 100 })
  .to('.two-box', { duration: 1, x: 200 })
  .to('.three-box', { duration: 1, x: 100 });
