// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Parser = require('rss-parser');
const parserInst = new Parser();
const handler = async (event) => {
  try {
    const userAcc = event.queryStringParameters.id;
    let feed = await parserInst.parseURL(
      `https://www.plurk.com/${userAcc}.xml`,
    );
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
