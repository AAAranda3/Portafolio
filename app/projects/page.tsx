"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export function ProjectsPage() {
  return (
    <div className="flex flex-col items-center mt-20 px-4 md:px-8">
      <h2 className="text-4xl text-primary font-semibold mb-8">Projects</h2>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-4xl pt-10">
        {/* Card 1 */}
        <Card isFooterBlurred className="w-full h-[300px] bg-cover bg-center rounded-md overflow-hidden">
          <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start">
            <p className="text-xs text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-lg md:text-xl">Acme Camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Acme Camera background"
            className="w-full h-full object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 flex justify-between items-center p-4">
            <div>
              <p className="text-black text-xs">Available soon.</p>
              <p className="text-black text-xs">Get notified.</p>
            </div>
            <Button className="text-xs" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card isFooterBlurred className="w-full h-[300px] bg-cover bg-center rounded-md overflow-hidden">
          <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start">
            <p className="text-xs text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-lg md:text-xl">Acme Camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Acme Camera background"
            className="w-full h-full object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 flex justify-between items-center p-4">
            <div>
              <p className="text-black text-xs">Available soon.</p>
              <p className="text-black text-xs">Get notified.</p>
            </div>
            <Button className="text-xs" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card isFooterBlurred className="w-full h-[300px] bg-cover bg-center rounded-md overflow-hidden">
          <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start">
            <p className="text-xs text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-lg md:text-xl">Acme Camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Acme Camera background"
            className="w-full h-full object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 flex justify-between items-center p-4">
            <div>
              <p className="text-black text-xs">Available soon.</p>
              <p className="text-black text-xs">Get notified.</p>
            </div>
            <Button className="text-xs" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>

        {/* Card 4 */}
        <Card isFooterBlurred className="w-full h-[300px] bg-cover bg-center rounded-md overflow-hidden">
          <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start">
            <p className="text-xs text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-lg md:text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-10"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-xs text-white/60">Breathing App</p>
                <p className="text-xs text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
