const AWARDEES = [
  { name: "Ranjith Kr. Peddi", title: "Best Research Supervisor Award" },
  { name: "Tarun Vakkalagadda", title: "AI Data Analytics Excellence Award" },
  { name: "Akhil Kumar Kandakatla", title: "AI Data Analytics Excellence Award" },
  { name: "FNU Sanchit Suman", title: "AI Data Analytics Excellence Award" },
  { name: "Ashwin Krishnappa Kumar", title: "AI Data Analytics Excellence Award" },
  { name: "Siddhartha Erelli", title: "AI Data Analytics Excellence Award" },
  { name: "Akash Kamble", title: "AI Data Analytics Excellence Award" },
  { name: "Santosh Reddy Muthyala", title: "AI Data Analytics Excellence Award" },
  { name: "Kishore Chandra Rajapudi", title: "AI Innovator of the Year Award" },
  { name: "Arun Mallur Chandrashekar", title: "AI Innovator of the Year Award" },
  { name: "Sumanth Muthineni", title: "AI Innovator of the Year Award" },
  { name: "Radhika Aitha", title: "AI Innovator of the Year Award" },
  { name: "Dillibabu Arumugam", title: "AI Innovator of the Year Award" },
  { name: "Santhosh Vangapelli", title: "AI Innovator of the Year Award" },
  { name: "Satya Sagar Reddi", title: "Best Cloud Architecture Innovation Award" },
  { name: "Balakrishna Sreeram", title: "Best Cloud Architecture Innovation Award" },
  { name: "Ankita Banerjee", title: "Best Cloud Architecture Innovation Award" },
  { name: "Rajesh Aavuty", title: "Best Cloud Architecture Innovation Award" },
  { name: "Devinder Tokas", title: "Best Cloud Architecture Innovation Award" },
  { name: "Manikandan Kaliyaperumal", title: "Best Cloud Architecture Innovation Award" },
  { name: "Sonu Kumar", title: "Best DevOps Transformation Award" },
  { name: "Raghu Loganathan", title: "Best Researcher Award" },
  { name: "Saikrishna Reddy Ala", title: "Big Data Engineering Achievement Award" },
  { name: "Ratanchur Sarkar", title: "Big Data Engineering Achievement Award" },
  { name: "Phani Bhanu Kalaga", title: "Business Process Optimization with SAP Award" },
  { name: "Sirisha Ayyagari", title: "Business Process Optimization with SAP Award" },
  { name: "Anil Kumar Chitiprolu", title: "Cloud Migration & Modernization Champion Award" },
  { name: "Rahul Reddy Enukonda", title: "Cloud Migration & Modernization Champion Award" },
  { name: "Sonali Sheetal Appikonda", title: "Cloud Migration & Modernization Champion Award" },
  { name: "Srihari Tubati", title: "Cloud Migration & Modernization Champion Award" },
  { name: "Balasubramanian Bava Jagannathan", title: "Cloud Migration & Modernization Champion Award" },
  { name: "Ankit Joshi", title: "Data Governance Excellence Award" },
  { name: "Mary Sirisha Duggimpudi", title: "Data Governance Excellence Award" },
  { name: "Surajit Paul", title: "Data Security & Privacy Leadership Award" },
  { name: "Akbor Aziz Susom", title: "Data Security & Privacy Leadership Award" },
  { name: "Itendra Kumar Singh", title: "Database Optimization Excellence Award" },
  { name: "Pradeep Narayanan", title: "EdTech Innovation Award" },
  { name: "Sandeep Dirishala", title: "Emerging Technology Solution Award" },
  { name: "Onkar Khadke", title: "Emerging Technology Solution Award" },
  { name: "Sujay Vijaybhai Patel", title: "Excellence in Applied AI Leadership Award" },
  { name: "Venkata Akhilesh Ranga Reddy", title: "Excellence in Applied AI Leadership Award" },
  { name: "Shyam Laheri Chunduri", title: "Excellence in Applied AI Leadership Award" },
  { name: "Gopinath Rajamanickam", title: "Excellence in Applied AI Leadership Award" },
  { name: "Madhu Babu Chenna", title: "Excellence in Applied AI Leadership Award" },
  { name: "Anwesha Sharma", title: "Excellence in Applied AI Leadership Award" },
  { name: "Sonali Galhotra", title: "Excellence in Applied AI Leadership Award" },
  { name: "Sasikanth Vadlamudi", title: "Excellence in Applied AI Leadership Award" },
  { name: "Santosh Swarna Sathya Chamarthy", title: "Excellence in Cloud Security Award" },
  { name: "Akshaya Jayaram", title: "Excellence in Cloud Security Award" },
  { name: "Venkata Ravi Sridhar Potunuru", title: "Excellence in Cloud Security Award" },
  { name: "Avinash Bomma", title: "Excellence in Cloud Security Award" },
  { name: "Swapna Putti", title: "Global AI Architecture Excellence Award" },
  { name: "Ananda Kumar Dey", title: "Global AI Architecture Excellence Award" },
  { name: "Ravindra Patil", title: "Global AI Architecture Excellence Award" },
  { name: "Toshi Goel", title: "Global AI Architecture Excellence Award" },
  { name: "Sreedhar Sandeep Ayloo Govindaswamy", title: "Global AI Architecture Excellence Award" },
  { name: "Animesh Kumar", title: "Global AI Architecture Excellence Award" },
  { name: "Sujan Kumar Botla", title: "Global AI Architecture Excellence Award" },
  { name: "Dhanunjay Divi", title: "Global AI Architecture Excellence Award" },
  { name: "Prashant Laljibhai Mavani", title: "Industrial Automation Excellence Award" },
  { name: "Umang Jayeshbhai Joshi", title: "Innovator of the Year (Academic/Corporate)" },
  { name: "Ankur Mehra", title: "Innovator of the Year (Academic/Corporate)" },
  { name: "Priyank Niravkumar Vekaria", title: "Innovator of the Year (Academic/Corporate)" },
  { name: "Dr Siva Shankar Subramanian", title: "International Research Collaboration Award" },
  { name: "Chinmoy Kumar Mondal", title: "Language Model Development for Disabled People Social Innovation Impact Award" },
  { name: "Pujitha Sri Lakshmi Paladugu", title: "Leadership in Networking, Infrastructure & Security Award" },
  { name: "Ajay Venkata Nyayapathi", title: "Leadership in Networking, Infrastructure & Security Award" },
  { name: "Shubham Sharma", title: "Leadership in Networking, Infrastructure & Security Award" },
  { name: "Uday Kumar Soma", title: "Leadership in Networking, Infrastructure & Security Award" },
  { name: "Ancilia Anthony Dmello", title: "ML Architecture Excellence Award" },
  { name: "Mallesh Deshapaga", title: "Multidisciplinary Impact Award" },
  { name: "Devavrat Rajendra Khanolkar", title: "Outstanding Machine Learning Implementation Award" },
  { name: "Siddharth Narayanan", title: "Outstanding Machine Learning Implementation Award" },
  { name: "Nayan Kumar Sureshbhai Patel", title: "Outstanding Machine Learning Implementation Award" },
  { name: "Sandhya Haridas", title: "Responsible AI & Ethics Excellence Award" },
  { name: "Rakesh Nandan Anantharam", title: "Responsible AI & Ethics Excellence Award" },
  { name: "Manohara Reddy Bathina", title: "SAP ERP Implementation Excellence Award" },
  { name: "Sumaiyya Fatima", title: "Serial Innovator Award" },
  { name: "Senthil Kumar Muthu", title: "Serial Innovator Award" },
  { name: "Amish Desai", title: "Smart Manufacturing Innovation Award" },
  { name: "Madhav Jayeshkumar Pandya", title: "Smart Manufacturing Innovation Award" },
  { name: "Jyothish Sreedharan", title: "Software Architecture Excellence Award" },
  { name: "Mohit Upadhyay", title: "Software Architecture Excellence Award" },
  { name: "Bhanuprakash Naidu Basani", title: "Software Architecture Excellence Award" },
  { name: "Ravindra Motiram Gurnani", title: "Software Architecture Excellence Award" },
  { name: "Rahul Kizhakkepachilamakol", title: "Software Architecture Excellence Award" },
  { name: "Pushpendra Singh", title: "Software Architecture Excellence Award" },
  { name: "Rajesh Unnikrishna Menon", title: "Software Architecture Excellence Award" },
  { name: "Tarangkumar Mathurbhai Malani", title: "Software Architecture Excellence Award" },
  { name: "Hima Bindu Yanala", title: "Software Architecture Excellence Award" },
  { name: "Mohammed Saad Tambe", title: "Software Architecture Excellence Award" },
  { name: "Yukti Lnu", title: "Women in Innovation (Womanovator Award)" },
];

export default function Awards2026() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-10 text-center text-white shadow-lg sm:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">FUSION Awards 2026</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Heartiest Congratulations to All Awardees!</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-blue-100">
            We extend our heartfelt congratulations to all the distinguished FUSION Awards 2026 awardees for their outstanding achievements and recognition.
          </p>
          <p className="mt-6 text-lg font-semibold text-amber-200">Synergy, Innovation, and Impact – Beyond Boundaries.</p>
          <div className="mt-6 flex flex-col justify-center gap-2 text-sm text-blue-100 sm:flex-row sm:gap-6">
            <span>České Budějovice, Near Prague, Czech Republic</span>
            <span>25th–26th September 2026</span>
          </div>
        </section>

        <section className="mb-10 rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="mx-auto max-w-4xl leading-7 text-gray-700">
            The FUSION Awards 2026 received over 500 nominations from accomplished professionals, researchers, academicians, innovators, and contributors across diverse fields. With an overall selection rate of approximately 18%, the awards recognize exceptional innovation, excellence, collaboration, and impact. From each category, approximately 70–80 nominees were considered through the evaluation process before distinguished awardees were selected.
          </p>
          <p className="mt-4 font-semibold text-slate-800">Your achievement reflects dedication, excellence, and meaningful contribution to your field.</p>
        </section>

        <section aria-labelledby="awardees-heading">
          <div className="mb-6 text-center">
            <h2 id="awardees-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">FUSION Awards 2026 Awardees</h2>
            <p className="mt-2 text-gray-600">Celebrating {AWARDEES.length} distinguished honorees</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDEES.map((awardee) => (
              <article key={`${awardee.name}-${awardee.title}`} className="flex min-h-32 flex-col justify-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900">{awardee.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{awardee.title}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
