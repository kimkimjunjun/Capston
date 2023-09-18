import { useState } from "react";
import searchicon from "../../icons/searchicon.svg";
import Logo from "../../icons/dschool_logo1.png";
import { Link } from "react-router-dom";

export default function SearchComponents() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        console.log('검색어:', searchTerm);
    };

    return (
        <div className="w-[70rem] h-28 flex mx-auto">
            <Link to='/' className="flex flex-col items-center self-center ml-2 mt-5 cursor-pointer">
                <img
                    className="w-36"
                    src={Logo}
                    alt="logo"
                />
                <h1 className="text-sm font-medium mt-1">강남서초송파 학부모 커뮤니티</h1>
            </Link>
            <div className="w-[30rem] h-10 flex border pl-2 ml-10 border-red-600 items-center self-center">
                <input
                    className="outline-none cursor-pointer"
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ width: '90%', height: '90%' }}
                />
                <span className="w-10 h-10" onClick={handleSearchClick}>
                    <img
                        className="flex pt-2"
                        src={searchicon}
                        alt="사진"
                    />
                </span>
                <div className="text-red-600 w-12 h-10 text-2xl border-l border-red-600 flex items-center justify-center">
                    #
                </div>
            </div>
        </div>
    );
}