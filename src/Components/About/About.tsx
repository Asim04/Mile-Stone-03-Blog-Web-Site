import { client } from '@/sanity/lib/client';
import Head from 'next/head';
import Image from 'next/image';
import img1 from "../../../public/img1.jpg"

export default async function AboutUs() {
    
      
     
      
      
  return (
    <>
    
      <Head>
        <title>About Us | My Blog</title>
        <meta name="description" content="Learn more about our blog and the team behind it." />
      </Head>

      <div className="container mx-auto px-4 py-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
          Welcome to our blog! We are a team of passionate writers and enthusiasts dedicated to sharing insightful and engaging content on a variety of topics. We strive to provide our readers with valuable information, unique perspectives, and thought-provoking discussions. Our goal is to create a community where people can connect, learn, and grow together.
        </p>
        

        {/* : Team Member Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="team-member rounded-lg shadow-md overflow-hidden my-4">
            <Image
              src={img1}
              alt="Team Member 1"
              width={100}
              height={100}
              className="object-cover w-full  "
              layout=""
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">Asim khan</h3>
              <p className="text-gray-700">wed developer</p>
              <p className='text-gray-700'>Giaic student</p>
            </div>

      

          </div>

          <div className="team-member rounded-lg shadow-md overflow-hidden">
            <Image
              src={img1}
              alt="Team Member 1"
              width={100}
              height={100}
              className="object-cover w-full  "
              layout=""
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">Asim khan</h3>
              <p className="text-gray-700">wed developer</p>
              <p className='text-gray-700'>Giaic student</p>
            </div>

      

          </div>
                  {/* third card */}
          <div className="team-member rounded-lg shadow-md overflow-hidden">
            <Image
              src={img1}
              alt="Team Member 1"
              width={100}
              height={100}
              className="object-cover w-full  "
              layout=""
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">Asim khan</h3>
              <p className="text-gray-700">wed developer</p>
              <p className='text-gray-700'>Giaic student</p>
            </div>

      

          </div>

          
          {/* Add more team member cards here */}
        </div>

        {/* Optional: Contact Information */}
        <h2 className="text-2xl font-semibold text-center mt-12">Contact Us</h2>
        <p className="text-lg text-gray-700 text-center mb-4">
          You can reach us at:
        </p>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <a href="mailto:khan@myblog.com" className="text-blue-500 hover:text-blue-700">
              Email: khan@myblog.com
            </a>
          </li>
          <li>
            {/* Add social media links here */}
            <a href="https://www.linkedin.com/feed/" target='blank' className="text-blue-500 hover:text-blue-700">
              Social Media: []
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}