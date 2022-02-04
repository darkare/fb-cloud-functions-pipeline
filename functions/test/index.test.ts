import 'jest'

require("firebase-functions-test")(
    {
      databaseURL: "1",
      storageBucket: "1",
      projectId: "1",
    },
    // "serviceAccountKey.json"
  );
  
import * as index from '../src'

describe('index test suite', ()=> {
 test('1+ 1', ()=> {
     expect(1+1).toBe(2);
 }),
 test('hello',()=> {

     const req = {
        headers: { authorization: 'Bearer 1234567890' },
        body: {}
      };
  
      const mockResponse = () => {
        const res: any = {};
        res.status = jest.fn((statusCode: any) => {
          res.statusCode = statusCode;
          return res;
        });
  
        res.send = jest.fn((e) => {
          res.data = e;
          return res;
        });
        return res;
      };
  
      const mRes = mockResponse();
      index.helloWorld(req as any, mRes as any);
      expect (mRes.data).toBe('Hello Daryl v1.1 from Firebase!');
 })

})
