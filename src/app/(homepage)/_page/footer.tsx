import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { P } from "@/components/typography/Typography";
import logo from "@/logo/timcorp.png";
import { Mail } from "lucide-react";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Cloud Consulting", href: "/services/cloud-consulting" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      {
        name: "Cloud Migration",
        href: "/services/cloud-migration-transformation",
      },
      { name: "Education", href: "/services/education" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Company", href: "/company" },
      { name: "News", href: "/news" },
      { name: "Blogs", href: "/blogs" },
      { name: "Careers", href: "/careers" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="p-4 w-full">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
        <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
          <div>
            <span className="flex items-center justify-center gap-4 lg:justify-start">
              <Image
                width={100}
                height={100}
                src={logo}
                alt="logo"
                className="h-11"
              />
              <P className="font-semibold">PT Techno International Mandira</P>
            </span>
            <p className="mt-6 text-sm text-muted-foreground">
              Cloud consulting and training company.
            </p>
          </div>
          <ul className="flex items-center space-x-6 text-muted-foreground">
            <li className="font-medium hover:text-primary">
              <Link
                href="https://www.instagram.com/timcorp.academy/"
                target="_blank"
              >
                <FaInstagram className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-primary">
              <Link href="mailto:hello@mytimcorp.com" target="_blank">
                <Mail className="size-6" />
              </Link>
            </li>
            {/* <li className="font-medium hover:text-primary">
              <Link href="#">
                <FaFacebook className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-primary">
              <Link href="#">
                <FaTwitter className="size-6" />
              </Link>
            </li> */}
            <li className="font-medium hover:text-primary">
              <Link
                href="https://www.linkedin.com/company/timcorpacademy/"
                target="_blank"
              >
                <FaLinkedin className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-6 lg:gap-20">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-6 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
        <p>© TIMCorp. All rights reserved.</p>
        <ul className="flex justify-center gap-4 lg:justify-start">
          <li className="hover:text-primary">
            <a href="#"> Terms and Conditions</a>
          </li>
          <li className="hover:text-primary">
            <a href="#"> Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
