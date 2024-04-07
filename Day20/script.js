  //Adding firefox tool into chrome tool
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimresults = true;

  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('') // Add words together in one string with space
    p.textContent = transcript;

   // Creating empty p for line break, when not speaking anymore.
   if(e.result[0].isFinal){ // isFinal value is from the console devtools, it is boolean
      p = document.createElement('p');
      words.appendChild('p');
   }

   // Add a function to a sertain word, example weather etc.
   if(transcript.includes('kim')){
    console.log('Getting the age of Kim');
   }
  });

// Restarting the voice again if you take a break
recognition.addEventListener('end', recognition.start);
