import videojs from 'video.js';
import {version} from '../package.json'
import QualityLevelsMenu from './components/QualityLevelsMenu';
import QualityLevelsItem from './components/QualityLevelsItem';

const Plugin = videojs.getPlugin('plugin');

class QualityLevelsSelector extends Plugin {

  constructor(player, options) {
    super(player, options);

    player.addClass('vjs-quality-selector');

    videojs.registerComponent('QualityLevelsItem', QualityLevelsItem);
    videojs.registerComponent('QualityLevelsMenu', QualityLevelsMenu);

    player.on(['loadedmetadata'], (e) => {
      //hack for plugin idempodency... prevents duplicate menubuttons from being inserted into the player if multiple player.httpSourceSelector() functions called.
      if(player.videojs_http_source_selector_initialized !== 'undefined' && player.videojs_http_source_selector_initialized !== true) {
        player.videojs_http_source_selector_initialized = true;
        const { controlBar } = player;
        const fullscreenToggle = controlBar.getChild('fullscreenToggle').el();
        controlBar.el().insertBefore(controlBar.addChild('QualityLevelsMenu').el(), fullscreenToggle);
      }
    });
  }
}

QualityLevelsSelector.VERSION = version;
videojs.registerPlugin('qualityLevelsSelector', QualityLevelsSelector);

export default QualityLevelsSelector;