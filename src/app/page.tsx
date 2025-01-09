
import Hero from "@/Components/Hero/Hero";
import My from "@/Components/My/My";
import { client } from "@/sanity/lib/client";


export default async function Home() {

  const query = `*[_type=='blogs'] | order(_updatedAt desc)   {
                  para, title,
                   "slug":slug.current,
        image
        }`

  const data:Blog[] = await client.fetch(query)
  console.log(data);
  
  

  return (
    
    <main >
      <div className="flex">
    {
      data.map((data:Blog)=>(

        <Hero data={data} key={data.slug}/>      
      ))


      
    }
    </div>

    <My />
    

    </main>
  );
}
