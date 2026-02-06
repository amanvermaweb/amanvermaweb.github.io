import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import SharedIconLink from "../SharedIconLink";

const socialLinks = [
  {
    label: "Github",
    href: "https://www.github.com/amanvermaweb",
    iconLight: "/icons/GitHub_light.svg",
    iconDark: "/icons/GitHub_dark.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aman-verma-dev/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Email",
    href: "mailto:amanverma.codes@gmail.com",
    icon: "/icons/gmail.svg",
  },
  {
    label: "X",
    href: "https://x.com/amanvermadev",
    iconLight: "/icons/X (formerly Twitter)_light.svg",
    iconDark: "/icons/X (formerly Twitter)_dark.svg",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section flex items-center flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let&apos;s build something cool together 👋</p>
      </div>
      <div className="container-page flex md:flex-row flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 outline p-8 rounded-xl overflow-auto">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <div className="flex gap-4">
              <div className="bg-surface-2 p-2 rounded-full mb-2 text-foreground">
                <MapPin size={24} className="text-current" />
              </div>
              <div>
                <h4 className="text-muted">Location</h4>
                <p className="text-sm md:text-base">Lucknow, India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-2 p-2 rounded-full mb-2 text-foreground">
                <Mail size={24} className="text-current" />
              </div>
              <div>
                <h4 className="text-muted">Email</h4>
                <p className="text-sm md:text-base">amanverma.codes@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 outline p-8 rounded-xl ">
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <SharedIconLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  iconLight={link.iconLight}
                  iconDark={link.iconDark}
                  className="outline p-2 px-3 rounded-lg hover:scale-105 transition-transform duration-300"
                  iconSize={20}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
