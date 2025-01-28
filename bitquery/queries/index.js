const { gql, GraphQLClient } = require('graphql-request');

const graphQLClient = new GraphQLClient('https://graphql.bitquery.io/', {
  headers: {
    'X-API-KEY': 'YOUR-API-KEY',
  },
});

const getLastBlockTS = async () => {
  const query = gql`
    {
      ethereum(network: bsc) {
        blocks(options: { limit: 1, desc: "timestamp.unixtime" }) {
          timestamp {
            second
            unixtime
          }
        }
      }
    }
  `;

  try {
    const res = await graphQLClient.request(query);

    const lastBlock = res.ethereum.blocks[0].timestamp;

    return lastBlock;
  } catch (error) {
    console.log('ERR', error);

    return [];
  }
};

const getNumberOfTrades = async () => {
  const query = gql`
    {
      ethereum(network: bsc) {
        transfers(
          receiver: { is: "0x30016a1764c93eedccbee5e1b3835f191c6f4050" }
        ) {
          count
        }
      }
    }
  `;

  try {
    const res = await graphQLClient.request(query);

    const lastBlock = res.ethereum.transfers[0].count;

    return lastBlock;
  } catch (error) {
    console.log('ERR', error);

    return [];
  }
};

module.exports = {
  getLastBlockTS,
  getNumberOfTrades,
};
