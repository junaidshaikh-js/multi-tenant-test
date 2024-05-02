export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black py-10">
      <h1 className="text-brand-primary">{children}</h1>
      <p className="text-brand-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, error fuga perspiciatis repellat
        distinctio atque. Harum doloremque eos corrupti ipsam corporis qui minus accusamus dolorem at, dolorum
        odit mollitia praesentium.
      </p>
    </div>
  )
}
