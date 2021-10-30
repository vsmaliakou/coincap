import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { getDataTC } from '../reducers/main-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../store'
import { PackageType } from '../api/coincap-api'
import { transformationHelper } from './helper'

export const Main = () => {
  const data = useSelector<AppRootStateType, PackageType[]>(state => state.main.data)

  const dataSource = data.map(item => {
    return {
      key: item.id,
      rank: item.rank,
      name: item.name,
      price: '$' + (+item.priceUsd).toFixed(2),
      marketCap: '$' + transformationHelper(+item.marketCapUsd),
      vwap: '$' + (+item.vwap24Hr).toFixed(2),
      supply: transformationHelper(+item.supply),
      volume: '$' + transformationHelper(+item.volumeUsd24Hr),
      change: (+item.changePercent24Hr).toFixed(2) + '%'
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataTC())
    const timerId = setInterval(() => {
      dispatch(getDataTC())
    }, 7000)
    return () => clearInterval(timerId)
  }, [dispatch])


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
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCap',
      key: 'marketCap',
    },
    {
      title: 'VWAP (24Hr)',
      dataIndex: 'vwap',
      key: 'vwap',
    },
    {
      title: 'Supply',
      dataIndex: 'supply',
      key: 'supply',
    },
    {
      title: 'Volume (24Hr)',
      dataIndex: 'volume',
      key: 'volume',
    },
    {
      title: 'Change (24Hr)',
      dataIndex: 'change',
      key: 'change',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (key: any) => <Button key={key}>+</Button>
    },
  ]
  
  return (
  <div className="main">
    <div className="app__container">
      <Table className="main__table" columns={colums} dataSource={dataSource} pagination={false} size="small" />
    </div>
  </div>
  )
}
