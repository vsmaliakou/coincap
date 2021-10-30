import { TablePaginationConfig } from 'antd';

type GetListsPaginationType = (
  onChangePage: (limit: number, offset: number, page: number) => void,
  itemsPerPage: number,
  total?: number,
  current?: number
) => TablePaginationConfig | false;

const getListsPagination: GetListsPaginationType = (
  onChangePage: (limit: number, offset: number, page: number) => void,
  itemsPerPage: any,
  total: any,
  current: any
) => {
  const currentPage = current ? { current } : {};

  return total && total > itemsPerPage
    ? {
        ...currentPage,
        hideOnSinglePage: true,
        showSizeChanger: false,
        position: ['bottomRight'],
        onChange: (page) => onChangePage(itemsPerPage, itemsPerPage * (page - 1), page),
        pageSize: itemsPerPage,
        total,
      }
    : false;
};

export const PaginationHelper = { getListsPagination };