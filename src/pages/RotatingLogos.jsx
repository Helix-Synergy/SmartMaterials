import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.avif"
import img3  from "../assets/tracks/img3.webp";
import img4 from "../assets/tracks/img4.png";
import img5 from "../assets/tracks/img5.webp";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.webp";
import img8 from "../assets/tracks/img8.webp"
import img9 from "../assets/tracks/img9.webp";
import img10 from "../assets/tracks/img10.jpg"
import img11 from "../assets/tracks/img11.webp";
import img12 from "../assets/tracks/img12.jpeg"
import img13 from "../assets/tracks/img13.png";
import img14 from "../assets/tracks/img14.webp"
import img15 from "../assets/tracks/img15.jpeg";
import img16 from "../assets/tracks/img16.png"
import img17 from "../assets/tracks/img17.webp"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.webp"

export const tracks = [
  {
    image: img1,
    title: "AI/Machine Learning",
    description: (
      <>
This track explores the integration of  {" "}
        <Link
          to="/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 AI and machine learning
        </Link> in materials science and manufacturing. Topics include predictive modeling, process optimization, smart automation, and quality control. Participants gain insights into leveraging AI to accelerate innovation, enhance efficiency, and design intelligent manufacturing systems that adapt to complex industrial challenges.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Advanced Nanomaterials",
    description: (
      <>
Focuses on the development, characterization, and application of{" "}
        <Link
          to= "/smartmaterials-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    advanced nanomaterials. 
        </Link>{" "}This track covers synthesis techniques, material properties, and scalable applications across electronics, energy, and healthcare. Participants learn how nanomaterials enhance performance, enable innovation, and transform traditional manufacturing processes through nanoscale design, superior functionality, and precision engineering.
      </>
    ),
  },

  {
    image: img3,
    title: "Intelligent & Responsive Materials",
    description: (
      <>
Explores materials capable of responding to environmental stimuli, such as temperature, light, or stress. This track covers design, characterization, and applications in aerospace, healthcare, and robotics. Participants learn to harness smart materials to develop adaptive, high-performance systems, enabling innovations in sensors, actuators, and next-generation industrial products.{" "}
        <Link
          to="/smartmaterials-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > </Link> 
      </>
    ),
  },

  {
    image: img4,
    title: "Healthcare & Biomedicine",
    description: (
      <>
  This track highlights nanotechnology and advanced materials applications in medical devices, drug delivery, diagnostics, and tissue engineering. Participants gain insights into developing safer, more effective {" "}
        <Link
          to= "/smartmaterials-conference-tracks/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
biomedical solutions, 
        </Link>{" "} integrating smart materials for enhanced patient outcomes, and bridging the gap between materials science innovation and practical healthcare applications.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Nano-Sensors",
    description: (
      <>
Covers design, fabrication, and deployment of {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    nanoscale sensors
        </Link>{" "}  for industrial, healthcare, and environmental applications. Participants explore sensitivity enhancement, real-time monitoring, and AI integration for intelligent detection. Nano-sensors enable precise measurement, early warning systems, and adaptive feedback mechanisms in advanced manufacturing and high-tech industrial processes.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Advanced Composites",
    description: (
      <>
Focuses on high-performance composite materials combining strength, durability, and lightweight properties. This track covers design, fabrication, testing, and applications in  <Link
          to="/about-smartmaterials"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
aerospace, 
        </Link>{" "} automotive, and defense. Participants learn to engineer composites that improve structural efficiency, sustainability, and performance, while enabling innovation in next-generation manufacturing and industrial solutions.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Nano-Photonics",
    description: (
      <>
Explores light-matter interactions at the nanoscale, including photonic devices, sensors, and communication technologies. Participants gain knowledge of fabrication techniques, optical characterization, and practical applications in imaging, telecommunications, and energy systems.{" "}
        <Link
          to="/smartmaterials-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Nano-photonics 
        </Link>{" "}  drives innovation in advanced manufacturing, precision instrumentation, and next-generation smart technologies.
      </>
    ),
  },

  {
    image:  img8,
    title: " Nanoelectronics",
    description: (
      <>
    Focuses on miniaturized electronic components and circuits leveraging nanoscale materials. This track covers semiconductors, transistors, and memory devices, enabling faster, more efficient electronics. Participants explore innovations that enhance device performance, reduce energy consumption, and support the development of intelligent industrial systems and {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  consumer electronics.
        </Link>{" "} 
      
      </>
    ),
  },

  {
    image: img9,
    title: "Graphene Tech",
    description: (
      <>
This track explores{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
graphene synthesis, 
        </Link>{" "} properties, and applications in electronics, energy, and advanced manufacturing. Participants learn how graphene enhances conductivity, flexibility, and material strength, enabling innovative solutions in nanodevices, sensors, composites, and next-generation industrial technologies with transformative potential across multiple sectors.

      </>
    ),
  },

  {
    image: img10,
    title: "Smart Sensors",
    description: (
      <>
Covers the development of sensors with adaptive, responsive, and real-time monitoring capabilities. Topics include IoT integration, energy harvesting, and industrial applications. Participants gain expertise in deploying intelligent sensing solutions that enhance process control, predictive maintenance, and automation across advanced manufacturing and{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 smart technology ecosystems.
        </Link>{" "} 

      </>
    ),
  },

  {
    image: img11,
    title: "Quantum Materials",
    description: (
      <>
    Explores materials exhibiting  {" "}
        <Link
          to="/smartmaterials-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
quantum phenomena
        </Link>  for advanced computing, energy, and sensing applications. Participants learn about superconductors, topological materials, and quantum devices. This track emphasizes harnessing unique quantum properties to develop next-generation technologies, improve performance, and create innovative solutions in high-tech industries and advanced manufacturing processes.
      </>

    ),
  },

  {
    image: img12,
    title: "Digital Manufacturing",
    description: (
      <>
Focuses on Industry 4.0 technologies, including CAD/CAM, IoT, AI integration, and digital twins. Participants learn to implement {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   digital manufacturing
        </Link>{" "}  solutions for enhanced precision, efficiency, and scalability. This track emphasizes smart production systems, automation, and real-time monitoring to optimize manufacturing operations and reduce costs.
      
      </>
    ),
  },

  {
    image: img13,
    title: "Bio-Nanotechnology",
    description: (
      <>
 Covers the intersection of{" "}
        <Link
          to="/about-smartmaterials"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       biology and nanotechnology 
        </Link> for applications in healthcare, environmental monitoring, and industrial processes. Participants explore nanocarriers, biosensors, and biomaterials. This track emphasizes innovation in medical therapies, diagnostics, and sustainable manufacturing using biologically inspired nanomaterials and bio-integrated technologies.

        
      </>
    ),
  },

  {
    image:img14,
    title: "2D Materials",
    description: (
      <>
Focuses on atomically thin materials like graphene and transition metal dichalcogenides. Participants explore synthesis, characterization, and applications in electronics, energy, and sensors. {" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  2D materials
        </Link> enable breakthroughs in flexibility, conductivity, and functionality, driving innovations in next-generation devices and advanced manufacturing processes. 
        
      </>
    ),
  },

  {
    image: img15,
    title: "Advanced Robotics & Automation",
    description: (
      <>
      Covers robotics systems integrated with smart materials, AI, and sensors for precision manufacturing. Participants explore autonomous operations, adaptive systems, and industrial automation. This track emphasizes the design of intelligent manufacturing workflows that enhance productivity, safety, and efficiency while integrating advanced materials and AI-driven control systems.{" "}
        <Link
          to="/smartmaterials-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      
        </Link> 
     
      </>
    ),
  },

  {
    image: img16,
    title: "Thermoelectrics",
    description: (
      <>
Explores materials that convert heat into electricity for energy harvesting and industrial applications. Participants learn about synthesis, characterization, and device integration.  {" "}
        <Link
          to= "/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Thermoelectric
        </Link> materials enable sustainable manufacturing solutions, energy-efficient devices, and smart technologies for powering sensors, robotics, and advanced industrial systems.
</>
    ),
  },

  {
    image:img17,
    title: "Aerospace, Automotive & Defense",
    description: (
      <>
Focuses on advanced materials, composites, and nanotechnology applications in critical industries. Participants explore lightweight, high-strength, and multifunctional materials for aircraft, vehicles, and defense systems. This track emphasizes innovation, performance optimization, and sustainability in next-generation {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     aerospace, automotive, and defense manufacturing.
        </Link>  
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Laser & Plasma-Processing",
    description: (
      <>
  Covers precision material processing using {" "}
        <Link
          to="/about-smartmaterials" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       lasers and plasma 
        </Link>  for cutting, coating, and surface modification. Participants learn advanced techniques for enhanced manufacturing accuracy, material properties, and scalability. This track emphasizes integration of laser and plasma technologies with smart materials and nanotechnology for innovative industrial solutions.

      </>
    ),
  },
 
  
  {
    image: img19,
    title: "Meta Materials",
    description: (
      <>
 Explores engineered materials with unique electromagnetic, acoustic, or mechanical properties. Participants gain insights into design, fabrication, and industrial applications.  {" "}
        <Link
          to= "/smartmaterials-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Meta materials
        </Link> enable breakthroughs in optics, sensors, cloaking devices, and communication technologies, enhancing innovation and functional performance in advanced manufacturing.
      </>
    ),
  },
  {
    image:img20,
    title: "Nano Fibers",
    description: (
      <>
  Focuses on the synthesis, characterization, and applications of {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 nanofibers
        </Link>{" "} in filtration, textiles, healthcare, and energy. Participants learn about scalable production, mechanical properties, and multifunctionality. Nanofibers offer lightweight, high-performance solutions for industrial, medical, and technological applications.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
