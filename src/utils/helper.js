import axios from 'axios';
function searchGit(add){
  let address = `https://api.github.com/users/${add}`
  return axios.get(address)
  .then((res)=>(
    { getData:res.data }
  ))
  .catch(function (error) {
    alert(error);
  })
}
export {searchGit };

function getJson() {
  let address = `https://raw.githubusercontent.com/songyuhan0914/9-18/master/card.json?${Math.random()}`;
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

export { getJson };

function getmd(add) {
  let address = `https://raw.githubusercontent.com/songyuhan0914/9-18/master/blog/${add}.md`;
  return axios.get(address)
    .then( (res) => (
      { getmd:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

export { getmd };
