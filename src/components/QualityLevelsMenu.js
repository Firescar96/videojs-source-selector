import videojs from 'video.js';
import QualityLevelsItem from './QualityLevelsItem';

const MenuButton = videojs.getComponent('MenuButton');

class QualityLevelsMenu extends MenuButton {
  constructor(player, options = {}) {
    super(player, options);

    const qualityLevels = player.qualityLevels();
    
    qualityLevels.on('addqualitylevel', this.update.bind(this));
    qualityLevels.on('removequalitylevel', this.update.bind(this));
    player.qualityLevelsSelector().on('update', this.update.bind(this))
  }

  createEl() {
    return videojs.dom.createEl('div', {
      className: 'vjs-source-selector vjs-menu-button vjs-menu-button-popup vjs-control vjs-button',
    });
  }

  buildCSSClass() {
    return `${MenuButton.prototype.buildCSSClass.call(this)} vjs-icon-cog`;
  }

  triggerItemUpdate() {
    this.menuItems.forEach(item => item.update());
  }

  createItems() {
    const levels = this.player().qualityLevels();
    this.menuItems = [];

    for(let i = 0; i < levels.length; i++) {
      const index = i;

      let sortVal = index;
      if(levels[index].sortVal) {
        sortVal = parseInt(levels[index].sortVal, 10);
      } else if(levels[index].height) {
        sortVal = parseInt(levels[index].height, 10);
      } else if(levels[index].bitrate) {
        sortVal = parseInt(levels[index].bitrate, 10);
      }

      this.menuItems.push(new QualityLevelsItem(this.player_, {
        index,
        sortVal,
        controller: this,
        label: levels[index].label,
      }));
    }

    //Sort menu items by their label name with Auto always first
    this.menuItems.sort((a, b) => {
      if(a.options_.sortVal < b.options_.sortVal) return 1;
      else return -1;
    });
    return this.menuItems;
  }
}

export default QualityLevelsMenu;
