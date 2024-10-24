import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoBagOutline } from "react-icons/io5";
import logo from '../assets/images/Logo.png';
import axios from 'axios';

function Store() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const user = JSON.parse(sessionStorage.getItem('user'))


  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products
  const fetchProducts = () => {
    axios.get('http://localhost:1001/showProducts')
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  // Function to handle edit button click
  const handleEditClick = (product) => {
    setEditingProductId(product._id);
    setEditedProduct(product);
  };

  // Function to handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = () => {
    axios.put(`http://localhost:1001/editProduct?id=${editingProductId}`, editedProduct)
      .then((res) => {
        console.log("Product updated successfully:", res.data);
        setEditingProductId(null);
        fetchProducts(); // Refresh the product list after updating
      })
      .catch((err) => console.log("Error updating product:", err));
  };

  // Function to handle cancel button click
  const handleCancelClick = () => {
    setEditingProductId(null);
  };

  // Function to handle delete product
  const handleDelete = (productId) => {
    axios.delete(`http://localhost:1001/deleteProduct?id=${productId}`)
      .then((res) => {
        console.log("Product deleted successfully:", res.data);
        fetchProducts(); // Refresh the product list after deletion
      })
      .catch((err) => console.log("Error deleting product:", err));
  };

  return (
    <div className='bg-gray-100'>
      <header>
        <nav className='sticky top-0 left-0' id='nav'>
          <ul className='w-[72%] m-auto'>
            <li className='flex justify-evenly p-3 text-[12px] text-gray-300'>
              <Link to='/home'><img src={logo} alt="" className='w-[16px]' id='logo' /></Link>
              <Link to='/store'><a href="">Store</a></Link>
              <a href="">Mac</a>
              <a href="">iPad</a>
              <a href="">iPhone</a>
              <a href="">Watch</a>
              <a href="">AirPods</a>
              <a href="">Tv & Home</a>
              <a href="">Entertainment</a>
              <a href="">Accessories</a>
              <a href="">Support</a>
              {
                user.email === 'riddhijethava08@gmail.com' &&
                <>
                  <a href="addProduct">add Product</a>
                </>
              }
              <a href="" className='text-lg'><IoBagOutline /></a>
            </li>
          </ul>
        </nav>
        <div className="shop text-center p-3 text-white">
          <h5>Celebrate with up to ₹10000.00 instant cashback with eligible cards.* Plus up to 12 months of No Cost EMI.‡ <a href="" className='text-blue-400'>Shop</a></h5>
        </div>
      </header>

      <div className='border-black h-auto'>
        <div className='w-[80%] m-auto flex justify-between items-center mt-5 pt-5'>
          <div>
            <h1 className='text-[45px] text-[#6a696d] font-semibold'><span className='text-[#8405cd]'>Store.</span> The best place to start <br /> your festive shopping.</h1>
          </div>
          <div className='text-[14px]'>
            <div className='flex items-center mt-2 mb-3'>
              <div className='border rounded-full me-2'><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202309_AV3?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1701194050300" alt="" className='rounded-full' /></div>
              <div>
                <h6 className='font-semibold'>Need a shoping help?</h6>
                <h6><a href="" className='text-blue-800'>Ask a Specialist</a></h6>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='border p-4 rounded-full me-2'></div>
              <div>
                <h6 className='font-semibold'>Visit an Apple Store</h6>
                <h6><a href="" className='text-blue-800'>Find one near you </a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='storeImg' className='h-[260px] flex justify-evenly items-center text-center'>
        <div></div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666" alt="" />
          <h6 className='font-semibold text-[15px]'>Mac</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1723857138464" alt="" />
          <h6 className='font-semibold text-[15px]'>iPhone</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875" alt="" />
          <h6 className='font-semibold text-[15px]'>iPad</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838" alt="" />
          <h6 className='font-semibold text-[15px]'>Watch</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838" alt="" />
          <h6 className='font-semibold text-[15px]'>AirPods</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" />
          <h6 className='font-semibold text-[15px]'>AirTag</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" />
          <h6 className='font-semibold text-[15px]'>Apple Tv 4K</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" />
          <h6 className='font-semibold text-[15px]'>HomePod</h6>
        </div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174" alt="" />
          <h6 className='font-semibold text-[15px]'>Accessories</h6>
        </div>
        <div></div>
      </div>

      <div className='w-[90%] m-auto mt-10'>
        <h1 className='text-[23px] font-semibold ms-5'>
          <span className='text-[#8405cd]'>The latest.</span> Fresh arrivals to brighten up the festivities.
        </h1>

        {/* Display Products in Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
          {products.map((product) => (
            <div key={product._id} className='bg-white rounded-lg shadow-lg p-5 m-3'>
              {editingProductId === product._id ? (
                // Edit Mode: Show form
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 border rounded'
                  />
                  <textarea
                    name="description"
                    value={editedProduct.description}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 border rounded'
                  ></textarea>
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 border rounded'
                  />
                  <div className='flex justify-between mt-3'>
                    <button
                      className='border px-5 py-2 rounded-lg bg-green-500'
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                    <button
                      className='border px-5 py-2 rounded-lg bg-gray-400'
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // View Mode: Show product details
                <div>
                  <h2 className='text-lg font-bold'>{product.name}</h2>
                  <p className='text-gray-600 mb-3'>{product.description}</p>
                  <p className='text-gray-800 font-semibold'>₹{product.price}</p>
                  {product.image && (
                    <img src={product.image} alt={product.name} className='w-full h-40 object-cover mt-3 rounded-md' />
                  )}
                  {
                    user.email === 'riddhijethava08@gmail.com' &&
                    <>
                      <div className='flex justify-between mt-3'>
                        <button
                          className='border px-5 py-2 rounded-lg bg-yellow-400'
                          onClick={() => handleEditClick(product)}
                        >
                          Edit
                        </button>
                        <button
                          className='border px-5 py-2 rounded-lg bg-red-600'
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
