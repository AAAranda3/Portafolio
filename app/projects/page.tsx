"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function ProjectsPage() {
  return (
    <div className="flex flex-col items-center mt-20 px-4 md:px-8 pb-20">
      <h2 className="text-4xl text-primary font-semibold mb-8">Projects</h2>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-4xl pt-10">
        {/* Card 1 */}
        <Card isFooterBlurred className="w-full h-[300px] bg-cover bg-center rounded-md overflow-hidden relative">
          <CardHeader className="absolute z-20 top-4 left-4 flex flex-col items-start">
            <p className="text-xs text-white/90 uppercase font-bold">SAVA Logistic calculator</p>
            <h4 className="text-white/90 font-medium text-lg md:text-xl">Calculations made easy</h4>
          </CardHeader>

          <Image
            removeWrapper
            alt="Relaxing app background"
            className="w-full h-full object-cover bg-black"
            src="./savaLogistic.jpg"
          />

          <CardFooter className="absolute bg-black/50 bottom-0 z-20 border-t border-default-600 dark:border-default-100 flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
              <Image
                alt="Breathing app icon"
                className="rounded w-8 h-8"
                src="./calculadora.png"
              />
              <div className="flex flex-col">
                <p className="text-xs text-white/80">Pick origin and destiny</p>
                <p className="text-xs text-white/80">Calculate prices based on the type of charge</p>
              </div>
            </div>
            <Button
              as="a"
              href="https://www.savaexpress.com/restricciones/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              type="button"
              size="sm"
              radius="full"
            >
              Try it
            </Button>

          </CardFooter>
        </Card>



        {/* Card 2 */} 
        <Card isFooterBlurred className="w-full h-[300px] bg-cover bg-center rounded-md overflow-hidden relative">
          <CardHeader className="absolute z-20 top-4 left-4 flex flex-col items-start">
            <p className="text-xs text-white/90 uppercase font-bold">Benestar Animal</p>
            <h4 className="text-white/90 font-medium text-lg md:text-xl">Adopt Love, Change a life!</h4>
          </CardHeader>

          <Image
            removeWrapper
            alt="Relaxing app background"
            className="w-full h-full object-cover"
            src="./benestarFondo.jpg"
          />

          <CardFooter className="absolute bg-black/50 bottom-0 z-20 border-t border-default-600 dark:border-default-100 flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
              <Image
                alt="Breathing app icon"
                className="rounded w-8 h-8"
                src="./benestarAnimal.jpg"
              />
              <div className="flex flex-col">
                <p className="text-xs text-white/80">Adopt on our animal refugees</p>
                <p className="text-xs text-white/80">Be a volunteer, complain about any kind of abuse...</p>
              </div>
            </div>

          </CardFooter>
        </Card>


      </div>
    </div>
  );
}

/* <Button
              as="a"
              href="https://www.savaexpress.com/restricciones/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              type="button"
              size="sm"
              radius="full"
            >
              Get App
            </Button> 
*/