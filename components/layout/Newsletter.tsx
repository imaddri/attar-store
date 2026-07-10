export default function Newsletter(){

return(

<section className="bg-emerald-700 py-20 text-center text-white">

<h2 className="text-4xl font-bold">

اشترك في النشرة البريدية

</h2>

<p className="mt-4">

احصل على أحدث العروض والمنتجات الجديدة.

</p>

<div className="mx-auto mt-10 flex max-w-xl gap-4">

<input

placeholder="البريد الإلكتروني"

className="h-12 flex-1 rounded-xl px-4 text-black"

/>

<button

className="rounded-xl bg-amber-500 px-8"

>

اشتراك

</button>

</div>

</section>

);

}