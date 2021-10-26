const { createClient } = require("@astrajs/collections");

const collection = "posts";

exports.handler = async function (even, context, callbacks) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    await posts.create("a post", {
      title: "my first post",
    });
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
