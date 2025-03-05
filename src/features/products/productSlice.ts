import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../components/store/Store';
import { loadProducts } from './productsAction';
import { Iproduct } from '../../components/products/Products';

interface IProductsState{
    products: Iproduct[];
    isLoading: boolean;
    error: string;
    
}

//начальное состояние для данных, котрые будут хранить state
//менеджер redux

const initialState: IProductsState = {
    //сами данные
  products: [],
  //индикатор загрузки
  isLoading: false,
  //возможная информация об ошибках 
  error: '',
};

export const productSlice = createSlice({
    //уникальное имя для sloce файла
  name: 'productSlice',
  //подключаем объкт initialState с данными
  initialState,
  //здесь будут описаны синхронные действия 
  //ключ обязательный даже если синхронных действий нет
  reducers: {},
  //здесь будут описаны асинхронные действия импортированные из 
  //файла с action
  extraReducers: (builder) => {
    builder
    //! запрос за данными
      .addCase(loadProducts.pending, (state) => {
        //меняем индикатор загрузки на true в случае pending
        //(запрос за данными ушел, но ешще не известен ответ)
        state.isLoading = true;
      })
      //! успех
      .addCase(loadProducts.fulfilled, (state, action) => {
        //выключаем индикатор загрузки при получении данных
        state.isLoading = false
        //кладем данные в state
        state.products = action.payload;
      })
      //! ошибка
      .addCase(loadProducts.rejected, (state, action) => {
        //выключаем индикатор загрузки при ошибке
        state.isLoading = false
        //чистим стейт оо данных
        state.products = []
        //отпраляем текст ошибки по ключу error
        state.error = action.payload as string
      })
  },
});

export default productSlice;
export const { } = productSlice.actions