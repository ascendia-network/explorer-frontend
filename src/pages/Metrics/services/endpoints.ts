export const API_ENDPOINTS = {
  TOTAL_METRICS: '/totalMetrics',
};

export enum ChartsEndpoints {
  // Addresses
  activeAddresses = 'graph/activeAddresses/1month',
  monthlyActiveAddresses = 'graph/monthlyActiveAddresses/6months',

  // Transactions
  stakingTxHarbor = '/graph/stakingTxHarbor',
  txNumberDex = '/graph/txNumberDex',
  transactions = '/graph/transactions',

  // TVL
  totalStakeHarbor = '/graph/totalStakeHarbor',
  totalStakeHarborCombined = '/graph/totalStakeHarborCombined',
  tvlStaking = '/graph/tvlStaking',
  tvlApollo = '/graph/tvlApollo',
  tvlDex = '/graph/tvlDex',
  tvl = '/graph/tvl',
}
