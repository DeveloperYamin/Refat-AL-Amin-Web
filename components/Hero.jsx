import { Button, Tooltip } from "flowbite-react";
import Image from "next/image";
import { HiInbox, HiPhone } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-10">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="flex flex-wrap items-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text pb-1.5 text-3xl font-semibold leading-tight text-transparent">
                <span className="mr-2">Hello,</span>
                <span className="font-extrabold">
                  I'm a Professional Digital Marketer and Social Media marketing
                  Expert
                </span>
              </h1>
              <h2 className="text-2xl font-semibold uppercase text-gray-700 dark:text-white lg:text-3xl">
                I'm a Digital Markter
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-16 sm:mt-8">
                <Tooltip content="developer.yamin@gmail.com" placement="bottom">
                  <Button outline gradientDuoTone="tealToLime">
                    <span className="flex items-center font-bold uppercase text-yellow-500">
                      <HiInbox size={25} />
                      Email
                    </span>
                  </Button>
                </Tooltip>
                <Tooltip content="+8801403370507" placement="bottom">
                  <Button outline gradientDuoTone="redToYellow">
                    <span className="flex items-center font-bold uppercase text-lime-500">
                      <HiPhone size={25} />
                      Call Me
                    </span>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 p-6 sm:p-12 lg:mt-0 lg:w-1/2">
            <Image
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9d8fda7265ae0c7c7725fc60173646aa-1650126483071/3001e9dd-3e75-4fb5-b1da-0070b70ffdfd.png"
              alt="hero"
              width={768}
              height={768}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
