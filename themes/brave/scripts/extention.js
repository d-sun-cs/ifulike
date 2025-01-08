hexo.extend.generator.register('lovelist', function(locals){
  return {
    path: 'lovelist/index.html',
    data: locals.posts,
    layout: ['lovelist']
  }
});

hexo.extend.generator.register('blessings', function(locals){
  return {
    path: 'blessings/index.html',
    data: locals.posts,
    layout: ['blessings']
  }
});

hexo.extend.generator.register('records', function(locals){
  return {
    path: 'records/index.html',
    data: locals.posts,
    layout: ['records']
  }
});

// 添加相册页面的路由配置
hexo.extend.generator.register('album', function(locals){
  return {
    path: 'album/index.html',
    data: locals.posts,
    layout: ['album']
  }
});