const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function test() {
  VoiceRSS.speech({
    key: '61dae9e838314f7bbdd23874bcb56d23',
    src: 'Hello, world!',
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

test();
