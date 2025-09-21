import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const MinistryCollaboration = () => {
  const collaborations = [
    {
      id: 1,
      organization: "Department of Tourism & Civil Aviation",
      department: "Government of Sikkim",
      logo: "https://sikkimtourism.gov.in/Content/Pics/sikkimtourism-logo.png",
      description:
        "Primary partner supporting digital tourism initiatives, virtual monastery tours, and cultural promotion across Sikkim.",
      contact: "tourism.partnership@sikkim.gov.in",
      projects: [
        "Virtual Tourism Infrastructure",
        "360° Monastery Tours",
        "Digital Heritage Promotion",
      ],
      status: "Active Partnership",
      established: "2024",
      impact: "12+ monasteries digitized",
    },
    {
      id: 2,
      organization: "Department of Culture",
      department: "Government of Sikkim",
      logo: "https://culture.sikkim.gov.in/assets/img/new.png",
      description:
        "Collaboration for digitization of monastery art, cultural storytelling, and preservation of local heritage traditions.",
      contact: "culture.partnership@sikkim.gov.in",
      projects: [
        "Cultural Storytelling Digitization",
        "Traditional Arts Preservation",
        "Community Heritage Programs",
      ],
      status: "Active Partnership",
      established: "2024",
      impact: "500+ artifacts documented",
    },
    {
      id: 3,
      organization: "Archaeological Survey of India (ASI)",
      department: "Ministry of Culture, Government of India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Logo_of_the_Archaeological_Survey_of_India.svg/375px-Logo_of_the_Archaeological_Survey_of_India.svg.png",
      description:
        "Technical support for archaeological site documentation, 3D mapping, and digital conservation of monastery complexes in Sikkim.",
      contact: "asi.collaboration@monastery360.org",
      projects: [
        "3D Heritage Mapping",
        "Archaeological Site Documentation",
        "Digital Conservation Support",
      ],
      status: "Proposed",
      established: "2025",
      impact: "Pending approval",
    },
  ];

  const achievements = [
    {
      id: 1,
      icon: "Award",
      title: "Heritage Excellence Award",
      description:
        "Recognized by Ministry of Culture for digital preservation innovation",
      year: "2024",
    },
    {
      id: 2,
      icon: "Users",
      title: "15+ Monastery Partnerships",
      description: "Active collaborations across Himalayan regions",
      year: "2024",
    },
    {
      id: 3,
      icon: "Globe",
      title: "100K+ Virtual Visitors",
      description: "Global audience reached through digital platform",
      year: "2024",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Ministry Partnerships */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Government Partnerships
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Official collaborations with Indian government ministries for
            heritage preservation and cultural tourism development.
          </p>
        </div>

        <div className="space-y-8">
          {collaborations?.map((collab) => (
            <div
              key={collab?.id}
              className="group border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 p-2">
                  <Image
                    src={collab?.logo}
                    alt={`${collab?.organization} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-1">
                        {collab?.organization}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {collab?.department}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          collab?.status === "Active Partnership"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {collab?.status}
                      </span>
                      <span className="text-sm text-gray-500">
                        Est. {collab?.established}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {collab?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${collab?.contact}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 flex items-center"
                    >
                      <Icon name="Mail" size={16} className="mr-2" />
                      {collab?.contact}
                    </a>
                    <div className="text-sm text-gray-600 font-medium">
                      <Icon
                        name="TrendingUp"
                        size={16}
                        className="inline mr-1"
                      />
                      {collab?.impact}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Active Projects:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {collab?.projects?.map((project, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg text-center border border-blue-100"
                    >
                      <span className="text-blue-700 font-medium text-sm">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements & Recognition */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Recognition & Achievements
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Our commitment to heritage preservation has been recognized by
            leading cultural institutions and government bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements?.map((achievement) => (
            <div
              key={achievement?.id}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={achievement?.icon} size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                {achievement?.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {achievement?.description}
              </p>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                {achievement?.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Contact */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-1">
            <Icon name="Building2" size={24} className="text-primary" />
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Institutional Partnerships
          </h2>
          <p className="text-muted-foreground mb-6 text-lg max-w-3xl mx-auto">
            Interested in partnering with Monastery360 for heritage
            preservation, cultural tourism, or educational initiatives? We
            welcome collaborations with government bodies, cultural
            institutions, and heritage organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@monastery360.org"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Partnership Inquiries
            </a>
            <a
              href="mailto:government@monastery360.org"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
            >
              <Icon name="Building" size={18} className="mr-2" />
              Government Relations
            </a>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Partnership Benefits
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            What our government and institutional partners gain from
            collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Digital Innovation</h3>
            <p className="text-gray-600 text-sm">
              Cutting-edge technology for heritage preservation
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm">
              Access to worldwide audience and tourism market
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">
              Heritage Protection
            </h3>
            <p className="text-gray-600 text-sm">
              Long-term preservation of cultural assets
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Economic Impact</h3>
            <p className="text-gray-600 text-sm">
              Boost tourism revenue and local economy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryCollaboration;
