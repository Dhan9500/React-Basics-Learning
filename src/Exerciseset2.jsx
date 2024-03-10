import S2Q1 from "./Props Component/S2Q1";
import S2Q2 from "./Props Component/S2Q2";
import S2Q3 from "./Props Component/S2Q3";
import S2Q4and5 from "./Props Component/S2Q4and5";
import S2Q6 from "./Props Component/S2Q6";

function Exerciseset2() {
  //   Question1:
  //     return (
  //         <div>
  //             <S2Q1 name={"Dhananjay"}/>
  //         </div>
  //     );

  // Question2:
  // return (
  //     <div>
  //         <S2Q2 product={"Sabun"} price={50}/>
  //     </div>
  // );

  // Question3:

  // const userData = {
  //     name: 'John',
  //     age: 25,
  //     email: 'john@example.com',
  //     }
  // return(
  //     <div>
  //         <S2Q3 user={userData}/>
  //     </div>
  // );

  // Question4:

//   const products = [
//     {
//       id: 1,
//       name: "keyboard",
//       description: "Logitech Mechanical Keyboard",
//       price: 2000,
//     },
//     { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
//     {
//       id: 3,
//       name: "monitor",
//       description: "Lenovo 32-inch display Monitor",
//       price: 10000,
//     },
//     { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
//     {
//       id: 5,
//       name: "speakers",
//       description: "Creative Desktop Speakers",
//       price: 5000,
//     },
//     {
//       id: 6,
//       name: "headphones",
//       description: "Sony over-the-ear wired Headphones with mic",
//       price: 1500,
//     },
//     { id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
//   ];

//   return <S2Q4and5 products={products}/>;
const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'
return(
    <S2Q6 title={title} content={content}/>
);
}
export default Exerciseset2;
