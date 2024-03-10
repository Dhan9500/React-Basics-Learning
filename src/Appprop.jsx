import Question1 from "./Props Component/Question1";
import Question2 from "./Props Component/Question2";
import Question3 from "./Props Component/Question3";
import Question4 from "./Props Component/Question4";
import Question5And6 from "./Props Component/Question5And6";
import Question5 from "./Props Component/Question5And6";
import Question7 from "./Props Component/Question7";
import Question8to11 from "./Props Component/Question8to11";

function Appprop() {
  //Question1:
  // return (
  //     <div >
  //         <Question1 name={"Dhananjay"} designation={"Software Engineer"} workexperience={"3 Years"} h1Color1={"bg-green-600"} h1Color2={"bg-blue-600"}/>
  //     </div>
  // )

  //Question2:

  //   const backgroundColor = "lightgreen";
  //   const color = "darkgreen";
  //   const borderRadius = "5px";
  //   const padding = "10px";
  //   const text="Start";
  //   return (
  //     <div>
  //         <Question2 backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding} text={text}/>
  //     </div>
  //   );

  //Question3:

  // const items = ['pen', 'pencil', 'ruler', 'eraser']
  // return(

  //         <Question3 items={items} header="Stationary Items"/>

  // );

  //Question4:

  // const imageLink ='https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
  // const caption = 'Spring Flowers'
  // return(

  //     <Question4 imageLink={imageLink} caption={caption}/>
  // );

  //Question5And6:
  // const products = [
  //     { name: 'Perk', quantity: 10, sales: 7 },
  //     { name: 'Pepsi', quantity: 10, sales: 20 },
  //     { name: 'Coke', quantity: 18, sales: 50 },
  //     { name: 'Maggi', quantity: 41, sales: 22 },
  //     { name: '5Star', quantity: 7, sales: 9 },
  //     ]
  //     const head="Products Name"

  //     return(
  //         <div>
  //             <Question5And6 products={products} head={head}/>
  //         </div>
  //     );

  //Question7:

  // const student = {
  //     name: 'John Doe',
  //     english: 90,
  //     maths: 80,
  //     computers: 70,
  //     }

  // return(
  //     <div>
  //         <Question7 student={student}/>
  //     </div>
  // );

  //Question8to11:

  const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];

  return (
    <div>
      <Question8to11 employees={employees}/>
    </div>
  );
}

export default Appprop;
