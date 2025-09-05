export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <p className="text-3xl font-bold">
        Aradığınız Sayfa Bulunamadı!
      </p>
      <div className="w-120 h-100">
        <img src="not-found.png"/>
      </div>
    </div>
  )
}