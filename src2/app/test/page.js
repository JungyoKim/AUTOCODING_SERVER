export default function Home2(){
  return(
    <>
    <h1>AUTOCODER 2.0 API</h1>
    </>
  )
}
// "use client"
// import {db} from '../library/firebaseclient';
// import { Navbar,Typography,IconButton,Button,Input,BellIcon,Cog6ToothIcon,Card,CardHeader,CardBody,CardFooter,Chip,LinkIcon,Textarea,Avatar,Tooltip } from "@/app/library/material.js";
// import { collection, orderBy, query, getDocs } from "firebase/firestore";
// import { useState,useEffect } from 'react';
// import DataFetcher from '../library/fetchdata';

// function Chatbox(props){
//     return(
//   <div className='bg-black p-3'>
//         <div className='p-3 bg-white rounded-md'>
//           <div className='flex'>
//         <Avatar className='h-7 w-7' src="https://tse2.mm.bing.net/th?id=OIP.6PW3q9rD6eF8lKSRruiE0wHaHa&pid=Api&P=0&h=180" alt="avatar" variant="rounded" />
//         <Typography className="font-main ml-2 text-2xl">
//         {props.who}
//           </Typography>
//           </div>
//         <h3 className="font-main break-words">
//         {props.content}
//         </h3>
//         <a className='text-[13px]'>{props.time}</a>
//         </div>
//         </div>
  
//     )
//   }


// function Test() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const chatsRef = collection(db, "chatting");
//         const chatQuery = query(chatsRef, orderBy('utc', 'asc'));
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
//             <Chatbox who={item.who} content={item.content} time={item.time} ></Chatbox>
//         //   <div key={item.id}>
//         //     {JSON.stringify(item, null, 2)}
//         //   </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Test;

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