// type Props = {
//   user: {
//     name: string;
//     caption:string;
//     img: string;
//     age: string;
//     desc: string;
//   };
//   index: number;
// };

// const Review = ({ user, index }: Props) => {
//   return (
//     <div
//       className={` ${
//         index % 2 !== 0 && 'md:mb-16'
//       } p-5 max-w-[300px] bg-[#d5f5ff] rounded-3xl shadow-lg`}
//     >
//       <div className="flex gap-5 items-center">
//         {/* <img className="w-12 rounded-full" src={user.img} alt={user.name} /> */}
//         <div>
//           <h6 className="font-bold text-lg">{user.name}</h6>
//           <p className="text-xs italic">{user.caption}</p>
//           <p className="text-xs opacity-70">{user.age}</p>
//         </div>
//       </div>
//       <p className="opacity-90 text-xs mt-2 italic">{user.desc}</p>
//     </div>
//   );
// };

// export default Review;
