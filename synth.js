import AudioKeys from 'audiokeys';

let ctx = new AudioContext();
let osc = ctx.createOscillator();

osc.start()

var keyboard = new AudioKeys();

var oscMap = {};

keyboard.down(note => {
    let osc = ctx.createOscillator();
    osc.frequency.value = note.frequency;
    osc.connect(ctx.destination)
    osc.start();

    oscMap[note.frequency] = osc;
});

keyboard.up(note => {
    let osc = oscMap[note.frequency];
    osc.stop();
});
