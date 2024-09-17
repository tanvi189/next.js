import React from 'react'

const page = () => {
  return (
    <div>name us page<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/pic1.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My name is Muhammad Tanveer. I am student of genrative AI and my teacher name is sir Asif.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Tanveer 
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff genrative,AI
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page