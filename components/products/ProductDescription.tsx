interface Props{

description:string;

}

export default function ProductDescription({

description

}:Props){

return(

<div>

<h3 className="mb-3 text-2xl font-bold">

الوصف

</h3>

<p className="leading-8 text-zinc-600">

{description}

</p>

</div>

);

}