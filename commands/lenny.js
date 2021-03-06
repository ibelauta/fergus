const stars = require('../util/stars.js');

module.exports.run = (message, args) => {
  let times = 1;
  if (args.length > 0) {
    if (!isNaN(parseInt(args[0]))) {
      times = [1, 10, parseInt(args[0])].sort((a, b) => a - b)[1]; // get median
    }
  }
  message.channel.sendMessage(stars.stars(times, '( ͡° ͜ʖ ͡°)'));
};
