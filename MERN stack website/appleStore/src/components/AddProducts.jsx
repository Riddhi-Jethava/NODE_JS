import React, { useState } from 'react';
import axios from 'axios';
import { RiImageAddLine, RiSave3Line } from 'react-icons/ri'; // Remix Icons
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    // image: null,
  });

  const navigate = useNavigate()

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle file input
  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Done to submit");

    try {
      const response = await axios.post(
        "http://localhost:1001/addProducts",
        {
          name: product.name,
          description: product.description,
          price: product.price,
          // image : product.image,
        },
      );
      navigate('/store')
      // setProduct({
      //   name: '',
      //   description: '',
      //   price: '',
      // })
      alert('Product Added Successfully');

    } catch (err) {
      console.log("Error While signing http://localhost:1001/addProducts");
      console.log(err);
      alert('Product not added, try again');
    }
  };

  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
      <h2 className='text-center'>Add New Product</h2>
      <form onSubmit={handleSubmit} style={styles.form} className='shadow-lg w-[40%] h-auto p-5'>
        <div className='flex flex-col'>
          <label className='mb-2 mt-5'>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className='border p-3 mb-4 rounded-lg'
            required
          />
        </div>
        <div>
          <label>Description</label> <br />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className='border mt-2 p-3 rounded-lg w-[100%]'
            required
          />
        </div>
        <div className='flex flex-col'>
          <label
            className='mt-3'>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className='border p-3 mt-2 rounded-lg'
            required
          />
        </div>
        <div>
          <label>Product Image</label>
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className='border py-3 rounded-lg mt-5 ms-3'
          /> */}
          {/* <div style={styles.iconPreview}>
            <RiImageAddLine size={40} color="#888" />
          </div> */}
        </div>
        <button type="submit" className='w-full' style={styles.submitButton}>
          <RiSave3Line size={20} style={{ marginRight: '8px' }} />
          Save Product
        </button>
      </form>
    </div>
  );
};

const styles = {

  iconPreview: {
    // marginTop: '15px',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '60px',
    // backgroundColor: '#1a1a1a',
    // borderRadius: '8px',
    // border: '1px dashed #555',
  },
  submitButton: {
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#0071e3',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    transition: 'background-color 0.3s ease',
  },
};

export default ProductForm;
