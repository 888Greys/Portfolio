import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Kipronoh</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         I'm Grey Kipronoh, a Backend developer and Professional Gamer, building my version of
         the digital world one project at a time.  
         From planning and designing to implementation, all my coding projects are crafted from scratch to
         solve real-world problems effectively.  
         Notable projects include an eCommerce platform powered by Django and React, and an AI-powered article summarizer.
                  <br />
         <br/>
            With a strong foundation in backend development, AI, and creative problem-solving, I continue to push boundaries
            as I pursue a degree in Software Development at KCA University.
            <a
               href="https://youtube.com/fknight"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               
            </a>{' '}
            
         </p>
      </div>
   )
}

export default Intro;