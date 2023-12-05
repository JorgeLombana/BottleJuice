import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from '../redux/bazarSlice'
// import { ToastContainer, toast } from 'react-toastify'

const CartItem = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.bazar.productData)
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
        <div>
          <div>
            {productData.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between gap-6 mt-6"
              >
                <div className="flex items-center gap-2">
                  <MdOutlineClose
                    onClick={() =>
                      dispatch(deleteItem(item._id)) & ''
                      // toast.error(`${item.title} is removed`)
                    }
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                  />
                  <img
                    className="w-32 h-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <h2 className="w-52">{item.title}</h2>
                <p className="w-10">${item.price}</p>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-14">${item.quantity * item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              dispatch(resetCart()) & ''
              // toast.error('Your Cart is Empty!')
            }
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      {/* <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </div>
  )
}

export default CartItem




// import React from 'react';
// import { MdOutlineClose } from 'react-icons/md';
// import { HiOutlineArrowLeft } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   decrementQuantity,
//   deleteItem,
//   increamentQuantity,
//   resetCart,
// } from '../redux/bazarSlice';
// // import { ToastContainer, toast } from 'react-toastify';
// import styled from 'styled-components';

// const CartWrapper = styled.div`
//   width: 66.66%; /* Equivalent to w-2/3 */
//   padding-right: 10px; /* Equivalent to pr-10 */
// `;

// const CartTitle = styled.h2`
//   font-family: 'titleFont';
//   font-size: 2rem; /* Equivalent to text-2xl */
// `;

// const CartItemContainer = styled.div`
//   width: 100%;
// `;

// const CartItemRow = styled.div`
//   display: flex;
//   items-align: center;
//   justify-content: space-between;
//   gap: 1.5rem; /* Equivalent to gap-6 */
//   margin-top: 1.5rem; /* Equivalent to mt-6 */
// `;

// const CloseIcon = styled(MdOutlineClose)`
//   font-size: 1.5rem; /* Equivalent to text-xl */
//   color: #6b7280; /* Equivalent to text-gray-600 */
//   cursor: pointer;
//   transition: color 0.3s;

//   &:hover {
//     color: #ef4444; /* Equivalent to hover:text-red-600 */
//   }
// `;

// const ProductImage = styled.img`
//   width: 32px; /* Equivalent to w-32 */
//   height: 32px; /* Equivalent to h-32 */
//   object-fit: cover;
// `;

// const ProductTitle = styled.h2`
//   width: 52%; /* Equivalent to w-52 */
// `;

// const Price = styled.p`
//   width: 10%; /* Equivalent to w-10 */
// `;

// const QuantityContainer = styled.div`
//   width: 52%; /* Equivalent to w-52 */
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   text-gray: #6b7280; /* Equivalent to text-gray-500 */
//   border: 1px solid #d1d5db; /* Equivalent to border */
//   padding: 0.75rem; /* Equivalent to p-3 */
//   font-size: 0.875rem; /* Equivalent to text-sm */

//   .quantity-text {
//     font-weight: bold; /* Equivalent to font-semibold */
//   }

//   .quantity-buttons {
//     display: flex;
//     gap: 0.5rem;
//     font-weight: bold; /* Equivalent to font-semibold */
//     cursor: pointer;
//     transition: background-color 0.3s, color 0.3s;

//     &:hover {
//       background-color: #1f2937; /* Equivalent to hover:bg-gray-700 */
//       color: #fff; /* Equivalent to hover:text-white */
//     }
//   }
// `;

// const TotalPrice = styled.p`
//   width: 14%; /* Equivalent to w-14 */
// `;

// const ResetCartButton = styled.button`
//   background-color: #ef4444; /* Equivalent to bg-red-500 */
//   color: #fff; /* Equivalent to text-white */
//   margin-top: 1rem; /* Equivalent to mt-8 */
//   margin-left: 0.4375rem; /* Equivalent to ml-7 */
//   padding: 0.25rem 1.5rem; /* Equivalent to py-1 px-6 */
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #dc2626; /* Equivalent to hover:bg-red-800 */
//   }
// `;

// const GoShoppingButton = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 0.25rem; /* Equivalent to gap-1 */
//   color: #9ca3af; /* Equivalent to text-gray-400 */
//   cursor: pointer;
//   transition: color 0.3s;

//   &:hover {
//     color: #000; /* Equivalent to hover:text-black */
//   }
// `;

// const CartItem = () => {
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.bazar.productData);

//   return (
//     <CartWrapper>
//       <div>
//         <CartTitle>shopping cart</CartTitle>
//         <CartItemContainer>
//           {productData.map((item) => (
//             <CartItemRow key={item._id}>
//               <div>
//                 <CloseIcon
//                   onClick={() => dispatch(deleteItem(item._id)) & ''}
//                 />
//                 <ProductImage src={item.image} alt="productImg" />
//               </div>
//               <ProductTitle>{item.title}</ProductTitle>
//               <Price>${item.price}</Price>
//               <QuantityContainer>
//                 <p className="text-sm">Quantity</p>
//                 <div className="flex items-center gap-4 text-sm font-semibold">
//                   <span
//                     onClick={() =>
//                       dispatch(
//                         decrementQuantity({
//                           _id: item._id,
//                           title: item.title,
//                           image: item.image,
//                           price: item.price,
//                           quantity: 1,
//                           description: item.description,
//                         })
//                       )
//                     }
//                     className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
//                   >
//                     -
//                   </span>
//                   {item.quantity}
//                   <span
//                     onClick={() =>
//                       dispatch(
//                         increamentQuantity({
//                           _id: item._id,
//                           title: item.title,
//                           image: item.image,
//                           price: item.price,
//                           quantity: 1,
//                           description: item.description,
//                         })
//                       )
//                     }
//                     className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
//                   >
//                     +
//                   </span>
//                 </div>
//               </QuantityContainer>
//               <TotalPrice>${item.quantity * item.price}</TotalPrice>
//             </CartItemRow>
//           ))}
//         </CartItemContainer>
//         <ResetCartButton
//           onClick={() => dispatch(resetCart()) & ''}
//         >
//           Reset Cart
//         </ResetCartButton>
//       </div>
//       <GoShoppingButton to="/">
//         <span>
//           <HiOutlineArrowLeft />
//         </span>
//         go shopping
//       </GoShoppingButton>
//       {/* <ToastContainer
//         position="top-left"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       /> */}
//     </CartWrapper>
//   );
// };

// export default CartItem;
