import mockjs from 'mockjs';

export default {
  'GET /api/shop/list': mockjs.mock({
    'data|100': [
      {
        'id|+1': 1,
        name: '@cword(3, 5)',
        address: '@city',
      },
    ],
  }),
  'GET /api/shop/detail': mockjs.mock({
    'data': {
      name: '@cname',
      address: '@city',
      create: '@datetime',
      url: '@url',
    },
  }),
};
