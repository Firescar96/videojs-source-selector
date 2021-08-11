import videojs from 'video.js';

const MenuItem = videojs.getComponent('MenuItem');

class QualityLevelsItem extends MenuItem {
  constructor(player, options) {
    super(player, options);
    this.selectable = true;
    this.update();
  }

  handleClick() {
    const qualityLevels = this.player().qualityLevels();

    if(this.options_.label == 'auto') {
      qualityLevels.levels_.forEach(level => {
        level.enabled = true
      });
    } else {
      for(let i = 0; i < qualityLevels.length; i++) {
        if(this.options_.index === i) {
          qualityLevels[i].enabled = true;
        } else {
          qualityLevels[i].enabled = false;
        }
      }
    }
    
    qualityLevels.selectedIndex_ = this.options_.index;
    qualityLevels.trigger({ type: 'change', selectedIndex: this.options_.index });


    this.options_.controller.triggerItemUpdate();
  }

  update() {
    const qualityLevels = this.player().qualityLevels();
    this.selected(this.options_.index == qualityLevels.selectedIndex);
  }
}

export default QualityLevelsItem;
