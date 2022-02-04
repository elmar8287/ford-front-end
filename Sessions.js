// eslint-disable-next-line import/prefer-default-export

export const goBack = () => {
  isConnect().then((data) => {
    if (data !== true) {
      window.location.href = '/login';
    }
    return true;
  });
};
