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
    "title": "Artificial Intelligence & Machine Learning (Individual Category)",
    "emoji": "🤖",
    "awards": [
      { "name": "AI Innovator of the Year", "description": "Honoring breakthroughs in AI-driven solutions or applications." },
      { "name": "Outstanding Machine Learning Implementation Award", "description": "For exceptional application of ML models solving real-world challenges." },
      { "name": "Responsible AI & Ethics Excellence Award", "description": "Recognizing leadership in building transparent, ethical, and unbiased AI systems." },
      { "name": "Leadership in Networking, Infrastructure & Security", "description": "Celebrates innovations in network architecture, cybersecurity, IoT connectivity, and high-performance infrastructure. Includes SDN, NFV, Zero Trust models, secure IoT networking, 5G deployments, network automation, and enterprise-grade security solutions." }
    ]
  },
  {
    "title": "Cloud Technologies (Individual Category)",
    "emoji": "☁️",
    "awards": [
      { "name": "Best Cloud Architecture Innovation Award", "description": "For groundbreaking design and optimization of cloud-native architectures." },
      { "name": "Excellence in Cloud Security Award", "description": "Recognizing cutting-edge contributions to securing cloud platforms and data." },
      { "name": "Cloud Migration & Modernization Champion", "description": "For exceptional work in transitioning legacy systems to modern cloud environments." }
    ]
  },
  {
    "title": "Databases & Data Engineering (Individual Category)",
    "emoji": "🗄️",
    "awards": [
      { "name": "Database Optimization Excellence Award", "description": "For innovative solutions improving database performance, scalability, and reliability." },
      { "name": "Big Data Engineering Achievement Award", "description": "Honoring advancements in managing and processing massive datasets efficiently." },
      { "name": "Data Security & Privacy Leadership Award", "description": "For excellence in ensuring compliance, encryption, and data protection." }
    ]
  },
  {
    "title": "Manufacturing & Industry 4.0 (Individual Category)",
    "emoji": "🏭",
    "awards": [
      { "name": "Smart Manufacturing Innovation Award", "description": "For applying digital twins, IoT, and AI in revolutionizing manufacturing processes." },
      { "name": "Industrial Automation Excellence Award", "description": "Recognizing cutting-edge software solutions enabling autonomous production systems." }
    ]
  },
  {
    "title": "Software Development & Solutions (Individual Category)",
    "emoji": "💻",
    "awards": [
      { "name": "Best DevOps Transformation Award", "description": "For outstanding implementation of DevOps practices enhancing CI/CD pipelines." },
      { "name": "Software Architecture Excellence Award", "description": "Honoring superior design and scalability in software system architectures." },
      { "name": "Outstanding SaaS Product Award", "description": "Recognizing high-impact SaaS solutions delivering measurable business value." },
      { "name": "Emerging Technology Solution Award", "description": "For innovative software leveraging technologies like blockchain, edge computing, or quantum integration." }
    ]
  },
  {
    "title": "SAP Cloud & Digital Transformation (Individual Category)",
    "emoji": "🌐",
    "awards": [
      { "name": "SAP Cloud Innovation Award", "description": "Recognizing groundbreaking implementations of SAP S/4HANA Cloud or RISE with SAP to drive enterprise transformation." },
      { "name": "Excellence in SAP Cloud Migration", "description": "For outstanding strategies and execution in migrating legacy ERP systems to SAP S/4HANA or SAP Business Technology Platform (BTP)." },
      { "name": "SAP Business Technology Platform (BTP) Excellence Award", "description": "Honoring the best use of BTP services like integration, extension, and analytics to deliver innovative business solutions." },
      { "name": "SAP ERP Implementation Excellence Award", "description": "Recognizing outstanding on-premise SAP ERP implementations that significantly improve business efficiency." },
      { "name": "Business Process Optimization with SAP Award", "description": "For leveraging SAP ECC or other on-premise SAP modules to streamline workflows and deliver measurable results." }
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
          📍 České Budějovice, Near Prague, Czech Republic | 7th–8th November 2025
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

      {/* Selection Process */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-md rounded-2xl p-6 mb-16 text-gray-800 space-y-6">
        <h3 className="text-2xl font-bold mb-2">🔍 Selection Process Overview</h3>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Call for Nominations</strong>
            <ul className="list-disc list-inside mt-1 text-gray-700 text-sm space-y-1">
              <li>Open to individuals, teams, higher education institutions, research labs, incubators, and innovation hubs.</li>
              <li>Nominations may be submitted by self, peer professionals, institutional leadership, or Fusion Advisory Panel members.</li>
            </ul>
          </li>
          <li>
            <strong>Initial Screening (5–7 Days)</strong>
            <p className="text-sm">Applications are assessed for eligibility, completeness, and alignment with award themes. Incomplete or irrelevant nominations will not proceed.</p>
          </li>
          <li>
            <strong>Domain Expert Evaluation (15–20 Days)</strong>
            <p className="text-sm">A multi-disciplinary panel uses a 100-point rubric:</p>
            <table className="w-full text-sm border mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1 text-left">Criterion</th>
                  <th className="border px-2 py-1">Weight</th>
                  <th className="border px-2 py-1 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">Innovation Quotient</td>
                  <td className="border px-2 py-1">25 pts</td>
                  <td className="border px-2 py-1">Originality, novelty, cross-domain knowledge</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Impact & Outcomes</td>
                  <td className="border px-2 py-1">25 pts</td>
                  <td className="border px-2 py-1">Tangible societal, economic, technological results</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Scalability & Sustainability</td>
                  <td className="border px-2 py-1">15 pts</td>
                  <td className="border px-2 py-1">Viability, replicability, responsibility</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Collaboration & Leadership</td>
                  <td className="border px-2 py-1">15 pts</td>
                  <td className="border px-2 py-1">Cross-sector teamwork and leadership</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Diversity & Inclusion</td>
                  <td className="border px-2 py-1">10 pts</td>
                  <td className="border px-2 py-1">Inclusive practices in tech/science</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Ethical & Responsible Innovation</td>
                  <td className="border px-2 py-1">10 pts</td>
                  <td className="border px-2 py-1">Alignment with global frameworks</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <strong>Final Review & Ratification</strong>
            <p className="text-sm">Top 5–7% entries undergo aggregated score review and endorsement by ICDPN Committee Members.</p>
          </li>
        </ol>
        <p className="text-sm">
          🔗 <a href="https://www.icdpn-conf.com/steering-committee" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Committee Members & Ethics Policy</a>
        </p>
      </div>

      {/* Dates and Submission */}
      <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 shadow-inner rounded-2xl p-6 mb-16 text-gray-800 space-y-3">
        <h3 className="text-xl font-bold">🗓 Important Dates</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Nomination Deadline: <strong>20th September 2025</strong></li>
          <li>Announcement of Winners: <strong>30th September 2025</strong></li>
        </ul>
        <p className="text-sm">
          Selection Ratio: <strong>Top 5–7%</strong> of entries will be awarded, reflecting global standards.
        </p>
        <div className="space-y-2">
          <a
            href="https://forms.gle/T4JrS18P7ZZhgpAq9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Nomination (Google Form)
          </a>
        </div>
        <h3 className="text-xl font-bold">Submission Forms</h3>
         <a
            href="Award Form- Individual Award.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 m-4 rounded hover:bg-blue-700 transition"
          >
          Individual Award Form
          </a>
           <a
            href="Award Form- Higher Education Award.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 m-4 rounded hover:bg-blue-700 transition"
          >
           Higher Education Award Form
          </a>
      </div>

      {/* Award Categories */}
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

