import { SplitText } from "splitText.js";
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


