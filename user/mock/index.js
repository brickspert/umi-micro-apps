import mockjs from 'mockjs';

export default {
  'GET /api/user/list': mockjs.mock({
    'data|100': [
      {
        'id|+1': 1,
        name: '@cname',
        address: '@city',
      },
    ],
  }),
  'GET /api/user/detail': mockjs.mock({
    'data': {
      name: '@cname',
      address: '@city',
      create: '@datetime',
      year: '18',
    },
  }),
};
