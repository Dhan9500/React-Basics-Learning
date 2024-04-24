import { useState } from "react";
import Cards from "./FormHandling/Cards";
import Form from "./FormHandling/Form";

export default function FormHandling() {
  const [data, setData] = useState([
    {
      name: "Dhananjay",
      email: "dhananjay@gmail.com",
      image:
        "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pawan",
      email: "pawan@gmail.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Umesh",
      email: "umesh@gmail.com",
      image:
        "https://images.unsplash.com/photo-1586796676774-c93004ae009f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Manoj",
      email: "manoj@gmail.com",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww",
    },
  ]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <Cards data={data} />
        <Form data={data}/>
      </div>
    </div>
  );
}
