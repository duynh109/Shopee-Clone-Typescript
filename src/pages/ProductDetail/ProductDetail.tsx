import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { useEffect, useMemo, useState } from 'react'

import productApi from '../../apis/product.api'
import ProductRating from '../../components/ProductRating'
import InputNumber from '../../components/InputNumber'
import { formatCurrency, formatNumberToSocialStyle, rateSale } from '../../utils/utils'
import { Product } from '../../types/product.type'

export default function ProductDetail() {
  const { id } = useParams()
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [activeImage, setActiveImage] = useState('')
  const product = productDetailData?.data.data
  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    [product, currentIndexImages]
  )

  useEffect(() => {
    if (product && product.images.length > 0) setActiveImage(product.images[0])
  }, [product])

  const next = () => {
    console.log(currentIndexImages[1])
    if (currentIndexImages[1] < (product as Product).images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const chooseActive = (img: string) => {
    setActiveImage(img)
  }

  if (!product) return null
  return (
    <div className='bg-gray-100 py-6'>
      <div className='container'>
        <div className='rounded-sm bg-white p-4 shadow-sm'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow'>
                <img
                  src={activeImage}
                  alt={product.name}
                  className='absolute left-0 top-0 h-full w-full object-cover'
                />
              </div>
              <div className='relative mt-4 grid grid-cols-5 gap-2'>
                <button
                  className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={prev}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                  </svg>
                </button>
                {currentImages.map((img) => {
                  const isActive = img === activeImage
                  return (
                    <div
                      className='relative w-full cursor-pointer pt-[100%]'
                      key={img}
                      onMouseEnter={() => chooseActive(img)}
                    >
                      <img
                        src={img}
                        alt={product.name}
                        className='absolute left-0 top-0 h-full w-full cursor-pointer object-cover'
                      />
                      {isActive && <div className='absolute inset-0 border-2 border-orange' />}
                    </div>
                  )
                })}
                <button
                  className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={next}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-xl font-medium uppercase'>{product.name}</h1>
              <div className='mt-3 flex items-center'>
                <div className='flex items-center'>
                  <span className='mr-1 border-b border-black'>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </div>
                <div className='mx-4 h-6 w-[1px] bg-gray-300'></div>
                <div className='flex items-center'>
                  <span className='mr-1 border-b border-black'>2,5k</span>
                  <span className='text-gray-500'>Đánh giá</span>
                </div>
                <div className='mx-4 h-6 w-[0.5px] bg-gray-300'></div>
                <div className='flex items-center'>
                  <span className='mr-1'>{formatNumberToSocialStyle(product.sold)}</span>
                  <span className='text-gray-500'>Đã bán</span>
                </div>
              </div>
              <div className='mt-8 flex items-center bg-gray-50 px-5 py-4'>
                <div className='text-3xl font-medium text-orange'>₫{formatCurrency(product.price)}</div>
                <div className='ml-3 text-gray-500 line-through'>₫{formatCurrency(product.price_before_discount)}</div>
                <div className='ml-3 bg-orange/10 px-1 text-xs font-bold text-orange'>
                  -{rateSale(product.price_before_discount, product.price)}%
                </div>
              </div>
              <div className='mt-8 flex items-center'>
                <div className='text-gray-500'>Số Lượng</div>
                <div className='ml-10 flex items-center'>
                  <button className='flex size-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
                    </svg>
                  </button>
                  <InputNumber
                    value={1}
                    className=''
                    classNameError='hidden'
                    classNameInput='h-8 w-14 border-t border-b border-gray-300 p-1 text-center outline-none text-orange'
                  />
                  <button className='flex size-8 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                    </svg>
                  </button>
                </div>
                <div className='ml-4 text-sm text-gray-500'>{product.quantity} sản phẩm có sẵn</div>
              </div>
              <div className='mt-8 flex items-center'>
                <button className='flex h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-5 capitalize text-orange shadow-sm hover:bg-orange/5'>
                  <img
                    alt='icon-add-to-cart'
                    className='mr-[10px] size-5'
                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg'
                  ></img>
                  Thêm vào giỏ hàng
                </button>
                <button className='ml-4 flex h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-10 capitalize text-white shadow-sm outline-none hover:bg-orange/90'>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 rounded-sm bg-white p-5 shadow-sm'>
          <div className='rounded bg-gray-50 p-4 text-lg uppercase text-slate-700'>Mô tả sản phẩm</div>
          <div className='mx-4 mb-4 mt-6 text-sm leading-loose'>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
