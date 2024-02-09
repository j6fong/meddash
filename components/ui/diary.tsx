import * as React from "react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DatePickerWithPresets } from '@/components/ui/datepick'

import entries from '@/SampleEntries.json';


export function CarouselDemo() {
  // Create an empty map to store the transformed data
  const entriesMap = new Map();

  // Iterate through the JSON data array
  entries.forEach(item => {
    // Add each element to the map with the timestamp as the key and the entry as the value
    entriesMap.set(item.timestamp, item.entry);
  });

  // Now, entriesMap contains each timestamp as key and entry as value
  // console.log(entriesMap);

  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {entries.map(entry => (
          <CarouselItem key={entry.timestamp}>
            <div className="p-1">
              <Card>
                <CardHeader>
                    <CardTitle className="flex justify-center p-6"><DatePickerWithPresets /></CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square p-6">
                  <span>{entry.entry}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
