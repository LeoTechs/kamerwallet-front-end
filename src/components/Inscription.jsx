import React from 'react';
import axios from 'axios';

function Inscription() {
 
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className='container h-full '>
    <div className="shadow-2xl flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="  sm:mx-auto sm:w-full sm:max-w-4xl">
        <div className="flex flex-col lg:flex-row bg-white  border-2 border-blue-500 rounded-lg p-4">
          <div className="lg:w-1/2 lg:pr-8">
            <img
              alt="Your Company"
              src="../public/logo.png"
              className="mx-auto h-10 w-auto"
              width="200px"
              height="200px"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
             Bienvenue sur votre espace client
            </h2>
            <form action="#" method="POST" className="mt-10 space-y-6">
              <div>
                <label htmlFor="email" className=" text-sm/6 font-medium text-gray-900">
                  Adresse Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  
                </div>
                <label htmlFor="email" className=" text-sm/6 font-medium text-gray-900">
                Votre nom
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Mot de passe 
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                     
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Connexion
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Vous aves dejà un compte?{' '}
              <a href="/connexion" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Inscription
              </a>
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-16 mt-10 lg:mt-0 flex justify-center items-center">
            <img src="./public/Filing system-rafiki.png" alt="image de mise en avant" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}


export default Inscription;
