import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt'

const encryptor = createEncryptor({
  secretKey: 'chave_criptografia',
})

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'boilerplate',
      storage,
      transforms: [encryptor],
    },
    reducers
  );

  return persistedReducer;
}