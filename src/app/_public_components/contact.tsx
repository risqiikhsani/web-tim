import BorderCool from "@/components/border-cool";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <BorderCool>

      {/* <section className="p-4">
        <div className="container">
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
              <div className="text-center lg:text-left">
                <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                  Contact Us
                </h1>
                <p className="text-muted-foreground">
                  We are available for questions, feedback, or collaboration
                  opportunities. Let us know how we can help!
                </p>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                
              </div>
            </div>
            <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="p-4">
        <div className="">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold">Reach Us</span>
            <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
              Speak with Our Friendly Team
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;d love to assist you. Fill out the form or drop us an
              email.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <Mail className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Email Us</p>
              <p className="mb-3 text-muted-foreground">
                Our team is ready to assist.
              </p>
              <a
                href="mailto:hello@mytimcorp.com"
                target="_blank"
                className="hover:underline"
              >
                hello@mytimcorp.com
              </a>
            </div>
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <MapPin className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">Visit Us</p>
              <p className="mb-3 text-muted-foreground">
                Drop by our office for a chat.
              </p>
              <a
                href="https://maps.app.goo.gl/27rw3Tb2DqLeib7KA"
                target="_blank"
                className="hover:underline"
              >
                Gedung Pondok Indah Office Tower 3, 17th Floor, Jl. Sultan
                Iskandar Muda Kav V-TA, Jakarta 12310, Indonesia
              </a>
            </div>
            <div>
              <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
                <Phone className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold"> Call Us</p>
              <p className="mb-3 text-muted-foreground">
                We&apos;re available Mon-Fri, 9am-5pm.
              </p>
              <a href="#" className="font-semibold hover:underline">
                +62 21 2953 8953
              </a>
            </div>
          </div>
        </div>
      </section>
    </BorderCool>
  );
};

export default Contact;
