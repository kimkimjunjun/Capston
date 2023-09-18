import '../../App.css'

export default function Header() {
    return (
        <div className='w-full border border-t-[#ececec] border-b-[#858585]'>
            <div className="flex text-base font-bold w-[70rem] h-12 items-center mx-auto pl-1">
                <div className='flex space-x-5 cursor-pointer'>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>입시</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>학원</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>학교</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>수다</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>리뷰</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>소식</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>토론</span>
                    <span className='h-10 pt-2'>|</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>#고등</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>#중등</span>
                    <span className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}>#초등</span>
                </div>
                <div className='flex text-sm items-center space-x-5 text-[#5a5a5a] ml-auto pr-1'>
                    <span className='flex'><p className='text-red-600'>홍길동</p>님 안녕하세요.</span>
                    <span>로그아웃</span>
                    <span>|</span>
                    <span>마이페이지</span>
                </div>
            </div>
        </div>
    );
}
