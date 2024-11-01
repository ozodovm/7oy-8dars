import {} from 'react'

import './App.css'
import { useAddProductsMutation, useDeleteProductMutation, useGetAllProductsQuery } from './store/productsApi'
import { Button, Input } from 'antd'

function App() {
  
  const {data = []} = useGetAllProductsQuery()
  const [saveProducts] = useAddProductsMutation()
  const [deleteProduct] = useDeleteProductMutation()


 function handleSubmit(e){
  e.preventDefault()
  const data1 = {
    title:e.target.title.value
  }
  saveProducts(data1)
 e.target.reset()
 }
  

 const handleDelete = (id) => {
  deleteProduct(id);
};


  return (
    <div className=' flex flex-col items-center mt-7'>
       <form onSubmit={handleSubmit} className='flex items-center space-x-2'>
        <Input name='title' size='large' className='w-[300px]' placeholder='Typing...' allowClear/>  
        <Button size='large'  type='primary'>Add</Button>
       </form>

        <ul className=''>
         {data.map(item => (
          <li key={item.id} className='w-[365px] mt-[10px] flex justify-between    font-bold text-[20px]'>
            {item.title}
            <Button onClick={() => handleDelete(item.id)} className='bg-red-600 text-white'>Delete</Button>
            </li>
        ))}
       </ul>

    </div>
  )
}

export default App








