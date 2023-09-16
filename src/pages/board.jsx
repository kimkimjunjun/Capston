import React, { useEffect, useState } from 'react';
import item from '../dummy/item.json';
import '../App.css';
import BackButton from '../component/backbutton';
import TopButton from '../component/topbutton';

export default function BoardComponents(postData) {
    // 선택한 item_idx에 해당하는 게시글 찾기


    // 선택한 게시글이 없을 경우 예외 처리
    if (!postData) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }
    const comments = [
        { count: 5, content: "덧글 내용 1" },
        { count: 3, content: "덧글 내용 2" },
        { count: 2, content: "덧글 내용 3" },
        // ... 다른 덧글들
    ];


    console.log(postData);

    return (
        <div className='w-full flex p-3 justify-center mx-auto'>
            <div>
                <div className='w-[40rem] border border-[#d6d6d6] px-3 py-5'>
                    <div className='flex'>
                        <div className='w-0.5 h-3 text-red-600' />
                        <h1 className='w-fit p-1 px-3 pb-5 text-2xl font-medium'>고대 생명공 또는 바시의</h1>
                    </div>
                    <div className='w-full h-0.5 bg-[#d6d6d6]' />
                    <div className='p-2.5 space-x-3 text-[#646464]'>
                        <span className='text-[#2f9741] font-bold'>이름</span>
                        <span>조회수</span>
                        <span>날짜</span>
                    </div>
                    <div className='w-full h-0.5 bg-[#d6d6d6]' />
                    <div className='p-2.5'>
                        내용
                    </div>
                </div>
                <div className='w-[40rem] border border-[#d6d6d6] px-3 py-5 space-y-3'>
                    <div>
                        덧글 count
                    </div>
                    {comments.map((comment, index) => (
                        <div>
                            <div className='w-full h-0.5 bg-[#d6d6d6]' />
                            <div>
                                {comment.content}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex'>
                    <BackButton />
                    <TopButton />
                </div>
            </div>
            <div className='w-[30rem] border border-[#d6d6d6] p-3'>
                <div className='w-full h-fit px-5 pb-3'>
                    <span className='flex'>유사 추천글</span>
                </div>
                <div className='w-full h-0.5 bg-[#d6d6d6]' />
            </div>
        </div>
    );
}