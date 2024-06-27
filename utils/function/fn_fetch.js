
fetch('https://json-placeholder.mock.beeceptor.com/posts')
.then(response=> response.json())
.then(data=> console.log(data))
.catch(error=> console.error('Ocorreu o erro: ', error));
// OK


fetch('https://api.example.com/data')
.then(response=> response.json())
.then(data=> console.log(data))
.catch(error=> console.error('Ocorreu o erro: ', error));
// Error

/*
Ocorreu o erro:  TypeError: fetch failed
    at node:internal/deps/undici/undici:12502:13
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  [cause]: Error: getaddrinfo ENOTFOUND api.example.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'api.example.com'
  }
}
*/