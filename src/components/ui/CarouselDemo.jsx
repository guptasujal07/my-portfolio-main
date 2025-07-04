import { projectData } from "../../projectData.js";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard.jsx";

export function CarouselDemo() {
  return (
    <Carousel className=" mx-auto max-w-[95%] sm:max-w-[80%] sm:px-8  overflow-x-hidden  ">
      <CarouselContent>
        {projectData.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent">
                <CardContent className=" p-6">
                  <ProjectCard project={project} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
