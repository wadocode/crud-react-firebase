import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseconfig/firebase'
const Edit = () => {
  const [ descripcion, setDescripcion ] = useState('')
  const [ stock, setStock ] = useState(0)

  const navigate = useNavigate()    
  const {id} = useParams()

  const update = async (e) => {
      e.preventDefault()
      const product = doc(db, "products", id)
      const data = {description: descripcion, stock: stock}
      await updateDoc(product, data)
      navigate('/')
  }
  const getProductById = async (id) => {
    const product = await getDoc( doc(db, "products", id) )
    if(product.exists()) {
        //console.log(product.data())
        setDescripcion(product.data().descripcion)    
        setStock(product.data().stock)
    }else{
        console.log('El producto no existe')
    }
}

useEffect( () => {
    getProductById(id)
    // eslint-disable-next-line
}, [])


  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Edit Product</h1>
             <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={descripcion}
                        onChange={ (e) => setDescripcion(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>  

                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input
                        value={stock}
                        onChange={ (e)=> setStock(e.target.value)} 
                        type="number"
                        className='form-control'
                    />                 
                </div>  
                <button type='submit' className='btn btn-primary'>Update</button>
             </form>   
        </div>
    </div>
</div> 
  )
}

export default Edit