import React, { useMemo, useState } from "react";


const AWARDS = [
  { name: "RIPPANDEEP KAUR", title: "Sustainable Development Initiative Category" },
  { name: "NIHARI PALADUGU", title: "Innovator of the Year (Academic/Corporate)" },
  { name: "SAMEEKSHA GUPTA", title: "Women in Research Excellence Award" },
  { name: "RANJEETA SAINI", title: "Best Researcher Award (Academic/Industry)" },
  { name: "SATHISH KRISHNA ANUMULA", title: "Innovation and Impact – Emerging Innovator of the Year Award" },
  { name: "RANJITH KUMAR RAMAKRISHNAN", title: "Best Cloud Architecture Innovation Award" },
  { name: "JAGADEESH VASANTHADA", title: "Global Visionary Leadership in AI-Driven SAP Transformation Award" },
  { name: "PARUL YADAV", title: "International Educator of the Year-Special Recognition Award" },
  { name: "AAKASH MOR", title: "Young Researcher of the Year (Under 35)" },
  { name: "SHAIK MAHABOOB BASHA", title: "Academic Excellence and Leadership" },
  { name: "SUKUMAR REDDY BEEREDDY", title: "Best Researcher Award (Academic/Industry) in Finance & Technology" },
  { name: "SHALINI SIVASAMY", title: "Titan Women Innovator Award" },
  { name: "MRUNAL GANGRADE", title: "Women in Innovation (Womanovator Award)" },
  { name: "ALPNA BANSAL", title: "Research, Innovation & Impact Award" },
  { name: "SANJAY NAKHARU PRASAD KUMAR", title: "Responsible AI & Ethics Excellence Award" },
  { name: "SHESHANG DEGADWALA", title: "Best Researcher Award (Academics)" },
  { name: "RAHUL VADISETTY", title: "Young Researcher of the Year (Under 35)" },
  { name: "SHALINI POLAMARASETTI", title: "AI Innovator of the Year Award" },
  { name: "ANAND POLAMARASETTI", title: "Artificial Intelligence & Machine Learning (Responsible AI & Ethics Excellence Award)" },
  { name: "ADITHYA PADTHE", title: "Best Ph.D. Thesis Award" },
  { name: "RAVINDRA PUTCHAKAYALA", title: "AI Data Analytics Excellence Award" },
  { name: "ROHIT YALLAVULA", title: "Data Governance Excellence Award" },
  { name: "SIVA KARTHIK PARIMI", title: "ML Architecture Excellence Award" },
  { name: "RAJESH CHERUKURI", title: "Global AI Architecture Excellence Award" },
  { name: "VENKAT KISHORE YARRAM", title: "Excellence in Applied AI Leadership Award" },
  { name: "SUNITA SHARMA", title: "Best Researcher Award (Academic/Industry)" },
  { name: "Ramakrishnareddy Muthyam", title: "Responsible AI & Ethics Excellence Award" },
  { name: "Shreelekha Ramabadran", title: "Data Security & Privacy Leadership Award" },
  { name: "Srinivas Talasila", title: "Cloud Migration & Modernization Champion" },
  { name: "Mallikarjuna Chevula", title: "Software Architecture Excellence Award" },
  { name: "Dennis Sebastian", title: "Software Architecture Excellence Award" },
  { name: "Swapnil Kale", title: "Software Architecture Excellence Award" },
  { name: "Manish Patel", title: "AI Innovator of the Year" },
  { name: "Madhukiran Vaddi", title: "AI Innovator of the Year" },
  { name: "Bhaskara Reddy Udaru", title: "Emerging Technology Solution Award" },
  { name: "Kranti Kumar Guduru", title: "Database Optimization Excellence Award" },
  { name: "Banda Nawaz", title: "Best Cloud Architecture Innovation Award" },
  { name: "Shravan Kumar Kistareddygari", title: "Best Cloud Architecture Innovation Award" },
  { name: "Jigarkumar Kishorkumar Zala", title: "Software Architecture Excellence Award" },
  { name: "Sasikiran Karanam", title: "Database Optimization Excellence" },
  { name: "Venkateswara Rao Mekanaboina", title: "Excellence in SAP Cloud Migration" },
  { name: "Avinash Geethananda", title: "Cloud Technologies (Best Cloud Architecture Innovation Award)" },
  { name: "Shovan Saha", title: "Research, Innovation & Impact (International Research Collaboration Award)" },
  { name: "Satya Teja Muddada", title: "Cloud Technologies (Best Cloud Architecture Innovation Award)" },
  { name: "Gopinath Ramisetty", title: "Databases & Data Engineering (Big Data Engineering Achievement Award)" },
  { name: "Satyanarayana Gudimetla", title: "Software Development & Solutions  (Best DevOps Transformation Award)" },
  { name: "Pooja Rajiv Ranjan", title: "Artificial Intelligence & Machine Learning  (AI Innovator of the Year)" },
  { name: "Dipta Rakshit", title: "Software Development & Solutions (Software Architecture Excellence Award)" },
  { name: "Laxmi Pratyusha Konda", title: "Cloud Technologies (Best Cloud Architecture Innovation Award)" },
  { name: "Achal Shah", title: "AI Innovator of the Year" },
  { name: "Zubairuddin Mohammed", title: "Excellence in Cloud Security Award" },
  { name: "Krishna Prasad Javvaji", title: "Software Architecture Excellence Award" },
  { name: "Prakash Dhanabal", title: "Cloud Migration & Modernization Champion" },
  { name: "Ajitha Rathinam Buvanachandran", title: "Responsible AI & Ethics Excellence Award" },
  { name: "Sridhar Sriharsha Rachakonda", title: "Leadership in Networking, Infrastructure & Security" },
  { name: "Biju Lalitha Soman", title: "Database Optimization Excellence Award" },
  { name: "Naresh Sritharen", title: "Software Architecture Excellence Award" },
  { name: "Pramod Santhebachahalli Thontadarya", title: "Software Architecture Excellence Award" },
  { name: "Vimal Pradeep Venugopal", title: "Cloud Migration & Modernization Champion" },
  { name: "Varghese Paul", title: "Outstanding Machine Learning Implementation Award" },
  { name: "Bhargav Sai Pillati", title: "Responsible AI & Ethics Excellence Award" },
  { name: "Arun Palanisamy", title: "Emerging Technology Solution Award" },
  { name: "Balaji Raghavendra Sundeep Vemula", title: "Software Architecture Excellence Award" },
  { name: "Akangsha Sunil Bedmutha", title: "Responsible AI & Ethics Excellence Award" },
  { name: "Karthik Nakkeeran", title: "AI Innovator of the Year" },
  { name: "Nikhil Dodda", title: "Artificial Intelligence & Machine Learning (Individual Category)" },
  { name: "Pratik Koshiya", title: "Databases & Data Engineering (Individual Category)" },
  { name: "Naveen Kumar Kasarla", title: "Software Development & Solutions (Individual Category)" },
  { name: "Srinivas Yadam", title: "Artificial Intelligence & Machine Learning (Individual Category)" },
  { name: "Laxmi Deepthi Atreyapurapu", title: "Research, Innovation & Impact" },
  { name: "Hardik R Patel", title: "Databases & Data Engineering (Big Data Engineering Achievement Award)" },
  { name: "Vineeth Reddy Mandadi", title: "Artificial Intelligence & Machine Learning (Leadership in Networking, Infrastructure & Security)" },
  { name: "Bhavinkumar Jayswal", title: "Cloud Technologies (Cloud Migration & Modernization Champion)" },
  { name: "Swapna Chimanchodkar", title: "Innovation & Entrepreneurship (Innovator of the Year (Academic/Corporate))" },
  { name: "Sathishkumar Periyasamy", title: "Cloud Technologies (Cloud Migration & Modernization Champion)" },
  { name: "Ajit Gajre", title: "Manufacturing & Industry (Industrial Automation Excellence Award)" },
  { name: "Harsh Kaushikbhai Patel", title: "Cloud Technologies (Excellence in Cloud Security Award)" },
  { name: "Sai Charan Madugula", title: "Leadership in Networking, Infrastructure & Security" },
  { name: "Mohamed Rizwan Syed Sulaiman", title: "Software Development & Solutions (Best DevOps Transformation Award)" },
  { name: "Ashish Kumar", title: "Cloud Technologies (Best Cloud Architecture Innovation Award)" }
];

export default function Awards2025({ data = AWARDS }) {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Awards & Honorees</h1>

          
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AWARDS.map((person, idx) => (
              <article
                key={`${person.name}-${idx}`}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold truncate">{person.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">{person.title}</p>
                </div>

                
              </article>
            ))}
          </div>

          
        </main>

        
      </div>
    </div>
  );
}
