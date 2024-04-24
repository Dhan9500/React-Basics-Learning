import { useForm } from "react-hook-form";

export default function Form({ fdata,meth }) {
  const { register, handleSubmit,reset } = useForm();
  const handle=()=>handleSubmit((data)=>{
    meth([...fdata,data]);
    reset();
  })

  return (
    <div className="flex justify-center mt-10">
      <form className="flex gap-3" action="" onSubmit={handle()}>
        <input
          className="rounded-md outline-none text-base font-semibold bg-zinc-100 "
          {...register("name")}
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-md outline-none text-base font-semibold bg-zinc-100 "
          {...register("email")}
          type="email"
          placeholder="Email"
        />
        <input
          className="rounded-md outline-none text-base font-semibold bg-zinc-100 "
          {...register("image")}
          type="url"
          placeholder="Image Url"
        />
        <input
          className="rounded-md outline-none text-base bg-sky-500 p-1 text-white font-semibold"
          type="Submit"
        />
      </form>
    </div>
  );
}
