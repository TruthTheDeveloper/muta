export const handleRequest = async (promise: Promise<any>): Promise<any> => {
  console.log('handle request got in');
  return new Promise<void>(async (resolve, reject) => {
    try {
      const response = await promise;
      console.log('raw response', JSON.stringify(response.data, null, 2));

      // check if data status is true, if it is true, then response has data else response maybe fullfilled but has an error
      if (!response.data?.error) {
        resolve(response);
      } else {
        reject(response);
      }
    } catch (error) {
      console.log('handle request error',error?.message);

      reject(error);
    }
  });
};
