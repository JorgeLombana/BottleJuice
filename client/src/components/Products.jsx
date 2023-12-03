import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
  return (
    <div className="py-10">
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  )
}

export default Products
