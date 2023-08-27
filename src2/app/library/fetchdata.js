import { useState } from 'react';

const DataFetcher = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/${inputValue}`);
      const jsonData = await response.json();

      if (response.ok) {
        setData(jsonData);
      } else {
        // 에러 처리 (옵션)
        console.error('API 호출 도중 문제 발생')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="ID 입력"
      />
      <button onClick={fetchData}>데이터 가져오기</button>
      {data && (
        <div>
          <p>결과:</p>
          <p>{data.content}</p>
        </div>
      )}
    </>
  );
};

export default DataFetcher;