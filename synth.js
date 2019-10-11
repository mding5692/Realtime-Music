import AudioKeys from 'audiokeys';
import Tone from 'tone';
import { scale } from "@tonaljs/scale";
import { sample } from 'lodash';
import webmidi from "webmidi";

// LESSON 0

// let ctx = new AudioContext();
// let osc = ctx.createOscillator();
// osc.connect(ctx.destination)
// window.onmousemove = event => osc.frequency.value = event.clientX
// osc.start()

// LESSON 1

// let ctx = new AudioContext();
// let osc = ctx.createOscillator();

// osc.start()

// var keyboard = new AudioKeys();

// var oscMap = {};

// keyboard.down(note => {
//     let osc = ctx.createOscillator();
//     osc.frequency.value = note.frequency;
//     osc.connect(ctx.destination)
//     osc.start();

//     oscMap[note.frequency] = osc;
// });

// keyboard.up(note => {
//     let osc = oscMap[note.frequency];
//     osc.stop();
// });


// LESSON 2

// var synth = new Tone.Synth().toMaster()
// let keyboard = new AudioKeys();

// keyboard.down(note => {
//     synth.triggerAttackRelease(note.frequency, '8n');
// });

// LESSON 3

// let scaleType1 = 'c3 hirajoshi';
// let scaleType2 = 'c4 hirajoshi';
// let { notes: n1 } = scale(scaleType1);
// let { notes: n2 } = scale(scaleType2);

// let notes = [...n1, ...n2];

// var synth = new Tone.PolySynth(6, Tone.Synth, {
//     oscillator: {
//       type: "sine"
//     }
//   }).toMaster();
// let keyboard = new AudioKeys();

// keyboard.down(note => {
//     let currNote = sample(notes);
//     synth.triggerAttackRelease(currNote, "8n");
// });

// LESSON 4

// var synth = new Tone.PolySynth(6, Tone.Synth, {
//     oscillator: {
//       type: "sine"
//     }
//   }).toMaster();

// let scaleType1 = 'c3 hirajoshi';
// let scaleType2 = 'c4 hirajoshi';
// let { notes: n1 } = scale(scaleType1);
// let { notes: n2 } = scale(scaleType2);

// let notes = [...n1, ...n2];

// var loop = new Tone.Loop(function(time) {
//     //triggered every eighth note.
//     let note = sample(notes);
//     synth.triggerAttackRelease(note, "8n", time);
// }, "32n").start(0);

// Tone.Transport.start();

// LESSON 5

webmidi.enable(function (err) {

    if (err) {
        console.log("WebMidi could not be enabled.", err);
    } else {
        console.log("WebMidi enabled!");
        console.log(webmidi.inputs);
        console.log(webmidi.outputs);
    }
    
});