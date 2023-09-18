import React, { useEffect, useState } from 'react';
import item from '../dummy/item.json';
import '../App.css';
import BackButton from '../component/backbutton';
import TopButton from '../component/topbutton';
import { useParams } from 'react-router-dom';
import Header from '../component/header/header';
import SearchComponents from '../component/header/search';

export default function Board() {
    // 선택한 item_idx에 해당하는 게시글 찾기
    const { item_idx } = useParams();

    // 선택한 item_idx에 해당하는 게시글 찾기
    const selectedPost = item.find((post) => post._source.item_idx === parseInt(item_idx));

    const { subject, author_nick, created_at, contents, replies } = selectedPost._source;

    // 선택한 게시글이 없을 경우 예외 처리
    if (!selectedPost) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }


    return (
        <div>
            <SearchComponents />
            <Header />
            <div className='w-full flex justify-center mx-auto bg-gray-200'>
                <div className='p-2'>
                    <div className='w-[40rem] border border-[#d6d6d6] bg-white px-3 py-5'>
                        <div className='flex'>
                            <div className='w-0.5 h-3 text-red-600' />
                            <h1 className='w-fit p-1 px-3 pb-5 text-2xl font-medium'>{subject}</h1>
                        </div>
                        <div className='w-full h-0.5 bg-[#d6d6d6]' />
                        <div className='p-2.5 space-x-3 text-[#646464]'>
                            <span className='text-[#2f9741] font-bold'>{author_nick}</span>
                            <span>조회수</span>
                            <span>{created_at}</span>
                        </div>
                        <div className='w-full h-0.5 bg-[#d6d6d6]' />
                        <div className='p-2.5'>
                            {contents}
                        </div>
                    </div>
                    <div className='w-[40rem] border border-[#d6d6d6] bg-white px-3 py-5 space-y-3'>
                        <div>
                            덧글 <span className='text-[red]'>{replies.length}</span>
                        </div>
                        {replies.map((comment, index) => (
                            <div>
                                <div className='w-full h-0.5 bg-[#d6d6d6]' />
                                <div className='pt-3'>
                                    {comment}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex'>
                        <BackButton />
                        <TopButton />
                    </div>
                </div>
                <div className='pt-2'>
                    <div className='w-[30rem] h-screen border border-[#d6d6d6] bg-white p-3'>
                        <div className='w-full px-5 pb-3'>
                            <span className='flex'>유사 추천글</span>
                        </div>
                        <div className='w-full h-0.5 bg-[#d6d6d6]' />
                    </div>
                </div>
            </div >
        </div >
    );
}