class StringFormatter {
  constructor(limit = 40) {
    this.limit = limit;
  }
  
  spaces(res, curr) {
    for (let i = 0; i < curr.length - 1; i++)
      curr[i] += ' '

    res.push(curr.join(''))
  }

  format(words) {
    let res = [], curr = [], numLetters = 0
    words = words.split(' ');
      
    for (let w of words) {
      if (w.length > this.limit) {
        throw new Error(`Palavra "${w}" maior que quantidade de caracteres por linha.`)
      }

      if (w === '\n') {
        this.spaces(res, curr, this.limit - numLetters)
        curr = [], numLetters = 0
        res.push(w)
      } else if (numLetters + w.length + curr.length > this.limit) {
        this.spaces(res, curr, this.limit - numLetters)
        curr = [], numLetters = 0
      }

      if (w !== '\n') {
        curr.push(w)
        numLetters += w.length
      }
    }
    this.spaces(res, curr, this.limit - numLetters)

    return res
  }
}

module.exports = StringFormatter
