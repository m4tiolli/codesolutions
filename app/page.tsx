export default function Home() {
  return (
    <>
      <div className="rounded-md bg-home bg-cover aspect-[10/4.5]">
        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col items-start justify-center px-10 rounded-md gap-6">
          <h1 className="text-6xl text-white font-black">We build systems. We create websites.</h1>
          <p className="text-white font-normal text-[16px]">CodeSol is a team of software developers who help companies design and build custom software solutions. We&apos;re experts in full-stack development, and we&apos;ve worked with a wide range of clients to deliver high-quality products.</p>
          <button className="button">Get in touch</button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="font-black text-4xl text-preto">What we do</h1>
        <p className="font-normal text-[16px] text-preto w-4/5 text-balance">Our team has experience in a wide range of technologies, frameworks, and platforms. We provide high-quality, custom software development services tailored to your specific needs.</p>

      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="font-black text-4xl text-preto">Why choose CodeSolutions?</h1>
        <p className="font-normal text-[16px] text-preto w-4/5 text-balance">When you work with CodeSol, you&apos;re not just hiring a team of developers. You&apos;re partnering with a company that&apos;s dedicated to delivering exceptional software solutions. Here are a few reasons why clients choose us for their development needs:</p>
      </div>
    </>
  );
}
