import { UILoader } from "@/components/UI/UILoader/UILoader";

export default function Loading() {
  return (
    <main className='h-full w-full flex justify-center'>
      <UILoader height={35} width={35} />
    </main>
  )
}