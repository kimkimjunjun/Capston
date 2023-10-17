import Header from "../component/header/header";
import SearchComponents from "../component/header/search";
import Post from "../component/post";

export default function Home() {
    return (
        <div className="flex flex-col">
            <SearchComponents />
            <Header />
            <div className=" bg-gray-200 h-screen">
                <Post />
            </div>
        </div>
    )
}