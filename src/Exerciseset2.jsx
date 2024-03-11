import S2Q1 from "./Props Component/S2Q1";
import S2Q10 from "./Props Component/S2Q10";
import S2Q2 from "./Props Component/S2Q2";
import S2Q3 from "./Props Component/S2Q3";
import S2Q4and5 from "./Props Component/S2Q4and5";
import S2Q6 from "./Props Component/S2Q6";
import S2Q7 from "./Props Component/S2Q7";
import S2Q8 from "./Props Component/S2Q8";
import S2Q9 from "./Props Component/S2Q9";

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

  // Question4and5:

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
  //Question6:
  // const title = 'React is awesome'
  // const content = 'React is a JavaScript library for building user interfaces.'
  // return(
  //     <S2Q6 title={title} content={content}/>
  // );

  //Question7:

  // const heading = 'About Me'
  // const name = 'Dhananjay'
  // const learning = 'I am learning React JS currently at neoG Camp.'

  // return(
  //     <S2Q7 heading={heading} name={name} learning={learning}/>
  // );

  // Question8:

  // const products = [
  //   {
  //     id: 1,
  //     name: "keyboard",
  //     description: "Logitech Mechanical Keyboard",
  //     price: 2000,
  //   },
  //   { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
  //   {
  //     id: 3,
  //     name: "speakers",
  //     description: "Bose L1 Pro32 Portable",
  //     price: 256000,
  //   },
  //   { id: 4, name: "mobile", description: "iPhone 13", price: 61000 },
  //   {
  //     id: 5,
  //     name: "monitor",
  //     description: "Lenovo 32-inch display Monitor",
  //     price: 10000,
  //   },
  //   { id: 6, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  //   {
  //     id: 7,
  //     name: "speakers",
  //     description: "Creative Desktop Speakers",
  //     price: 5000,
  //   },
  //   {
  //     id: 8,
  //     name: "headphones",
  //     description: "Sony over-the-ear wired Headphones with mic",
  //     price: 1500,
  //   },
  //   { id: 9, name: "mobile", description: "iPhone 12", price: 90000 },
  // ];

  // return <S2Q8 products={products}/>;

  // Question9:

  // const red = '#EE4B2B'
  // const blue = '#89CFF0'
  // const green = '#7FFFD4'

  // return(
  //   <S2Q9 red={red} blue={blue} green={green}/>
  // );

  // Question10:

  const todoItems = [
    {
      id: 1,
      title: "Complete practice set",
      description: "Practice set 1 of React",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Attend revision session",
      description: "Revision session of React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Watch recording",
      description: "Live session recording of React",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Attend DSH",
      description: "Doubt Solving Hours of React",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Complete practice set",
      description: "Practice set 2 of React",
      isCompleted: false,
    },
  ];

  return <S2Q10 todoItems={todoItems}/>;
}
export default Exerciseset2;
