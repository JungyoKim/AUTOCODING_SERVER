export default function Home(){
  return(
    <>
    <h1>AUTOCODER 2.0 API</h1>
    </>
  )
}

// "use client"
// import './globals.css'
// import { Navbar,Typography,IconButton,Button,Input,BellIcon,Cog6ToothIcon,Card,CardHeader,CardBody,CardFooter,Chip,LinkIcon,Textarea,Avatar,Tooltip } from "@/app/library/material.js";
// import React from 'react';

// export function NAVBAR({ inputValue, onInputChange, onButtonClick }) {
//   return (
//     <Navbar
//       variant="gradient"
//       color="blue-gray"
//       className="mx-auto max-w-screen-xl from-black to-black px-4 py-3"
//     >
//       <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
//         <Typography
//           as="a"
//           href=""
//           variant="h5"
//           className="mr-4 ml-2 cursor-pointer py-1.5"
//         >
//           AUTOCODER
//         </Typography>
//         <div className="font-main lg:hidden ml-auto flex gap-1 md:mr-4">
//         <Button color="white">채팅</Button>
//         </div>
//         <div className="font-main relative flex w-full gap-2 md:w-max">
//           <Input
//           type="number"
//           value={inputValue}
//           onChange={onInputChange}
//             color="white"
//             label="문제 ID 입력"
//             className=" pr-20"
//             containerProps={{
//               className: "min-w-[200px]",
//             }}
//           />
//           <Button
//           onClick={onButtonClick}
//             size="sm"
//             color="white"
//             className="!absolute right-1 top-1 rounded font-main"
//           >
//             검색
//           </Button>
//         </div>
//       </div>
//     </Navbar>
//   );
// }
 
// function TwitterChatboxTextarea() {
//   return (
//     <div className="font-main flex w-full flex-row items-center rounded-md border border-white bg-white">
//       <div className="flex">
//         <IconButton variant="text" className="rounded-full ml-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//             />
//           </svg>
//         </IconButton>
//       </div>
//       <Textarea
//         rows={1}
//         resize={false}
//         className="font-main scrollbar-hide min-h-full !border-0 focus:border-transparent"
//         placeholder="메시지 입력"
//         containerProps={{
//           className: "font-main grid h-full",
//         }}
//         labelProps={{
//           className: "font-main before:content-none after:content-none",
//         }}
//       />
//       <div>
//         <IconButton variant="text" className="rounded-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
//             />
//           </svg>
//         </IconButton>
//       </div>
//     </div>
//   );
// }

// function Codebox({codeData}) {
//   return (
//     <Card className=" mt-3 w-full bg-black text-white">
//       <div className='flex justify-between p-2 font-main'>
//         <div className='bg-black text-white rounded-md px-1'>ID 1000</div>
//       </div>
// <div className='h-[1px] bg-white'></div>
//       <CardBody>
// <pre className='font-code'>
// {codeData || "여기에 코드가 표시됩니다"}
// </pre>
//       </CardBody>
//     </Card>
//   );
// }

// function Chatbox(){
//   return(
//     <div style={{height: "80svh"}} className='font-main flex flex-col ml-3 mt-3 bg-black rounded-xl'>
//       <div className='flex justify-between gap-3 bg-white rounded-md m-3 p-3'>
//       <Tooltip className="" content="눌러서 사진찍기">
//       <Avatar className='h-10' src="https://tse2.mm.bing.net/th?id=OIP.6PW3q9rD6eF8lKSRruiE0wHaHa&pid=Api&P=0&h=180" alt="avatar" variant="rounded" />
//       </Tooltip>
//       <Input className='font-main' label="사용자 이름" />
//         </div>

//       <div className="scrollbar-hide overflow-y-scroll items-end gap-2 px-3">
//       <div className='p-3 bg-white rounded-md'>
//         <div className='flex'>
//       <Avatar className='h-6 w-6' src="https://tse2.mm.bing.net/th?id=OIP.6PW3q9rD6eF8lKSRruiE0wHaHa&pid=Api&P=0&h=180" alt="avatar" variant="rounded" />
//       <Typography className="font-main ml-2 text-2xl">
// df
//         </Typography>
//         </div>
//       <h3 className="font-main break-words">
//         이것좀
//       </h3>
//       <a className='text-[13px]'>2023년 1시 14분</a>
//       </div>


//     </div>
//     <div className="font-main items-end gap-2 p-3 mt-auto">
//       <TwitterChatboxTextarea></TwitterChatboxTextarea>
//     </div>
// </div>
//   )
// }



// export default function Home() {
//   const [inputValue, setInputValue] = React.useState('');
//   const [codeData, setCodeData] = React.useState(null);

// () => {
//     const handleChange = (e) => {
//       setInputValue(e.target.value);
//     };

//     const handleCLick = (e) => {
//       setInputValue(e.target.value)
//     }
//   }

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/${inputValue}`);
//       const jsonData = await response.json();

//       if (response.ok) {
//         setCodeData(jsonData);
//       } else {
//         // 에러 처리 (옵션)
//         console.error('API 호출 도중 문제 발생')
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
// <div className="mx-auto max-w-screen-xl">
//   <div className="m-3">
//     <NAVBAR></NAVBAR>
//     <div className="flex flex-row">
//       <div className="basis-2/3 w-full flex-grow">
//         <Codebox codeData={codeData}></Codebox>
//       </div>
//       <div className="basis-1/3 w-full hidden lg:block">
//         <Chatbox></Chatbox>
//       </div>
// </div>
// </div>
// </div>
//   )
// }
// "use client"
// import { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, orderBy, query, getDocs } from "firebase/firestore";
// import { getApps, getApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyBPi1_JCCG0kFY6M7LLH4vzfLbtVpqTUHs",
//   authDomain: "autocoder-js.firebaseapp.com",
//   projectId: "autocoder-js",
//   storageBucket: "autocoder-js.appspot.com",
//   messagingSenderId: "896861018272",
//   appId: "1:896861018272:web:21879e925e3b28fa6d51c5",
//   measurementId: "G-SVSQ4VD6CZ"
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);

// function Test() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const chatsRef = collection(db, "chatting");
//         const chatQuery = query(chatsRef, orderBy('utc', 'desc'));
//         const snapshot = await getDocs(chatQuery);
        
//         const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.log("Fetched data:", fetchedData);
//         setData(fetchedData);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {
//         data && data.map(item => (
//           <div key={item.id}>
//             {JSON.stringify(item, null, 2)}
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Test;