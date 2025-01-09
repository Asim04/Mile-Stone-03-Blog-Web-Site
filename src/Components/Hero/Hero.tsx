
import { urlFor } from '@/sanity/lib/image'
import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = ({data}:{data:Blog}) => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-3/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-fill object-center p-4"
            src={urlFor(data.image).url()}
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {data.title}
            </h1>
            <p className="leading-relaxed mb-3">
             {data.para}
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={`/blog/${data.slug}`}  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
     
</section>


    </div>
  )
}

export default Hero