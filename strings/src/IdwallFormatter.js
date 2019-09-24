const StringFormatter = require('./StringFormatter')

class IdwallFormatter extends StringFormatter {
  constructor(limit = 40) {
    super();
    this.limit = limit;
  }
  
  spaces(res, curr, spacesJustify) {
    const words_amout = curr.length - 1;
    for (let i = 0; i < spacesJustify; i++)
      curr[i % words_amout] += ' '

    res.push(curr.join(''))
  }
}

module.exports = IdwallFormatter
