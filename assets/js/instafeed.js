var userFeed = new Instafeed({
  get: 'user',
  userId: '320305577',
  accessToken: '320305577.1677ed0.b40a96314fbf4cabbf5afa283628ef6a',
  limit: 8,
  resolution: 'low_resolution',
  template: '<a target="_blank" href="{{link}}"><img src="{{image}}"/></a>'
});

userFeed.run();
