import Header from '../components/Header'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Tennis Shoes',
    image: 'https://via.placeholder.com/300',
    price: '120 TND',
    description: 'Comfortable tennis shoes for daily use.'
  },
  {
    id: 2,
    name: 'Tennis Racket',
    image: 'https://via.placeholder.com/300',
    price: '250 TND',
    description: 'Professional tennis racket.'
  }
]

export default function ProductsPage() {
  return (
    <div className='bg-white'>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.price}</p>
              <p className="text-gray-500 text-sm flex-grow">
                {product.description}
              </p>

              <Link
                href={`/product/${product.id}`}
                className="mt-4 text-center bg-black text-white py-2 rounded-xl hover:opacity-90"
              >
                Check details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
