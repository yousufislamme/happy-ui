import Link from "next/link";

const Hero = () => {
  return (
     <section className=" text-center">
        <div className="w-full mt-32 flex items-center flex-col justify-center">
            <h1 className="text-[2.4rem] font-sans font-bold">Build your component library with Happy UI</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto unde sunt?</p>
        <Link href="/documents">
          <button className="mt-5 bg-slate-200 dark:bg-white text-black px-4 py-2 rounded-lg">Get Start</button>
        </Link>
        </div>
    </section>
  )
}

export default Hero;