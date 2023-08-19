// import { useSession, signOut } from "next-auth/react";
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


import { useRouter } from "next/router";

const Navbar = () => {
  // const { data: session } = useSession();
  const router = useRouter();
  // console.log("Session:", session);
  const handleSignOut = async () => {
    await signOut();
  }
  return (
    <>
    {/* <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            
          {!session ? (
              <Link
           
                href="/auth/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
            ) :null}

            {session ? (
              <>
                <button
                
                onClick={handleSignOut} // Call handleSignOut function on click
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log out
                </button>
                <Link
                  href="/profile"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Profile
                </Link>
              </>
            )

                : null}

          </div>
        </div>
      </nav> */}
    <nav className={styles.mainnav}>
        <ul>
        <Link href='/'><a><h2>Personal Beloging App</h2></a></Link>
          <Link href='/'><a><li>Home</li></a></Link>
         
          <Link href='/blog'><a><li>DashBoard</li></a></Link>
          <Link href='/'><a><li >SignOut</li></a></Link>
        </ul>
      </nav>
      </>
  )
}

export default Navbar