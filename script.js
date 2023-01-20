const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
  toggleButtonText();
}

function toggleButtonText() {
  if (button.disabled) {
    button.textContent = 'Wait for the end...';
  } else {
    button.textContent = 'Tell Me A Joke';
  }
}
// VoiceRSS Speech Function
function tellMe(joke) {
  VoiceRSS.speech({
    key: '61dae9e838314f7bbdd23874bcb56d23',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 2,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

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
    // Passing Joke to VoiceRSS API
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (err) {
    console.log('Woops!', err);
    button.textContent = 'Woops! :(';
  }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
