import PrimaryButton from '@/components/shared/Button';

export default function About() {
  return <div className='flex flex-col gap-4 max-w-screen-lg mx-auto items-center'>
    <h1 className='text-center text-4xl font-bold'>About Ratecity</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non id quidem laborum soluta at nulla nisi dicta hic maiores officiis consequatur, illum deserunt numquam quo aperiam recusandae ea ab!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione veniam, odit ipsa culpa adipisci necessitatibus mollitia facere et consequatur eius natus repellat, delectus minus expedita! Quod quam minima repudiandae.
    </p>
    <PrimaryButton>Contact Us</PrimaryButton>
  </div>
}