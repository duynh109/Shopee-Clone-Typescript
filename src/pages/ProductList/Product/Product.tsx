import { Link } from 'react-router-dom'
import { Product as ProductType } from '../../../types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from '../../../utils/utils'
import ProductRating from '../../../components/ProductRating'

interface Props {
  product: ProductType
}

export default function Product({ product }: Props) {
  const discountPercentage = Math.round(
    ((product.price_before_discount - product.price) / product.price_before_discount) * 100
  )
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.05rem] hover:shadow-md duration-100 transition-transform overflow-hidden'>
        <div className='w-full pt-[100%] relative'>
          <img src={product.image} alt={product.name} className='absolute top-0 left-0 w-full h-full object-cover' />
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m1d5ib6irm8o68'
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>{product.name}</div>
          <div className='flex items-center mt-3'>
            <div className='text-orange mr-[5px]'>
              <span className='text-xs'>₫</span>
              <span className='text-base'>{formatCurrency(product.price)}</span>
            </div>
            <div className='line-through max-w-[50%] text-gray-500 text-sm truncate'>
              ₫{formatCurrency(product.price_before_discount)}
            </div>
            <div className='bg-[#feeeea] ml-1 p-[0.125rem]'>
              <span className='text-orange text-[0.625rem] leading-[0.75rem] block'>-{discountPercentage}%</span>
            </div>
          </div>
          <div className='mt-3 flex items-center'>
            <ProductRating rating={product.rating} />
            <div className='ml-1 overflow-hidden leading-3 text-xs'>
              Đã bán {formatNumberToSocialStyle(product.sold)}
            </div>
          </div>
          <div className='text-black/65 font-extralight text-[0.75rem] mt-3'>TP. Hồ Chí Minh</div>
        </div>
      </div>
    </Link>
  )
}
