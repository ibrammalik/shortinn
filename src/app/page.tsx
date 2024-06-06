import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Shorten Your Long Links!</h1>

            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">URL Shortener is an efficient and easy-to-use URL shortening service that streamlines your online experience</p>
            
            <form className="w-full max-w-3xl mx-auto mb-4">
              <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>

              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Image src="/link.svg" width={30} height={30} alt="link logo"/>
                </div>

                <input type="email" id="default-email" className="block w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your long link here..." required />
                
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shorten Now!</button>
              </div>
            </form>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </main>
  );
}
