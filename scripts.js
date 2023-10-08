let sppeech=new SpeechSynthesisUtterance();

let voices=[];
let voiceselect=document.querySelector('select');
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    sppeech.voice=voices[0];

    voices.forEach((voice,i)=>(voiceselect.options[i]=new Option(voice.name,i)));
};

voiceselect.addEventListener('change',()=>{
    sppeech.voice=voices[voiceselect.value];
})
document.querySelector('button').addEventListener('click',()=>{
    sppeech.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(sppeech);
})