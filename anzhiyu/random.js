var posts=["2024/08/11/hello-world/","2024/08/14/study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };