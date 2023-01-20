const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// function test() {
//   VoiceRSS.speech({
//     key: '61dae9e838314f7bbdd23874bcb56d23',
//     src: 'Hello, world!',
//     hl: 'en-us',
//     v: 'Linda',
//     r: 0,
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false,
//   });
// }

// test();

// Get jokes from Joke API
async function getJokes() {
  const apiUrl =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
  let joke = '';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    console.log(joke);
  } catch (err) {
    console.log('Woops!', err);
  }
}

getJokes();
