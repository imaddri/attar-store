import Image from "next/image";

interface Props{
image:string;
name:string;
}

export default function ProductGallery({
image,
name
}:Props){

return(

<div className="overflow-hidden rounded-3xl bg-stone-100">

<Image

src={image}

alt={name}

width={700}

height={700}

className="w-full object-cover"

/>

</div>

);

}