export default function Form({data})
{
    return (
        <div className="flex justify-center mt-10">
            <form className="flex gap-3" action="">
                <input className="rounded-md outline-none text-base font-semibold bg-zinc-100 " type="text" placeholder="Name" />
                <input className="rounded-md outline-none text-base font-semibold bg-zinc-100 " type="email" placeholder="Email" />
                <input className="rounded-md outline-none text-base font-semibold bg-zinc-100 " type="url" placeholder="Image Url" />
                <input className="rounded-md outline-none text-base bg-sky-500 p-1 text-white font-semibold" type="Submit" />
            </form>
        </div>
    )
}