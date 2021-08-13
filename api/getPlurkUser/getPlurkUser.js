// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Parser = require('rss-parser');
const parserInst = new Parser();
const handler = async (event) => {
  const params = event.path.split('/');
  const idx = params.indexOf('getPlurkUser');
  const [id] = params.splice(idx + 1);
  try {
    if (!id) {
      throw new Error('param lost');
    }
    let feed = await parserInst.parseURL(`https://www.plurk.com/${id}.xml`);
    feed.items.reverse();
    return {
      statusCode: 200,
      body: JSON.stringify(feed.items),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
