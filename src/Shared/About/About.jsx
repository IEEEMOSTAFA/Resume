import { Download, Eye, Code, Award, Clock } from "lucide-react";

export default function About() {
  const handleDownloadCV = () => {
    window.open("https://github.com/IEEEMOSTAFA/Resume/blob/main/Mostafa_Resume_2.pdf", "_blank");
  };

  const handleViewProjects = () => {
    // TODO: Navigate to projects section when implemented
    console.log("Navigate to projects section");
  };

  const statsData = [
    {
      icon: Code,
      value: "4",
      label: "Total Projects",
      description: "Innovative web & mobile solutions crafted",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Award,
      value: "2",
      label: "Certificates",
      description: "Professional skills validated",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      value: "1",
      label: "Years of Experience",
      description: "Continuous learning journey",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Profile Section */}
        <div className="text-center mb-16">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="avatar">
              <div className="w-48 rounded-full">
                <img 
                  src="https://i.postimg.cc/rwsGmw9h/portfolio-img.jpg" 
                  alt="Abhishek Ganvir - Full Stack Developer" 
                  className="profile-image object-cover border-4 border-white shadow-2xl"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
          
          {/* About Me Heading */}
          <h1 className="text-5xl font-bold text-base-content mb-6" data-testid="text-about-heading">
            About Me
          </h1>
          
          {/* Introduction Text */}
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-base-content opacity-80 leading-relaxed">
            <p data-testid="text-introduction">
              Hello, I'm <span className="text-base-content font-semibold">Mostafa</span>, a backend-focused web developer with a strong interest in software security. I specialize in building secure, scalable, and efficient backend applications while also having experience across the full MERN stack. Having completed a full-stack development course, I continuously explore modern tools and technologies to refine my skills and deliver impactful digital solutions.
            </p>
            <p data-testid="text-goals">
             With a mindset of continuous learning, my short-term goal is to transition into the IT industry by 2025, and in the long run, I aspire to expand my expertise into Generative AI and AI automation.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button 
              onClick={handleDownloadCV}
              className="btn btn-primary btn-lg"
              data-testid="button-download-cv"
            >
              <Download className="mr-3" size={20} />
              Download CV
            </button>
            <button 
              onClick={handleViewProjects}
              className="btn btn-outline btn-lg"
              data-testid="button-view-projects"
            >
              <Eye className="mr-3" size={20} />
              View Projects
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`card-stat-${index}`}
              >
                <div className="card-body items-center text-center">
                  <div className={`flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6`}>
                    <IconComponent className={`text-2xl ${stat.iconColor}`} size={32} />
                  </div>
                  <h3 
                    className="card-title text-4xl font-bold text-base-content mb-2" 
                    data-testid={`text-stat-value-${index}`}
                  >
                    {stat.value}
                  </h3>
                  <p 
                    className="text-lg font-semibold text-base-content mb-1"
                    data-testid={`text-stat-label-${index}`}
                  >
                    {stat.label}
                  </p>
                  <p 
                    className="text-base-content opacity-70"
                    data-testid={`text-stat-description-${index}`}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}