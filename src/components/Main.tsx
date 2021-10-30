import React from 'react'
import { Button, Table } from 'antd'

export const Main = () => {
  const colums = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      sorter: (a: any, b: any) => a.rank - b.rank,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'priceUsd',
      key: 'priceUsd',
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCapUsd',
      key: 'marketCapUsd',
    },
    {
      title: 'VWAP (24Hr)',
      dataIndex: 'vwap24Hr',
      key: 'vwap24Hr',
    },
    {
      title: 'Supply',
      dataIndex: 'supply',
      key: 'supply',
    },
    {
      title: 'Volume (24Hr)',
      dataIndex: 'volumeUsd24Hr',
      key: 'volumeUsd24Hr',
    },
    {
      title: 'Change (24Hr)',
      dataIndex: 'changePercent24Hr',
      key: 'changePercent24Hr',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (key: any) => <Button key={key}>+</Button>
    },
  ]
  const data = [
      {
        key: '0',
        id: "bitcoin",
        rank: "1",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '1',
        id: "bitcoin",
        rank: "2",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '2',
        id: "bitcoin",
        rank: "3",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '3',
        id: "bitcoin",
        rank: "4",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '4',
        id: "bitcoin",
        rank: "5",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '5',
        id: "bitcoin",
        rank: "6",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '6',
        id: "bitcoin",
        rank: "7",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
      {
        key: '7',
        id: "bitcoin",
        rank: "8",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209"
      },
    ]
  return (
  <div className="main">
    <div className="app__container">
      <Table className="main__table" columns={colums} dataSource={data} pagination={false} size="small" />
    </div>
  </div>
  )
}