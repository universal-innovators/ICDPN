const awardCategories = [
  {
    title: "Academic Excellence & Leadership",
    emoji: "🎓",
    awards: [
      { name: "Lifetime Achievement in Higher Education", description: "Honoring a distinguished career dedicated to advancing higher education." },
      { name: "Professor of the Year", description: "Recognizing exemplary teaching, mentorship, and scholarly excellence." },
      { name: "Best Department Head (HOD)", description: "Awarded for exceptional departmental leadership and academic impact." },
      { name: "Dean of Excellence", description: "Acknowledging visionary leadership and institutional advancement." },
      { name: "Best Academic Mentor (UG/PG/PhD)", description: "For outstanding guidance and support to students across academic levels." },
      { name: "Excellence in Teaching Pedagogy", description: "Celebrating innovative and impactful teaching practices." },
      { name: "Faculty of the Year", description: "Awarded to a faculty member who has excelled across teaching, research, and service." },
      { name: "Principal/Director of the Year", description: "Recognizing leadership that fosters academic and administrative excellence." },
      { name: "Academic Administrator of the Year", description: "For strategic excellence in managing academic operations and initiatives." },
      { name: "Emerging Educator Award", description: "For young educators who show exceptional promise and innovation in teaching." },
      { name: "Excellence in Curriculum Design", description: "Awarded for developing cutting-edge, student-centric academic curricula." },
      { name: "Academic Influencer of the Year", description: "Recognizing educators making a significant impact through thought leadership." },
      { name: "Innovation in Student Engagement", description: "For creative approaches to involving and inspiring students in learning." },
      { name: "Diversity & Inclusion Champion (Academia)", description: "Acknowledging efforts to foster equity, diversity, and inclusion in academics." }
    ]
  },
  {
    title: "Research, Innovation & Impact",
    emoji: "🧪",
    awards: [
      { name: "Best Researcher Award (Academic/Industry)", description: "Recognizing groundbreaking contributions to research and innovation." },
      { name: "Young Researcher of the Year (Under 35)", description: "Honoring early-career researchers with exceptional promise and output." },
      { name: "Best Ph.D. Thesis", description: "Awarded for an original and impactful doctoral research contribution." },
      { name: "Best Postgraduate Thesis", description: "Recognizing excellence in postgraduate research and academic writing." },
      { name: "Innovative Research Project (UG/PG/PhD)", description: "For creative, solution-driven research with real-world application." },
      { name: "Highly Cited Paper Recognition", description: "Acknowledging significant scholarly influence through citation impact." },
      { name: "International Research Collaboration Award", description: "Celebrating global partnerships advancing scientific knowledge." },
      { name: "Transdisciplinary Research Award", description: "Awarded for research that integrates and transcends disciplinary boundaries." },
      { name: "Multidisciplinary Impact Award", description: "For collaborative work with broad societal and academic relevance." },
      { name: "Women in Research Excellence Award", description: "Recognizing outstanding contributions by female researchers." },
      { name: "Early Career Researcher Award", description: "For impactful research within the first 5 years of a researcher's career." },
      { name: "Best Research Supervisor Award", description: "Honoring faculty who have guided exceptional research work." },
      { name: "Patented Innovation Recognition", description: "Awarded to individuals with impactful patents registered." },
      { name: "Community-Centric Research Award", description: "For research directly benefiting marginalized or rural communities." }
    ]
  },
  {
    title: "Innovation & Entrepreneurship",
    emoji: "🚀",
    awards: [
      { name: "Start-Up of the Year", description: "Recognizing a high-impact start-up driven by innovation and growth." },
      { name: "Innovator of the Year (Academic/Corporate)", description: "Awarded for pioneering ideas that address critical challenges." },
      { name: "Social Innovation Impact Award", description: "For innovations that create significant societal transformation." },
      { name: "Best University/Industry Innovation Cell", description: "Honoring institutional hubs fostering entrepreneurial ecosystems." },
      { name: "Young Technopreneur Award", description: "For emerging leaders driving technology-led ventures." },
      { name: "Women in Innovation (Womanovator Award)", description: "Recognizing women innovators making exceptional contributions." },
      { name: "Entrepreneurial Educator of the Year", description: "Celebrating educators who inspire and support entrepreneurship." },
      { name: "Campus Start-Up Award", description: "For the best student-led entrepreneurial venture from an institution." },
      { name: "EdTech Innovation Award", description: "Recognizing technological innovations enhancing education delivery." },
      { name: "Inclusive Entrepreneur Award", description: "For ventures promoting inclusion and accessibility." },
      { name: "Green Innovation Award", description: "For startups addressing environmental and sustainability issues." },
      { name: "Serial Innovator Award", description: "Recognizing individuals behind multiple successful innovations or ventures." }
    ]
  },
  {
    title: "Academia-Industry Synergy Awards",
    emoji: "🤝",
    awards: [
      { name: "Best Industry-Academia Collaboration", description: "Recognizing impactful partnerships bridging education and enterprise." },
      { name: "Corporate-Academic Research Partnership", description: "Awarded for collaborative R&D producing measurable innovation." },
      { name: "Technology Transfer Excellence Award", description: "For successful commercialization of academic innovations." },
      { name: "Co-Innovation Award (Joint Patents/Products)", description: "Honoring collaborative innovation with tangible outcomes." },
      { name: "Skill Development & Employability Award", description: "For initiatives enhancing student readiness and industry relevance." },
      { name: "Work-Integrated Learning Excellence", description: "Recognizing programs that integrate academic learning with practical experience." },
      { name: "Academic Consultant of the Year", description: "For faculty bridging industry knowledge and academic instruction." },
      { name: "Innovation Partnership Excellence", description: "Honoring long-term, high-impact academia-industry alliances." },
      { name: "Best Industry Mentor in Academia", description: "For corporate professionals contributing significantly to student mentorship." },
      { name: "Corporate Fellowship Initiative Award", description: "Recognizing collaborative programs placing students in live industry projects." },
      { name: "Academic Advisory Board Impact Award", description: "For valuable academic contributions to corporate advisory boards." }
    ]
  },
  {
    title: "Institutional Distinction Awards",
    emoji: "🏫",
    awards: [
      { name: "Best Engineering Institution (National/Regional)", description: "Celebrating outstanding performance in engineering education." },
      { name: "Top Medical/Pharma Institution", description: "Recognizing excellence in medical and pharmaceutical sciences." },
      { name: "Best Management/Business School", description: "Awarded to a leading institution shaping future business leaders." },
      { name: "University of the Year (North/South/East/West)", description: "For exemplary achievements across education, research, and innovation." },
      { name: "Most Promising Private University", description: "Recognizing rapid growth and emerging excellence in private education." },
      { name: "Outstanding Digital/ICT Initiative", description: "For transformative use of technology in academic delivery and management." },
      { name: "Excellence in Distance & Online Learning", description: "Awarding institutions leading in accessible, high-quality virtual education." },
      { name: "Best Placement-Driven Institute", description: "Recognizing exceptional student placement and career support outcomes." },
      { name: "Social Impact by Institution", description: "For initiatives making a tangible difference in communities and society." },
      { name: "Innovation-Driven Campus of the Year", description: "For institutional culture supporting innovation, startups, and R&D." },
      { name: "Green Campus Initiative Award", description: "Honoring environmental consciousness and sustainable campus development." },
      { name: "Centre of Excellence in AI/Data Science/Climate Studies", description: "For departments showing excellence in emerging or specialized fields." },
      { name: "Alumni Engagement Excellence Award", description: "Awarding institutions with outstanding alumni network programs." }
    ]
  },
  {
    title: "Special Recognition Awards",
    emoji: "📰",
    awards: [
      { name: "Research Project of the Year", description: "Awarded to a project demonstrating innovation, relevance, and scalability." },
      { name: "International Educator of the Year", description: "Recognizing global educational leadership and cross-border impact." },
      { name: "Best Higher Education Publisher", description: "Honoring contributions to academic publishing and knowledge dissemination." },
      { name: "Global Collaboration Impact Award", description: "For transformative results through international academic partnerships." },
      { name: "Student Mentorship Champion", description: "Celebrating exceptional commitment to student success and guidance." },
      { name: "Sustainable Development Initiative Award", description: "For educational efforts advancing the UN Sustainable Development Goals." },
      { name: "Excellence in Certification & Vocational Training", description: "Recognizing best practices in upskilling and professional development." },
      { name: "Outstanding Contribution to Education Policy", description: "For individuals shaping national or institutional academic frameworks." },
      { name: "Education Technology Pioneer Award", description: "Recognizing those revolutionizing learning via tech platforms." },
      { name: "Cultural Leadership in Academia Award", description: "For promoting arts, heritage, and cultural learning in education." },
      { name: "Global Peace & Education Advocacy Award", description: "For efforts in promoting education as a tool for peacebuilding." },
      { name: "Mentor Institution Award", description: "Recognizing institutions mentoring new or smaller colleges/universities." }
    ]
  }
];

const Awards = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-800">
          FUSION Awards 2025
        </h2>
        <p className="text-xl md:text-2xl italic text-gray-600">
          "Synergy, Innovation, and Impact – Beyond Boundaries."
        </p>
        <p className="text-sm mt-3 text-gray-500">
          📍 České Budějovice, Near Prague, Czech Republic | 7th-8th November 2025
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16 text-gray-700 space-y-4">
        <p>
          FUSION Awards 2025 celebrates trailblazers, thinkers, researchers, and change-makers who exemplify excellence in academia, industry, and innovation. This prestigious international platform recognizes collaborative brilliance, where ideas meet execution, research drives real-world impact, and cross-sector synergy accelerates global progress.
        </p>
        <p>
          Whether you're a faculty member transforming education, a researcher solving tomorrow’s challenges, a startup disrupting the norm, or an institution reshaping global collaboration—FUSION Awards is your stage.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl">{category.emoji}</span>
              <h3 className="ml-3 text-xl font-bold text-gray-800">{category.title}</h3>
            </div>
            <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {category.awards.map((award, i) => (
                <li key={i}>
                  <p className="font-medium text-gray-800">{award.name}</p>
                  <p className="text-sm text-gray-600">{award.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;

