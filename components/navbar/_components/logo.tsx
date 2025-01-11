import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="ml-3 mr-2 text-2xl font-bold text-white bg-lime-400 px-3 py-1 border-2 border-black hover:bg-yellow-400 transition-colors">
        Leg<span className="text-black">it</span>
      </Link>
    </>
  );
};

export default Logo;

