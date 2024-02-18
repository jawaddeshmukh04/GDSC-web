import React from 'react';
function Footer() {
    return (
        <div>
       <footer className="px-20 grid grid-cols-1 gap-4 bg-black">
  <div className="mx-auto max-w-screen-xxl space-y-8 px-4 py-16  lg:space-y-16 lg:px-8">
    <div className=" grid grid-cols-1 gap-4  lg:grid-cols-3 ">
    <div className="div">
    <img src="images/download.png" height="300" width="300" alt="logo"/>
    </div>
      <div className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
        <p className='text-gray-400 mt-5'>
          A more meaningful home for students
        </p>
        <h1 className='text-white mt-15'>Join our chapter at AIKTC
        <a
  className="ml-5 mt-2 inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  <svg
    className="h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</a>
</h1>
      </div>
      <div className="grid grid-row-2 sm:grid-row-2 lg:grid-row-2 mt-10">
  <div className="mr-5">
    <p className="line-height-10 text-gray-900 dark:text-white">HOME</p>

    <ul className="space-y-2 text-sm">
      <li className="text-center">
        <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 mr-5 text-center">About GDSC</a>
        <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 mr-5 text-center">Team</a>
      </li>
    </ul>
  </div>

  <div className=''>
    <p className="text-gray-900 dark:text-white ">EVENTS</p>
    <ul className="mt-3 space-y-2 text-sm">
      <li className="text-center">
        <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 mr-5">Google Cloud</a>
        <a href="#" className="text-gray-700 transition hover:opacity-50 dark:text-gray-200 mr-5">Android dev</a>
        <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Web dev</a>
      </li>
    </ul>
  </div>
</div>
    </div>
  </div>
    <div className="grid grid-cols-3  mb-0 dark:text-gray-400">
    <p className='self-center'>Terms & Conditions | Privacy Policy </p>
    <div className='self-center text-center'>

    <ul className=" flex gap-6 ml-10 justify-center ">
           <li>
            <a
              href="https://www.linkedin.com/in/dsc-aiktc/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">LinkedIn</span>
     
     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
       <path
         fillRule="evenodd"
         d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v17.9A1.55 1.55 0 0 0 3.55 23h16.9A1.55 1.55 0 0 0 22 21.45V3.55A1.55 1.55 0 0 0 20.45 2zM8 19H5V10h3zm-1.5-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 9h-3v-5.25c0-1.38-.5-2.75-2.25-2.75S10 12.37 10 13.75V19H7V10h3v1.25a4 4 0 0 1 4-4c2.25 0 3.75 1.5 3.75 4.25V19z"
         clipRule="evenodd"
       />
     </svg>
            </a>
          </li> 
          <li>
            <a
              href="https://www.instagram.com/gdscaiktc/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">Instagram</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/gdsc_aiktc"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">Twitter</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DSC-Aiktc"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">GitHub</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCv0_S3AGWC8Okl3F8LfCEvw"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">YouTube</span>

<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path
    fillRule="evenodd"
    d="M23.25 7.13c-.27-1.03-1.02-1.82-2.03-2.1C19.54 5 12 5 12 5s-7.54 0-9.22.02c-1.01.28-1.76 1.07-2.03 2.1-.21 1.2-.3 3.33-.3 3.33s-.01 2.13.01 3.44c.03 1.13.12 2.4.3 3.38.27 1.03.99 1.79 2.02 2.08 1.33.33 9.44.33 9.44.33s7.5 0 9.22-.02c1.01-.29 1.76-1.07 2.03-2.08.21-1.2.3-3.38.3-3.38s.09-2.24.09-3.44c0-1.12-.08-2.2-.3-3.33zM9.5 15.36V8.64l6.5 3.36-6.5 3.36z"
    clipRule="evenodd"
  />
</svg>

            </a>
          </li>
        </ul>
    </div>
    <p className="text-
     dark:text-gray-400 self-center">
      &copy; 2024 Google Developer Student Club - AIKTC. All rights reserved.
    </p>
    </div>
</footer>
        </div>
    )
  }
  
  export default Footer;
  