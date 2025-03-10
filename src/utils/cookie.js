const setCookie = (tokens) => {
  document.cookie = `accesstoken=${tokens.accessToken}, max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshtoken=${tokens.refreshToken}, max-age=${
    30 * 24 * 60 * 60
  }`;
};
export { setCookie };
