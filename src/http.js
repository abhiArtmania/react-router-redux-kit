/*Points to check during deployment:
1. Social login AppId
2. API base url
3. Google map API key
*/

export const SocialLoginAppId = {
  facebook: process.env.REACT_APP_FB_LOGIN_APP_ID,
  google:process.env.REACT_APP_GOOGLE_LOGIN_APP_ID,
};

export const googleApiKey = process.env.REACT_APP_GOOGLR_API_KEY;

//server end opint
// REACT_APP_DEV_API_URL='https://ltadev.affleprojects.com/api/v1/'
// REACT_APP_UAT_API_URL='https://ltauat.affleprojects.com/api/v1/'
// REACT_APP_TEST_API_URL='https://ltatest.affleprojects.com/api/v1/'
// REACT_APP_API_UAT_API_URL='https://ltadev.affleprojects.com/api-uat/v1/'
// REACT_APP_PRODUCTION_API_URL='https://ltaapi.affle.com/api/v1/'
export const endPoint = 'https://usvdev.affleprojects.com/testapi/v1/'

export const getApiEndpoint = (url) => endPoint + url;

export const getHeaders = (opts) => {
  let temp_authToken = null;
  if (opts && opts.data && opts.data.activation_temp_token) {
    temp_authToken = opts.data.activation_temp_token;
    delete opts.data.activation_temp_token;
  }
  let headers = {};
  let token =""
  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }
  let customHeaders;
  let propsHeaders = opts.headers ? opts.headers : null;
  if (propsHeaders) {
    customHeaders = { ...propsHeaders, ...headers };
  } else {
    customHeaders = { ...headers };
  }

  if (opts.method === "post" || opts.method === "put") {
    customHeaders.Accept = "application/json";
    customHeaders["Content-Type"] = "application/json";
  }

  if (opts.params) {
    customHeaders["Content-Type"] = "multipart/form-data;";
  }

  if (opts.urlType && opts.urlType == "web") {
    customHeaders["x-api-key"] = "4657yt-Bo1K3-ni2ds-33499";
  }

  if (opts.data && opts.method === "post" && !opts.urlType) {
    // opts.data.system_type = "web";
  }

  let apiHeaders = {
    method: opts.method,
    headers: customHeaders,
    body: !opts.params ? JSON.stringify(opts.data) : opts.data,
    timeout: 10000,
  };

  if (opts.params) {
    apiHeaders.processData = false;
  }
  return apiHeaders;
};

export const request = (url, opts) => {
  if (!url) {
    throw new Error("url is required");
  }
  let apiUrl = getApiEndpoint(url);
  /**
   * Api endpoint changed for getting data from admin panel
   */
  opts.method = opts.method || "get";
  if (opts.data) {
  }
  return fetch(apiUrl, getHeaders(opts))
    .then((response) => response.json())
    .then((res) => {
      if (res.statusCode === 401) {
        if (res.expired) {
          let tkn = ""
          put(`app/respondent/refreshToken`, null, { token: tkn.token })
            .then((resp) => {
              tkn["token"] = resp.data.token;
              localStorage.setItem("authData", JSON.stringify(tkn));
            })
            .catch((err) => {});
          return res;
        } else {
          localStorage.removeItem("authData");
          setTimeout(function() {
            window.location = "/";
          }, 1000);
          return res;
        }
      } else {
          return res;
      }
    })
    .catch((err) => {
      if (err && err.message === "Failed to fetch") {
        throw new Error("Please check your internet connection.");
      }
      return {
        success: false,
        error: "No response from server. Please try again after sometime.",
      };
    });
};

export const get = (url, params, urlType) =>
  request(url, { method: "get", params, urlType });

export const post = (url, params, data, urlType) =>
  request(url, { method: "post", params, data, urlType });

export const put = (url, params, data) =>
  request(url, { method: "put", params, data });

export const del = (url, params, data) =>
  request(url, { method: "delete", params, data });
