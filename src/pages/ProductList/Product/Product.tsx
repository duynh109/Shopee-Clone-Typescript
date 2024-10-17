import { Link } from 'react-router-dom'
import { Product as ProductType } from '../../../types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from '../../../utils/utils'

interface Props {
  product: ProductType
}

export default function Product({ product }: Props) {
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
            <div className='line-through max-w-[50%] text-gray-500 text-sm'>
              ₫{formatCurrency(product.price_before_discount)}
            </div>
            <div className='bg-[#feeeea] ml-1 p-[0.125rem]'>
              <span className='text-orange text-[0.625rem] leading-[0.75rem] block'>-53%</span>
            </div>
          </div>
          <div className='mt-3 flex items-center'>
            <div className='flex items-center overflow-hidden shrink-0'>
              <div className='relative inline-block'>
                <div className='flex'>
                  <div className='flex items-center mr-[1px] relative'>
                    <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '100%' }}>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='size-[0.625rem] fill-yellow-300 text-yellow-300'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                    <svg
                      enableBackground='new 0 0 15 15'
                      viewBox='0 0 15 15'
                      x={0}
                      y={0}
                      className='size-[0.625rem] fill-current text-gray-300'
                    >
                      <polygon
                        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className='flex items-center mr-[1px] relative'>
                    <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '100%' }}>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='size-[0.625rem] fill-yellow-300 text-yellow-300'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                    <svg
                      enableBackground='new 0 0 15 15'
                      viewBox='0 0 15 15'
                      x={0}
                      y={0}
                      className='size-[0.625rem] fill-current text-gray-300'
                    >
                      <polygon
                        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className='flex items-center mr-[1px] relative'>
                    <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '100%' }}>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='size-[0.625rem] fill-yellow-300 text-yellow-300'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                    <svg
                      enableBackground='new 0 0 15 15'
                      viewBox='0 0 15 15'
                      x={0}
                      y={0}
                      className='size-[0.625rem] fill-current text-gray-300'
                    >
                      <polygon
                        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className='flex items-center mr-[1px] relative'>
                    <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '100%' }}>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='size-[0.625rem] fill-yellow-300 text-yellow-300'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                    <svg
                      enableBackground='new 0 0 15 15'
                      viewBox='0 0 15 15'
                      x={0}
                      y={0}
                      className='size-[0.625rem] fill-current text-gray-300'
                    >
                      <polygon
                        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className='flex items-center mr-[1px] relative'>
                    <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='size-[0.625rem] fill-yellow-300 text-yellow-300'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                    <svg
                      enableBackground='new 0 0 15 15'
                      viewBox='0 0 15 15'
                      x={0}
                      y={0}
                      className='size-[0.625rem] fill-current text-gray-300'
                    >
                      <polygon
                        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='ml-1 overflow-hidden leading-3 text-xs'>
              Đã bán {formatNumberToSocialStyle(product.sold)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
