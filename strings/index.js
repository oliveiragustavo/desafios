const StringFormatter = require('./src/StringFormatter')
const IdwallFormatter = require('./src/IdwallFormatter')

const DEFAULT_INPUT_TEXT = `In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. \n \
And God said, 'Let there be light' and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light 'day,' and the darkness he called 'night.' And there was evening, and there was morning - the first day.`;
const DEFAULT_LIMIT = 40;
const DEFAULT_JUSTIFY = true;

let text = DEFAULT_INPUT_TEXT;
let limit = DEFAULT_LIMIT;
let justify = DEFAULT_JUSTIFY;

try {
  switch (process.argv.length) {
    case 2:
      break;
    case 3:
      text = process.argv[2];
      break;
    case 4:
      text = process.argv[2];
      limit = Integer.parseInt(process.argv[3]);
      break;
    case 5:
      text = process.argv[2];
      limit = parseInt(process.argv[3]);
      justify = JSON.parse(process.argv[4]);
      break;
    default:
      throw new Error(`Muitos parämetros, vide README.`)
  }

  console.log('Inputs: ');
  console.log('Text: ' + text);
  console.log('Limit: ' + limit);
  console.log('Should justify: ' + justify);
  console.log('=========================');

  if (justify) {
    // Run IdwallFormatter
    const sf = new IdwallFormatter(limit);
    const outputText = sf.format(text);

    console.log('Output: ');
    outputText.map(elem => console.log(elem));
  } else {
    // Run StringFormatter
    const sf = new StringFormatter(limit);
    const outputText = sf.format(text);
    
    console.log('Output: ');
    outputText.map(elem => console.log(elem));
  }
} catch (err) {
  console.log(err)
}
