import Link from 'next/link';

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black py-10">
      <div className='flex flex-col gap-4 max-w-screen-lg mx-auto'>
      <h1 className="text-brand-primary text-5xl">{children}</h1>
      <p className="text-brand-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, error fuga perspiciatis repellat
        distinctio atque. Harum doloremque eos corrupti ipsam corporis qui minus accusamus dolorem at, dolorum
        odit mollitia praesentium.
      </p>
      <Link href="/about" className='text-white mt-4 block hover:underline'>About Us (click me)</Link>
      </div>
    </div>
  ) 
}
