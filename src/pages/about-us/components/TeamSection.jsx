import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kartikeya Gupta",
      role: "Team Lead & Full Stack Developer",
      expertise: "React, Node.js, DataBase and Cloud",
      image: "/assets/images/Kartikeya.jpg",
      connection: "Passionate about preserving Himalayan monastery heritage through technology",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Om Shukla",
      role: "UI/UX Designer & Frontend Developer",
      expertise: "Design Systems, React, Cultural Aesthetics",
      image: "/assets/images/om.jpg",
      connection: "Specializes in creating intuitive interfaces that honor traditional monastery aesthetics",
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Backend Developer & DevOps",
      expertise: "Monastery History, Cultural Preservation",
      image: "/assets/images/rahul.jpg",
      connection: "Born in Ladakh, dedicated to preserving authentic monastery traditions and stories",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Mridul Goyal",
      role: "AI/ML Engineer",
      expertise: "Computer Vision, NLP, Cultural AI",
      image: "/assets/images/mridul.jpg",
      connection: "Develops AI systems that understand and interpret monastery art and cultural symbols",
      linkedin: "#",
      github: "#"
    },
    {
      id: 5,
      name: "Yash Khandelwal",
      role: "Cultural Researcher & Cloud Engineer",
      expertise: "Cloud Architecture, Database Design",
      image: "/assets/images/yash.jpg",
      connection: "Ensures scalable infrastructure to serve heritage content to global audiences",
      linkedin: "#",
      github: "#"
    },
    {
      id: 6,
      name: "Vaishnavi",
      role: "VR/AR Developer",
      expertise: "Three.js, WebXR, Immersive Experiences",
      image: "/assets/images/vaishnavi.jpeg",
      connection: "Creates immersive virtual experiences that transport users into monastery environments",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse group of technologists, cultural experts, and heritage enthusiasts working together to bridge ancient wisdom with modern innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="breathing-card bg-card rounded-xl p-6 text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden spiritual-shadow">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-primary-foreground" />
                </div>
              </div>

              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                {member?.name}
              </h3>
              <p className="font-body text-primary font-medium mb-2">
                {member?.role}
              </p>
              <p className="font-caption text-sm text-muted-foreground mb-4">
                {member?.expertise}
              </p>
              <p className="font-body text-sm text-card-foreground mb-6 leading-relaxed">
                {member?.connection}
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member?.linkedin}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors duration-200"
                  aria-label={`${member?.name} LinkedIn`}
                >
                  <Icon name="Linkedin" size={18} className="text-accent-foreground" />
                </a>
                <a
                  href={member?.github}
                  className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center hover:bg-foreground/80 transition-colors duration-200"
                  aria-label={`${member?.name} GitHub`}
                >
                  <Icon name="Github" size={18} className="text-background" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;