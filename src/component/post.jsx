import axios from 'axios';
import { useQuery } from "react-query";
import items from '../dummy/item.json';

export default function Post() {

    return (
        <div>
            {items._source.map((res, index) => {
                return (
                    <div key={index} className='flex'>
                        <h1>{res?.subject}</h1>
                    </div>
                )
            })}
        </div>
    )
}