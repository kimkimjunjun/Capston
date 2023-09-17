// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';
import item from './dummy/item.json';
import Board from './pages/board';

function App() {
  const [postData, setPostData] = useState([]); // postData를 배열로 초기화합니다.
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // JSON 파일의 경로를 설정합니다.
    setPostData(item); // 배열로 변환하여 설정합니다.
    setLoading(false);
  }, []);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/board/:item_idx' element={<Board />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
