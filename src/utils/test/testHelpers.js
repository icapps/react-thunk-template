class TestHelpers {
  static storageMock = () => {
    const storage = {};
    storage.getItem = key => {
      return key in storage ? storage[key] : null;
    };
    storage.setItem = (key, value) => {
      storage[key] = value || '';
    };
    return storage;
  };
}

export default TestHelpers;
