# @firescar96/videojs-quality-selector

THIS PROJECT IS FUNCTIONAL and being used in production BUT EXPECT BREAKING CHANGES until I can straighten out 2 years of neglect.

[![NPM](https://nodei.co/npm/@firescar96/videojs-quality-selector.png)](https://nodei.co/npm/@firscar96/videojs-quality-selector)

VideoJS plugin that leverages videojs-contrib-quality-levels plugin to offer manual user-selectable level selection options for adaptive http streams.


![Alt text](example.png "Source selector")

Compatible with vjs 7 and up.

### Labels:
Level labels are generated from the ```id``` and ```label``` metadata parsed from the stream QualityLevels sources.


# Installation

```sh
npm install --save videojs-contrib-quality-levels
npm install --save @firescar96/videojs-quality-selector
```

# Dependencies
Requires videojs-contrib-quality-levels

# Usage

To include videojs-quality-selector on your website or web application, use any of the following methods.

### `<script>` tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available. You can configure the plugin with the options described above.  

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-quality-selector.min.js"></script>
<script src="//path/to/videojs-contrib-quality-levels.min.js"></script>
<script>
  var options =
  {
    // no options are allowed for now, but in the future options can be placed here
    // plugins: {
    //   httpSourceSelector: {}
    // }
  };
  var player = videojs('my-video', options);
  player.httpSourceSelector();
</script>
```


### Building from src
To build, checkout the repo, run ```npm install``` && ```npm start```,
go to localhost:9999 (or the next free port) and test out the plugin.

### Pushing
* ```npm install```
* ```npm build```
* ```npm version major/minor/patch```
* ```git push origin master --tags```
* ```npm publish```

## License

MIT. Copyright (c) Justin Fujita, Nchinda Nchinda;
