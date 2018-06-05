import axios from 'axios';

const urlHandler = url => {
  if (url === 'https://err') {
    return Promise.reject({ message: 'This is a mocked error response' });
  }
  const resp = { message: 'success', status: '200' };
  return Promise.resolve({
    data : resp,
  });
};

export default {
  get    : jest.fn(url => {
    return urlHandler(url);
  }),
  put    : jest.fn(url => {
    return urlHandler(url);
  }),
  post   : jest.fn(url => {
    return urlHandler(url);
  }),
  delete : jest.fn(url => {
    return urlHandler(url);
  }),
};
