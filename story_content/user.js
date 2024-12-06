function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fkLRUNTybW":
        Script1();
        break;
      case "5s4g5EjFoBK":
        Script2();
        break;
      case "67gLFtdSCc3":
        Script3();
        break;
      case "5tjPybFJqaZ":
        Script4();
        break;
      case "5YkJqQi6IsG":
        Script5();
        break;
      case "6m7s5Ns46BS":
        Script6();
        break;
  }
}

function Script1()
{
  if (typeof window.backgroundAudio === 'undefined') {
    window.backgroundAudio = new Audio('musik.mp3'); 
    window.backgroundAudio.loop = true; 
    window.backgroundAudio.play()
        .then(() => console.log("Audio started successfully."))
        .catch(err => console.error("Audio failed to play:", err));
}

}

function Script2()
{
  _g.trigger("volume.changed", Getplayer().GetVar("volume"));
}

function Script3()
{
  if (typeof window.backgroundAudio === 'undefined') {
    window.backgroundAudio = new Audio('musik.mp3'); 
    window.backgroundAudio.loop = true;
    window.backgroundAudio.play()
        .then(() => console.log("Audio restarted successfully."))
        .catch(err => console.error("Audio failed to restart:", err));
}

}

function Script4()
{
  _g.trigger("volume.changed", Getplayer().GetVar("Volume"));
}

function Script5()
{
  if (typeof window.backgroundAudio === 'undefined') {
    window.backgroundAudio = new Audio('musik.mp3');
    window.backgroundAudio.loop = true;
    window.backgroundAudio.play()
        .then(() => console.log("Audio restarted successfully."))
        .catch(err => console.error("Audio failed to restart:", err));
}

}

function Script6()
{
  if (typeof window.backgroundAudio !== 'undefined') {
    window.backgroundAudio.pause();
    window.backgroundAudio.currentTime = 0;
    delete window.backgroundAudio;
    console.log("Audio stopped successfully.");
}

}

