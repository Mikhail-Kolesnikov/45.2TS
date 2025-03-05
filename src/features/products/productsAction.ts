// файл создан с помощью сниппета rtkat - ReduxToolkitAsyncThunk

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


//создаем асинхронный action действия для запрса данными
//таких действий  может быть несколько на один slice
export const loadProducts = createAsyncThunk(
  'productsAction/loadProducts',
  async (_, thunkAPI) => {
    try {
        //axios - это библиотека упрощающая работу с fetch запрсами
        //запросы происходят компактнее,особенно удобно для post запросов с объемными данными
      const response = await axios.get('https://fakestoreapi.com/products');
      //если запрос прошел авозвращаем данные
      return response.data;
    } catch (error: any) {
        //если произошла ошибка возвращаем сообщение ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
