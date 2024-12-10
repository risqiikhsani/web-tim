
import { Card, CardContent } from "@/components/ui/card";

import { H1 } from "@/components/typography/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";



const feedback = [
  {
    "type":"student",
    "name":"Risqi Ikhsani",
    "university":"UTDI",
    "workplace":"",
    "comment":"Timcorp has given a very good lesson to their MSIB students. We very much enjoyed our moment when we were studying AWS Solution Architect."
  },
  {
    "type":"student",
    "name":"Wulan Sri Lestari",
    "university":"Universitas Pendidikan Indonesia",
    "workplace":"",
    "comment":"Terima kasih semua! Pak Bintang CEO, Pak Widi, Kak Anisa, para mentor udah sabar banget ngajarin. Gak akan pernah dapet pembelajaran & pengalaman kayak gini di kuliah atau tempat lain. Semangat buat teman2 yang lain"
  },
  {
    "type":"student",
    "name":"Team PENS",
    "university":"Politeknik Elektronika Negeri Surabaya",
    "workplace":"",
    "comment":"Terima kasih PT TIM sudah mendampingi kami di batch 5! Mentornya keren, ramah, dan ilmunya bermanfaat. Sukses selalu semua!"
  },
  {
    "type":"student",
    "name":"Mugi Lestari",
    "university":"Universitas Pamulang",
    "workplace":"",
    "comment":"Senang & bersyukur bisa belajar cloud computing, pasti berguna buat masa depan saya. Terima kasih sudah berbagi ilmu buat kami semua. Jangan bosan mencerdaskan anak bangsa ya!"
  },
  {
    "type":"student",
    "name":"Zaki",
    "university":"UTDI",
    "workplace":"",
    "comment":"Took a solution architect course and it went fluently, Thank you."
  },
  {
    "type":"student",
    "name":"Wulan Sri Lestari",
    "university":"Universitas Pendidikan Indonesia",
    "workplace":"",
    "comment":"Terima kasih semua! Pak Bintang CEO, Pak Widi, Kak Anisa, para mentor udah sabar banget ngajarin. Gak akan pernah dapet pembelajaran & pengalaman kayak gini di kuliah atau tempat lain. Semangat buat teman2 yang lain"
  },
  {
    "type":"student",
    "name":"Team PENS",
    "university":"Politeknik Elektronika Negeri Surabaya",
    "workplace":"",
    "comment":"Terima kasih PT TIM sudah mendampingi kami di batch 5! Mentornya keren, ramah, dan ilmunya bermanfaat. Sukses selalu semua!"
  },
  {
    "type":"student",
    "name":"Mugi Lestari",
    "university":"Universitas Pamulang",
    "workplace":"",
    "comment":"Senang & bersyukur bisa belajar cloud computing, pasti berguna buat masa depan saya. Terima kasih sudah berbagi ilmu buat kami semua. Jangan bosan mencerdaskan anak bangsa ya!"
  }
]

const CustomerFeedback = () => {
  return (

      <div className="flex flex-col justify-center items-center">
        <H1>Feedback from Customers and Students</H1>
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {/* {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.src}
                        alt="Presets.com Example Image"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))} */}
            {feedback.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/4"
              >

                  <Card className="relative overflow-hidden shadow-xl p-4">
                    <CardContent className="not-prose flex flex-col aspect-square items-start justify-start p-2">
                      <FaQuoteLeft className="text-primary text-2xl m-2"/>
                      <p className="text-muted-foreground"> {data.comment} </p>
                      <div className="flex-1"></div>
                      <h1 className="text-primary text-2xl">{data.name}</h1>
                      <h3 className="text-muted-foreground">{data.type} from {data.university} {data.workplace}</h3>
                    </CardContent>
                  </Card>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 text-cyan-500 border-blue-400 border-4"/>
          <CarouselNext className="right-4 top-1/2 text-cyan-500 border-blue-400 border-4" />
        </Carousel>
      </div>
    
  );
};

export default CustomerFeedback;
