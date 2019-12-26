import axios from "axios";
let baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://sticker.gs-souvenir.com';
let timeOut = 20000;

// 基本配置
axios.defaults.timeout = timeOut;
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = baseUrl;

axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.resolve(err);
});
axios.interceptors.response.use(data => {
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
