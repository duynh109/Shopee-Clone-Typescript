export default function SortProductList() {
  return (
    <div className='bg-[rgba(0,0,0,0.03)] py-4 px-3'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80 text-center rounded-sm'>
            Phổ biến
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-50 text-center rounded-sm'>
            Mới nhất
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-50 text-center rounded-sm'>
            Bán chạy
          </button>
          <select
            value=''
            className='h-8 px-4 bg-white text-black text-sm hover:bg-slate-50 text-left rounded-sm outline-none'
          >
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến Cao</option>
            <option value='price:desc'>Giá: Cao đến Thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='px-3 h-8 rounded-sm bg-white/60 hover:bg-slate-50 cursor-not-allowed shadow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='px-3 h-8 rounded-sm bg-white/60 hover:bg-slate-50 cursor-not-allowed shadow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
