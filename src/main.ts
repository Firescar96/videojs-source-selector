// import './style.css'
import videojs from 'video.js';
import 'videojs-contrib-quality-levels'
import './plugin.js';

let player = window.player = videojs('videojs-source-selector-player', {
  preload: 'metadata',
  html5: {
    vhs: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false
  }
});

player.on('loadedmetadata', () => {
  const qualityLevels = player.qualityLevels()
  qualityLevels.levels_.forEach(level => {
    level.label = level.height + 'p'
  })
})

player.qualityLevelsSelector();

function loadStream(){
  player.src({ type: "application/x-mpegURL", src: document.getElementById("streamURL").value });
}
window.loadStream = loadStream;