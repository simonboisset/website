export function download(obj){
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
  var a = document.createElement('a');
  a.href = 'data:' + data;
  a.download = 'data.json';
  a.innerHTML = 'download JSON';
  a.style = "display: none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
