import { SplitText } from "./src/splitText.js";
gsap.registerPlugin(EasePack);

function InitFlicker(cls){
    let text = new SplitText(cls);
    let flickerEase = "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp:  true})";
    gsap.timeline().from(text.words,{
        autoAlpha:0,
        duration:1,
        stagger:{each:0.05, from:"random"},
        ease: flickerEase
    },0.3);
}
InitFlicker('.header');



// let flickerEase = "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp:  true})";
// const text = new SplitText(".header");
// console.log(text);

// gsap.timeline().from(text.words,{
//     autoAlpha:0,
//     duration:1,
//     stagger:{each:0.05, from:"random"},
//     ease: flickerEase
// },0.3);

// (function(){
//     let split = new SplitText("h1", {type:"words"});
//     let flickerEase = "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp:  true})";
 
//     let timeline = gsap.timeline({repeat:-1, repeatDelay:0.5})
    
//     .from(split.chars, { autoAlpha:0, 
//                          duration:1,
//                          stagger:{each:0.05, from:"random"},
//                          ease: flickerEase
//                        }, 0.3)
//  }())