async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const response = await fetch(url);
  const body = await response.json();
  document.writeln(body.name);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
