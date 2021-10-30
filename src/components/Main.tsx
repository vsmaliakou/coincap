import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import { getDataTC } from '../reducers/main-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../store'
import { PackageType } from '../api/coincap-api'
import { transformationHelper } from './helpers/transformation.helper'
import { PaginationHelper } from './helpers/pagination.helper'

export const Main = () => {
  const ITEMS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const data = useSelector<AppRootStateType, PackageType[]>(state => state.main.data)

  const dispatch = useDispatch()

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

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
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

  useEffect(() => {
    dispatch(getDataTC())
    const timerId = setInterval(() => {
      dispatch(getDataTC())
    }, 7000)
    return () => clearInterval(timerId)
  }, [dispatch])

  const reloadCollection = (newParams?: Partial<any>) => {
    const params: any = { limit: ITEMS_PER_PAGE };

    dispatch(getDataTC({ ...params, ...newParams }));
  };

  const onChangePage = (limit: number, offset: number, page: number) => {
    setCurrentPage(page);
    reloadCollection({ limit, offset });
  };

  const pagination = PaginationHelper.getListsPagination(
    onChangePage,
    ITEMS_PER_PAGE,
    data.length,
    currentPage
  );

  return (
  <div className="main">
    <div className="app__container">
      <Table className="main__table" columns={columns} dataSource={dataSource} pagination={pagination} size="small" />
    </div>
  </div>
  )
}
