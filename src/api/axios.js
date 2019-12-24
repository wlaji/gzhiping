import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
  return config;
}, err => {
  Message.error({message: 'The request timeout!'});
  return Promise.resolve(err);
});

axios.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.ret === 0) {
    
  }
  if (data.status && data.status === 200 && data.data.ret === 401) {
  
  }
  return data;
}, err => {

  return Promise.reject(err.response.data);
});

const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: params,
      transformRequest: [
        function (data) {
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        }
      ],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e.data);
      });
  });
};

const uploadFile = (url, params, config={}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e.data);
      });
  });
};

const put = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: url,
      data: params,
      transformRequest: [
        function (data) {
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        }
      ],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e.data);
      });
  });
};

const get = url => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: url
    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e.data);
      });
  });
};

export default {
  post,
  uploadFile,
  put,
  get
};
