import { UILoader } from "@/components/UI/UILoader/UILoader";

export default function Loading() {
  return (
    <main className='h-full w-full flex justify-center'>
      <UILoader height={60} width={60} />
    </main>
  )
}