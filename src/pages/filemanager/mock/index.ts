import Mock from 'mockjs';
import qs from 'query-string';
import setupMock from '@/utils/setupMock';

const { list } = Mock.mock({
  'list|100': [
    {
      id: /[0-9]{8}[-][0-9]{4}/,
      name: () => Mock.Random.ctitle(),
      createdTime: () => Mock.Random.datetime(),
      type: () => Mock.Random.pick(['pdf','csv','excel']),
      size: () => Mock.Random.integer(1000, 3000),
      uploaderId: () => Mock.Random.id(),
      uploaderName: () => Mock.Random.name(),
      location: () => Mock.Random.county()
    },
  ],
});

const filterData = (
  rest: {
    id?: string;
    name?: string;
  } = {}
) => {
  const {
    id
  } = rest;
  if (id) {
    return list.filter((item) => item.id === id);
  }
  return [...list];
};

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/list'), (params) => {
      const {
        page = 1,
        pageSize = 10,
        ...rest
      } = qs.parseUrl(params.url).query;
      const p = page as number;
      const ps = pageSize as number;

      const result = filterData(rest);
      return {
        list: result.slice((p - 1) * ps, p * ps),
        total: result.length,
      };
    });
  },
});
