import { gsap } from 'gsap';

//  Method to() : It allows to define the destination values
// gsap.to('.box', { rotate: 360, duration: 3, x: 500 });

// Method from(): It allows to start from a point to actual point of element
// gsap.from('.box', { opacity: 0, duration: 3, x: 1200 });

// Method fromTo(): It allows define BOTH the starting and ending values for an animation
// gsap.fromTo('.box', { opacity: 0, x: -300 }, { opacity: 1, duration: 2, x: 200 });

// We can also store the animation into a variable
// const ani = gsap.to('.box', { duration: 2, x: 300 }); //now we can perfom different types of animations to this variable

// Timeline in js: A Timeline is a container for animations performing multiple animations in sequence
// const boxTimeline = gsap.timeline();
// boxTimeline
//   .to('.one-box', { duration: 1, x: 100 })
//   .to('.two-box', { duration: 1, x: 200 })
//   .to('.three-box', { duration: 1, x: 100 });

// STAGGER : It would apply n seconds of delay between each element animation
// gsap.to('.box', { duration: 1, delay: 1, x: 200, stagger: 0.1 }); // 0.1 seconds between when each ".box" element starts animating

// Easing in GSAP :Easing controls the feel/personality of an animation — how it accelerates and decelerates.
// gsap.to('.one-box', { duration: 2, x: 300, ease: 'bounce.out' }); //Bounces at the end
// gsap.to('.two-box', { duration: 2, x: 300, ease: 'elastic.out' }, '>'); // Elastic overshoot
// gsap.to('.three-box', { duration: 2, x: 300, ease: 'back.out(1.7)' }, '>'); // Pulls back before going forward
// gsap.to('.four-box', { duration: 2, x: 300, ease: 'none' }, '>'); // natural

// POSTIONING:By default, animations in a timeline play one after another. But you can control exactly when each animation starts using the position parameter
// const boxTimelineAnimation = gsap.timeline();
// boxTimelineAnimation
//   .to('.one-box', { duration: 1, x: 100 })
//   .to('.two-box', { duration: 1, x: 100 }, '<') //start at the same time as last animation
//   .to('.three-box', { duration: 1, x: 100 }, '>') //Start after previous animation ends (default)
//   .to('.four-box', { duration: 1, x: 100 }, '+=1') //1 second after previous ends
//   .to('.five-box', { duration: 1, x: 100 }, '-=0.5') //0.5 seconds before previous ends (overlap)
//   .to('.six-box', { duration: 1, x: 100 }, '<1') //1 second after the previous animation starts
//   .to('.seven-box', { duration: 1, x: 100 }, 1.5); //At exactly 1.5 seconds on the timeline

// LABELS :Labels are like bookmarks on a timeline. You can name a point in time and reference it later.
// const boxTimelineAnimation = gsap.timeline();
// boxTimelineAnimation
//   .to('.one-box', { x: 200, duration: 1 })
//   .addLabel('midpoint') // save this position
//   .to('.two-box', { x: 100, duration: 1 })
//   .to('.three-box', { rotation: 360, duration: 1 }, 'midpoint') // starts AT the label
//   .to('.four-box', { opacity: 0, duration: 1 }, 'midpoint+=0.5'); // 0.5s after label

// MINI PROJECT
// All boxes enter from left
// Each box enters one by one
// Each box rotates slightly while entering
// After all boxes enter, all boxes scale up slightly together
// Then all boxes settle to normal size

// const allBoxANimations = gsap.timeline();
// allBoxANimations
//   .from('.box', { duration: 1, opacity: 0, x: -250, stagger: 0.3, rotate: 360 })
//   .to('.box', { duration: 1, scale: 1.2, ease: 'power1.inOut' })
//   .to('.box', { duration: 1, scale: 1, ease: 'power1.inOut' });
