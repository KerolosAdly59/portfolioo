"use client"
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Data } from "@/app/Types/Projext.type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Projects = () => {
  // {
  //   "id": 4,
  //   "title": "Social Media App",
  //   "description": "A full-stack social media application where users can create posts, interact, and manage content with authentication and real-time updates.",
  //   "details": [
  //     "Implemented user authentication system",
  //     "Users can create, edit, and delete posts",
  //     "Managed state and protected routes",
  //     "Built interactive and responsive UI"
  //   ],
  //   "image": "https://raw.githubusercontent.com/KerolosAdly59/socialApp/e4399d82fd0487bdd057cd9257e818e69b87d82c/SocialApp.png",
  //   "urlSite": "https://social-app-pi-steel.vercel.app",
  //   "urlCode": "https://github.com/KerolosAdly59/socialApp",
  //   "featured": true
  // },
  const [projects, setProjects] = useState<Data>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Data) => setProjects(data));


  }, []);
  

  return (
    <div className="py-8 px-4">
      <h1 className="text-center font-bold text-3xl py-8">Projects</h1>
      <div className=" realative">
        {projects.length > 0 && (

          <Swiper className=""
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            speed={500}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Card className="px-4 text-center bg-transparent group">
                  <CardHeader className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-600 mb-2 "
                    />
                    <div className="text-left absolute top-0 left-0 w-full h-full bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">


                      <Dialog >
                        <DialogTrigger asChild className="">
                          <Button>Show Details</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[85vw]!  md:max-w-[30vw]! md:max-h-fit bg-slate-200">
                          <DialogHeader>
                            <DialogTitle className="text-center text-2xl font-bold text-blue-600">{project.title}</DialogTitle>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-[50vw] md:h-[18vw] object-fill group-hover:scale-125 transition-transform duration-600 mb-2 "
                            />

                            <DialogDescription className="text-black">
                              <h6 className="text-center text-blue-600 font-bold my-2 text-[20px]">experinece project</h6>
                              {project.details.map((detail, index) => (
                                <p key={index} className="text-sm  mb-1">
                                  {detail}
                                </p>
                              ))}
                              <div className="my-2">

                                <Link href={project.urlSite} target="_blank" className="me-2"><Button className="bg-blue-600 cursor-pointer">View Project</Button></Link>
                                <Link href={project.urlCode} target="_blank"><Button className="bg-blue-600 cursor-pointer">View Code</Button></Link>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  {project.featured ? <Badge variant="secondary">Featured</Badge> : <p className="py-[9.5px]"></p>}
                  <Dialog >
                    <DialogTrigger asChild className="">
                      <Button className="cursor-pointer">Show Details</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[85vw]!  md:max-w-[30vw]! md:max-h-fit bg-slate-200">
                      <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-bold text-blue-600">{project.title}</DialogTitle>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[50vw] md:h-[18vw] object-fill group-hover:scale-125 transition-transform duration-600 mb-2 "
                        />

                        <DialogDescription className="text-black">
                          <h6 className="text-center text-blue-600 font-bold my-2 text-[20px]">experinece project</h6>
                          {project.details.map((detail, index) => (
                            <p key={index} className="text-sm  mb-1">
                              {detail}
                            </p>
                          ))}
                          <div className="my-2">

                            <Link href={project.urlSite} target="_blank" className="me-2"><Button className="bg-blue-600 cursor-pointer">Live-Demo</Button></Link>
                            <Link href={project.urlCode} target="_blank"><Button className="bg-blue-600 cursor-pointer">Github-Repository</Button></Link>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <CardFooter >
                    <Link href={project.urlSite} target="_blank"><Button className="cursor-pointer">Live-Demo</Button></Link>
                    <Link href={project.urlCode} target="_blank"><Button className="cursor-pointer">Github-Repository</Button></Link>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}


 <div className="custom-next absolute top-1/2 right-0 -translate-y-1/2 dark:text-slate-100 text-7xl cursor-pointer z-10">›</div>
  <div className="custom-prev absolute top-1/2 left-0 -translate-y-1/2  dark:text-slate-100 text-7xl cursor-pointer z-10">‹</div>


          </Swiper>
        )}
      </div>

    </div>
  );
};

export default Projects;

