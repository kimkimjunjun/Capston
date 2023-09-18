import React, { useEffect, useState } from 'react';
import item from '../dummy/item.json';
import '../App.css';
import Pagination from './pagination';
import { Link } from 'react-router-dom';
import replie from "../icons/replie.png";

export default function Post() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
    const [itemsPerPage] = useState(4); // 한 페이지에 표시할 항목 수

    useEffect(() => {
        // JSON 파일의 경로를 설정합니다.
        setPostData(item);
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // 현재 페이지의 데이터 범위 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = postData.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 번호 변경 시 호출할 함수
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(postData)

    return (
        <div className='w-full flex justify-center p-2'>
            <div className='w-[40rem] border border-[#d6d6d6] bg-white'>
                {currentItems.map((item, index) => (
                    <Link to={`/board/${item._source.item_idx}`} key={index}>
                        <div className='w-full p-3 pr-8'>
                            <div className='w-full h-fit mb-5'>
                                <div className='flex mb-2 space-x-2 font-bold'>
                                    <h1>{item._source.subject}</h1>
                                    <span className='text-[#a5a5a5]'>{item._source.created_at}</span>
                                    <span className='text-[#a5a5a5] flex'>
                                        <img
                                            className='w-5 h-5 flex self-center mt-1 mr-1'
                                            src={replie}
                                            alt='d'
                                        />
                                        {item._source.replies.length}
                                    </span>
                                </div>
                                <span className='w-full break-words text-ellipsis overflow-hidden theboki'>{item._source.contents}</span>
                            </div>
                            <div className='w-full h-0.5 bg-[#d6d6d6]' />
                        </div>
                    </Link>
                ))}

                {/* 페이지네이션 컴포넌트 */}
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={postData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
            <div className='w-[30rem] border border-[#d6d6d6] p-3 ml-2 bg-white'>
                <div className='w-full h-fit pb-3'>
                    <span className='flex'><p className='font-bold text-red-600'>홍길동</p>님을 위한 추천글</span>
                </div>
                <div className='w-full h-0.5 bg-[#d6d6d6]' />

            </div>
        </div>
    );
}

