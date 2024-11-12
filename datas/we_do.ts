import { StaticImageData } from 'next/image'
import apiIcon from './api.png'

interface IThingsWeDo {
  icon: StaticImageData,
  title: string,
  description: string
}

export const thingsWeDo: IThingsWeDo[12] = [
  {
    icon: apiIcon,
    title: "APIs",
    description: "We design, build, and maintain APIs for web and mobile applications."
  },
  {
    icon: frontIcon,
    title: "Front-End",
    description: "We create beautiful, responsive, and fast user interfaces using modern web technologies."
  },
  {
    icon: backIcon,
    title: "Back-End",
    description: "We architect scalable, maintainable, and secure server-side applications for any use case."
  },
  {
    icon: fullIcon,
    title: "Full Stack",
    description: "We provide end-to-end development services for web and mobile applications."
  },
  {
    icon: dbIcon,
    title: "Databases",
    description: "We design, deploy, and optimize databases for web and mobile applications."
  },
  {
    icon: mobileIcon,
    title: "Mobile Apps",
    description: "We develop cross-platform mobile apps using React Native or Flutter."
  },
  {
    icon: webIcon,
    title: "Web Apps",
    description: "We build custom web applications with interactive features and seamless user experiences."
  },
  {
    icon: siteIcon,
    title: "Websites",
    description: "We design and develop professional websites for businesses and organizations."
  },
  {
    icon: automationIcon,
    title: "Automation",
    description: "We automate repetitive tasks and streamline workflows with custom scripts and integrations."
  },
  {
    icon: serverlessIcon,
    title: "Serverless",
    description: "We leverage cloud platforms to build scalable, event-driven, and cost-effective applications."
  },
  {
    icon: desktopIcon,
    title: "Desktop Apps",
    description: "We develop native desktop applications for Windows, macOS, and Linux using Electron or other frameworks."
  },
  {
    icon: cliIcon,
    title: "CLI Tools",
    description: "We create command-line interface (CLI) tools for automating tasks, managing data, and more."
  },
]