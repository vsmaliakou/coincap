import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataTC, removeCoinTC } from '../reducers/portfolio-reducer'
import { AppRootStateType } from '../store'

type PropsType = {
    toggle: () => void
}

export const Portfolio: React.FC<PropsType> = (props) => {
  const {toggle} = props
  const data = useSelector<AppRootStateType, any[]>(state => state.portfolio.data)

  const dispatch = useDispatch()

  const columns = [
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
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Total ($)',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (a: any, record: any) => <button className="portfolio__remove" key={record.key} onClick={() => handleClick(record.key)}>×</button>
    },
  ]

  useEffect(() => {
    dispatch(getDataTC())
  }, [dispatch])

  const handleClick = (key: string) => {
    dispatch(removeCoinTC(key))
  }

  return (
  <div className="portfolio">
    <div className="portfolio__container">
      <p className="portfolio__title">Portfolio</p>
      <Table columns={columns} dataSource={data} size="small" pagination={false}/>
      <button className="portfolio__cancel" onClick={toggle}>Cancel</button>
    </div>
  </div>
  )
}