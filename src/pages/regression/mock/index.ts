import Mock from 'mockjs';
import qs from 'query-string';
import setupMock from '@/utils/setupMock';

const { list } = Mock.mock({
  'list|100': [
    {
      id: /[0-9]{8}[-][0-9]{4}/,
      question: () => Mock.Random.paragraph(),
      answer: () => Mock.Random.paragraph(),
      expectedAnswer: () => Mock.Random.paragraph(),
      policy: () => Mock.Random.pick(['COI','RSS']),
      score: () => Mock.Random.float(0, 1, 3, 3),
    },
  ],
});

const filterData = (
  rest: {
    id?: string;
    question?: string;
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
