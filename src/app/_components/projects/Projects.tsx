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


const Projects = () => {
  const [projects, setProjects] = useState<Data>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Data) => setProjects(data));


  }, []);

  return (
    <div className="py-8 px-4">
      <h1 className="text-center font-bold text-3xl py-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
        {projects.map((project) => (
          <Card key={project.id} className="px-4 text-center bg-transparent group">
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
                        <p>This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.</p>
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
            {project.featured && <Badge variant="secondary">Featured</Badge>}

            <CardFooter >
              <Link href={project.urlSite} target="_blank"><Button>View Project</Button></Link>
              <Link href={project.urlCode} target="_blank"><Button>View Code</Button></Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;