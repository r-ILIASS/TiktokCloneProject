const { createClient } = require("@astrajs/collections");

exports.handler = async function (event, context) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const messageCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("messages");

  try {
    const message = await messageCollection.create("hello message", {
      text: "hello friends",
    });
    return {
      statusCode: 200,
      body: JSON.stringify(message),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
