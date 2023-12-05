import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/bazarSlice'
// import { ToastContainer, toast } from 'react-toastify'

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const _id = product.title
  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('')
  }
  const rootId = idString(_id)
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    })
  }
  return (
    <div className="w-full relative group">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & ''
                // toast.success(`${product.title} is added`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        {product.isNew && (
          <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
            Sale
          </p>
        )}
      </div>
      {/* <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}Consigna 10: 
Cuando usted realiza una búsqueda simple de lugar de alojamiento en el aplicativo Digital booking

¿Cuál de los verbos/métodos HTTP debería ser ejecutado?
POST
DELETE
PUT
GET
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </div>
  )
}

export default ProductsCard


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsArrowRight } from 'react-icons/bs';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/bazarSlice';
// import styled from 'styled-components';

// const CardWrapper = styled.div`
//   width: 100%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   border: 1px solid #000;
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   height: 96px;
//   cursor: pointer;
//   overflow: hidden;

//   &:hover {
//     .product-image {
//       transform: scale(1.1);
//     }
//   }
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.5s;
// `;

// const DetailsContainer = styled.div`
//   width: 100%;
//   border: 1px solid #000;
//   padding: 2px 8px;
// `;

// const TitleContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Title = styled.h2`
//   font-family: 'titleFont';
//   font-size: 1rem;
//   font-weight: bold;
// `;

// const PriceContainer = styled.div`
//   font-size: 0.875rem;
//   display: flex;
//   justify-content: flex-end;
//   overflow: hidden;
//   width: 100%;

//   div.price-group {
//     display: flex;
//     gap: 0.5rem;
//     transform: translateX(0);
//   }

//   ${CardWrapper}:hover & {
//     div.price-group {
//       transform: translateX(24px);
//       transition: transform 0.5s;
//     }
//   }

//   div.price-group p {
//     line-through;
//     color: #888;
//   }

//   div.price-group p:last-child {
//     font-weight: bold;
//   }

//   p.add-to-cart {
//     position: relative;
//     z-index: 20;
//     width: 100px;
//     color: #888;
//     cursor: pointer;
//     transition: transform 0.5s;
//     transform: translateX(-32px);

//     ${CardWrapper}:hover & {
//       transform: translateX(0);
//       transition: transform 0.5s;
//       color: #000;

//       &:hover {
//         color: #000;
//       }
//     }
//   }
// `;

// const Category = styled.p`
//   font-size: 0.875rem;
// `;

// const SaleTag = styled.p`
//   position: absolute;
//   top: 4px;
//   right: 0;
//   background-color: #000;
//   color: #fff;
//   font-weight: bold;
//   font-family: 'titleFont';
//   padding: 1px 6px;
// `;

// const ProductsCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const _id = product.title;
//   const idString = (_id) => String(_id).toLowerCase().split(' ').join('');
//   const rootId = idString(_id);

//   const handleDetails = () => {
//     navigate(`/product/${rootId}`, {
//       state: {
//         item: product,
//       },
//     });
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         _id: product._id,
//         title: product.title,
//         image: product.image,
//         price: product.price,
//         quantity: 1,
//         description: product.description,
//       })
//     );
//     // toast.success(`${product.title} is added`);
//   };

//   return (
//     <CardWrapper>
//       <ImageContainer onClick={handleDetails}>
//         <ProductImage className="product-image" src={product.image} alt="productImg" />
//       </ImageContainer>
//       <DetailsContainer>
//         <TitleContainer>
//           <Title>{product.title.substring(0, 15)}</Title>
//         </TitleContainer>
//         <PriceContainer>
//           <div className="price-group">
//             <p className="line-through text-gray-500">${product.oldPrice}</p>
//             <p className="font-semibold">${product.price}</p>
//           </div>
//           <p className="add-to-cart" onClick={handleAddToCart}>
//             add to cart <span>{<BsArrowRight />}</span>
//           </p>
//         </PriceContainer>
//         <Category>{product.category}</Category>
//       </DetailsContainer>
//       {product.isNew && (
//         <SaleTag>
//           Sale
//         </SaleTag>
//       )}
//     </CardWrapper>
//   );
// };

// export default ProductsCard;
