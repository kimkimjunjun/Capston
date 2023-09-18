import '../../App.css';

export default function Header() {
    return (
        <div className='w-full border border-t-[#ececec] border-b-[#858585]'>
            <div className="flex text-base font-bold w-[70rem] h-12 items-center mx-auto pl-1">
                <div className='flex space-x-5 cursor-pointer'>
                    {["입시", "학원", "학교", "수다", "리뷰", "소식", "토론"].map((text, index) => (
                        <span
                            key={index}
                            className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}
                        >
                            {text}
                        </span>
                    ))}
                    <span className='h-10 pt-2'>|</span>
                    {["#고등", "#중등", "#초등"].map((text, index) => (
                        <span
                            key={index}
                            className={`hover:text-red-600 hover:border-b-4 border-red-600 h-12 pt-2.5`}
                        >
                            {text}
                        </span>
                    ))}
                </div>
                <div className='flex text-sm items-center space-x-5 text-[#5a5a5a] ml-auto pr-1'>
                    <span className='flex'><p className='text-red-600'>홍길동</p>님 안녕하세요.</span>
                    <span className={`cursor-pointer hover:underline`}>로그아웃</span>
                    <span>|</span>
                    <span className={`cursor-pointer hover:underline`}>마이페이지</span>
                </div>
            </div>
        </div>
    );
}
