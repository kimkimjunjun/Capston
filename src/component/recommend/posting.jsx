import { useEffect, useState } from 'react';
import replie from '../../icons/replie.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Posting() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/recomend');
                const responseData = response.data;
                setData(responseData.hits.hits);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            {data.map((item, index) => (
                <Link to={`/board/${item._source.item_idx}`} key={index}>
                    <div>
                        <h1 className="text-lg font-bold pt-2">{item._source.subject}</h1>
                    </div>
                    <div>
                        <span className='break-words text-ellipsis overflow-hidden theboki1 text-sm'>{item._source.contents}</span>
                    </div>
                    <div className="text-[#a5a5a5] font-bold space-x-2 flex mb-2">
                        <span>{item._source.created_at}</span>
                        <span>조회수</span>
                        <img
                            className='w-5 h-5 flex self-center mt-1'
                            src={replie}
                            alt='d'
                        />
                        <span>{item._source.replies.length}</span>
                    </div>
                    <div className='w-full h-0.5 bg-[#d6d6d6]' />
                </Link>
            ))}
        </div>
    )
}