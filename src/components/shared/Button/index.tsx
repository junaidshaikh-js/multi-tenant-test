export default function PrimaryButton({ children }: { children: React.ReactNode }) {
  return <button className='py-2 px-4 border border-brand-primary rounded-lg hover:bg-brand-secondary'>{children}</button>
}
