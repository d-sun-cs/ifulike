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
    data: { album_collections: hexo.theme.config.album_collections }, // 传递 album_collections 数据
    layout: ['album']
  }
});

// 在 register 的回调函数内部获取 album_collections 对象，然后进行遍历注册
hexo.extend.generator.register('album-collections', function(locals){
  const collections = hexo.theme.config.album_collections;
  if (collections) {
    return collections.map((collection, index) => {
      return {
        path: `album-collection/${index}/index.html`,
        data: { index: index }, // 传递 index 参数
        layout: ['album-collection']
      };
    });
  }
});