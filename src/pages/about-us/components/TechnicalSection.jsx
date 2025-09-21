import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSection = () => {
  const technicalAchievements = [
    {
      id: 1,
      title: "360° VR Integration",
      description: "Seamless WebXR implementation allowing users to explore monastery interiors with full 360-degree immersion using modern web browsers.",
      technologies: ["React 360", "Three.js", "WebXR", "A-Frame"],
      icon: "Eye",
      metrics: "95% browser compatibility"
    },
    {
      id: 2,
      title: "AI Cultural Interpretation",
      description: "Advanced computer vision and NLP systems that recognize monastery art symbols and provide contextual cultural explanations.",
      technologies: ["TensorFlow.js", "OpenCV", "Natural Language Processing", "Machine Learning"],
      icon: "Brain",
      metrics: "87% accuracy in symbol recognition"
    },
    {
      id: 3,
      title: "Real-time Rendering",
      description: "Optimized 3D rendering pipeline that delivers smooth 60fps performance across devices while maintaining visual quality.",
      technologies: ["WebGL", "GPU Optimization", "Level-of-Detail", "Texture Compression"],
      icon: "Zap",
      metrics: "60fps on mid-range devices"
    },
    {
      id: 4,
      title: "Scalable Architecture",
      description: "Cloud-native infrastructure designed to handle millions of concurrent users with automatic scaling and global content delivery.",
      technologies: ["React", "Node.js", "MongoDB", "AWS CloudFront"],
      icon: "Server",
      metrics: "99.9% uptime guarantee"
    }
  ];

  const developmentInsights = [
    {
      id: 1,
      challenge: "VR Performance Optimization",
      solution: "Implemented progressive loading and LOD systems to maintain smooth VR experiences across different device capabilities.",
      impact: "Reduced loading times by 60% while maintaining visual fidelity"
    },
    {
      id: 2,
      challenge: "Cultural Accuracy Validation",
      solution: "Collaborated with monastery scholars and cultural experts to ensure AI interpretations maintain authenticity and respect.",
      impact: "Achieved 95% cultural accuracy rating from heritage experts"
    },
    {
      id: 3,
      challenge: "Cross-platform Compatibility",
      solution: "Developed responsive design system that adapts VR experiences for desktop, mobile, and VR headset interactions.",
      impact: "Supports 15+ device types with consistent user experience"
    },
    {
      id: 4,
      challenge: "Bandwidth Optimization",
      solution: "Created adaptive streaming system that adjusts quality based on user\'s connection speed and device capabilities.",
      impact: "Enabled access for users with 2G connections in remote areas"
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["React 18", "Tailwind CSS", "Framer Motion", "Three.js"],images:[""] },
    { category: "VR/AR", technologies: ["React 360", "A-Frame", "WebXR", "WebGL"] },
    { category: "AI/ML", technologies: ["TensorFlow.js", "OpenCV", "Computer Vision", "NLP"] },
    { category: "Backend", technologies: ["Node.js", "Express", "MongoDB", "Redis"] },
    { category: "Cloud", technologies: ["AWS", "CloudFront", "S3", "Lambda"] },
    { category: "DevOps", technologies: ["Docker", "Kubernetes", "CI/CD", "Monitoring"] }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Code" size={20} className="text-accent" />
            <span className="font-body font-medium text-accent">Technical Excellence</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Technical Achievements & Innovation
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
            Pushing the boundaries of web technology to create immersive cultural experiences that run seamlessly across all devices and platforms.
          </p>
        </div>

        {/* Technical Achievements */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Key Technical Innovations
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalAchievements?.map((achievement) => (
              <div key={achievement?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={achievement?.icon} size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                      {achievement?.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                      {achievement?.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {achievement?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full font-caption text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-success/10 rounded-lg px-3 py-2">
                  <p className="font-caption text-xs text-success font-medium">
                    Achievement: {achievement?.metrics}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Insights */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Development Challenges & Solutions
          </h3>
          <div className="space-y-6">
            {developmentInsights?.map((insight) => (
              <div key={insight?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2 flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={18} className="text-warning" />
                      <span>Challenge</span>
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {insight?.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2 flex items-center space-x-2">
                      <Icon name="Lightbulb" size={18} className="text-accent" />
                      <span>Solution</span>
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {insight?.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2 flex items-center space-x-2">
                      <Icon name="TrendingUp" size={18} className="text-success" />
                      <span>Impact</span>
                    </h4>
                    <p className="font-body text-sm text-success font-medium leading-relaxed">
                      {insight?.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack?.map((stack, index) => (
              <div key={index} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <h4 className="font-heading text-lg font-semibold text-card-foreground mb-4 text-center">
                  {stack?.category}
                </h4>
                <div className="space-y-2">
                  {stack?.technologies?.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-body text-sm text-card-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gauge" size={32} className="text-success" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-foreground mb-2">60fps</h4>
                <p className="font-body text-sm text-muted-foreground">VR Rendering Speed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-foreground mb-2">&lt;3s</h4>
                <p className="font-body text-sm text-muted-foreground">Initial Load Time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-accent" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-foreground mb-2">1M+</h4>
                <p className="font-body text-sm text-muted-foreground">Concurrent Users</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-secondary" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-foreground mb-2">99.9%</h4>
                <p className="font-body text-sm text-muted-foreground">Uptime Reliability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;