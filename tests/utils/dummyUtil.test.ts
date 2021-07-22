import { dummyUtil } from '../../src/utils/dummyUtil';

it('Should work', () => {
  expect(dummyUtil()).toStrictEqual('Im a dummy util function');
});
