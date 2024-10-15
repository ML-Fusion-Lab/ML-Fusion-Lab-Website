const courseDetails = [
    {
      id: "course_1",
      img: "CourseAssets/1.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Google AI Essentials",
      desc: "Beginner · Course",
      skills: "AI fundamentals",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Sarah Lee", "Prof. John Smith"],
      courseDetails: {
        lessons: 12,
        assignments: 5,
        duration: { hours: 20, minutes: 30 },
      },
      about:
        "Dive into the world of AI with Google AI Essentials. This comprehensive course provides a solid foundation in artificial intelligence concepts, machine learning techniques, and their practical applications. You'll explore cutting-edge AI technologies and learn how to leverage Google's AI tools to solve real-world problems.",
      learningOutcomes: [
        "Understand core AI concepts and terminology",
        "Apply machine learning algorithms to solve practical problems",
        "Utilize Google's AI tools effectively",
        "Develop AI-powered applications",
      ],
      requirements: [
        "Basic programming knowledge",
        "Familiarity with Python (recommended)",
        "Understanding of basic mathematics and statistics",
      ],
      strikedPrice: "$199",
      price: "$149",
    },
    {
      id: "course_2",
      img: "CourseAssets/2.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Python for Everybody",
      desc: "Beginner · Specialization",
      skills: "Python programming",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Charles Severance"],
      courseDetails: {
        lessons: 25,
        assignments: 10,
        duration: { hours: 40, minutes: 0 },
      },
      about:
        "Python for Everybody is a comprehensive specialization designed to introduce you to programming and Python. From the basics of syntax to advanced concepts like data structures and web scraping, this course covers it all. You'll gain hands-on experience through numerous coding exercises and projects, preparing you for real-world programming challenges.",
      learningOutcomes: [
        "Master Python fundamentals and syntax",
        "Work with data structures and algorithms",
        "Develop web scraping skills",
        "Create basic Python applications",
      ],
      requirements: [
        "No prior programming experience required",
        "Basic computer skills",
        "Willingness to learn and practice regularly",
      ],
      strikedPrice: "$249",
      price: "$199",
    },
    {
      id: "course_3",
      img: "CourseAssets/3.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Prompt Engineering",
      desc: "Beginner · Specialization",
      skills: "AI interaction",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Emily Chen", "Prof. Michael Johnson"],
      courseDetails: {
        lessons: 15,
        assignments: 8,
        duration: { hours: 25, minutes: 45 },
      },
      about:
        "Unlock the power of AI language models with our Prompt Engineering specialization. Learn the art and science of crafting effective prompts to get the most out of AI systems. This course covers various techniques, best practices, and ethical considerations in prompt engineering, enabling you to leverage AI tools more efficiently in your projects and workflows.",
      learningOutcomes: [
        "Understand the principles of prompt engineering",
        "Craft effective prompts for various AI tasks",
        "Optimize AI model outputs",
        "Apply ethical considerations in AI interactions",
      ],
      requirements: [
        "Basic understanding of AI and machine learning",
        "Familiarity with natural language processing concepts",
        "Critical thinking and problem-solving skills",
      ],
      strikedPrice: "$179",
      price: "$139",
    },
    {
      id: "course_4",
      img: "CourseAssets/4.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "IBM Data Science",
      desc: "Beginner · Professional Certificate",
      skills: "Data science, AI skills",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Robert Taylor", "Prof. Lisa Wong"],
      courseDetails: {
        lessons: 30,
        assignments: 15,
        duration: { hours: 60, minutes: 0 },
      },
      about:
        "Embark on a journey to become a skilled data scientist with IBM's comprehensive Data Science Professional Certificate program. This course covers everything from basic statistics to advanced machine learning techniques. You'll work with real-world datasets, learn to use popular data science tools, and develop a portfolio of projects to showcase your skills to potential employers.",
      learningOutcomes: [
        "Master data analysis and visualization techniques",
        "Develop proficiency in machine learning algorithms",
        "Gain hands-on experience with data science tools",
        "Create a portfolio of data science projects",
      ],
      requirements: [
        "Basic knowledge of mathematics and statistics",
        "Familiarity with programming concepts (preferably Python)",
        "Analytical mindset and problem-solving skills",
      ],
      strikedPrice: "$399",
      price: "$299",
    },
    {
      id: "course_5",
      img: "CourseAssets/5.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Machine Learning Fundamentals",
      desc: "Intermediate · Course",
      skills: "Machine learning, AI skills",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Alex Martinez", "Prof. Sophia Lee"],
      courseDetails: {
        lessons: 20,
        assignments: 10,
        duration: { hours: 35, minutes: 0 },
      },
      about:
        "Delve into the core concepts of machine learning with this comprehensive course. From supervised and unsupervised learning to deep neural networks, you'll gain a solid understanding of various ML algorithms and their applications. Through hands-on projects, you'll learn to implement these algorithms and tackle real-world problems using popular ML libraries.",
      learningOutcomes: [
        "Understand key machine learning algorithms",
        "Implement ML models using Python libraries",
        "Evaluate and optimize model performance",
        "Apply ML techniques to solve real-world problems",
      ],
      requirements: [
        "Intermediate Python programming skills",
        "Basic understanding of statistics and linear algebra",
        "Familiarity with data analysis concepts",
      ],
      strikedPrice: "$299",
      price: "$249",
    },
    {
      id: "course_6",
      img: "CourseAssets/6.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Big Data Analytics",
      desc: "Advanced · Specialization",
      skills: "Big data, Analytics",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. David Chen", "Prof. Rachel Brown"],
      courseDetails: {
        lessons: 28,
        assignments: 12,
        duration: { hours: 50, minutes: 30 },
      },
      about:
        "Master the skills needed to handle and analyze massive datasets with our Big Data Analytics specialization. Learn to work with distributed computing systems, implement MapReduce algorithms, and use tools like Hadoop and Spark. This course will equip you with the knowledge to extract valuable insights from big data and drive data-informed decision-making in organizations.",
      learningOutcomes: [
        "Understand big data ecosystems and technologies",
        "Implement distributed computing algorithms",
        "Use Hadoop and Spark for big data processing",
        "Develop skills in data mining and predictive analytics",
      ],
      requirements: [
        "Strong programming skills (preferably in Java or Scala)",
        "Understanding of database systems",
        "Familiarity with basic statistical concepts",
      ],
      strikedPrice: "$449",
      price: "$379",
    },
    {
      id: "course_7",
      img: "CourseAssets/7.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Cybersecurity Essentials",
      desc: "Beginner · Professional Certificate",
      skills: "Cybersecurity",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Prof. Mark Thompson", "Dr. Laura Garcia"],
      courseDetails: {
        lessons: 22,
        assignments: 8,
        duration: { hours: 40, minutes: 15 },
      },
      about:
        "Dive into the world of cybersecurity with this comprehensive course. Learn about common threats, security protocols, and best practices for protecting digital assets. You'll gain hands-on experience with security tools, explore ethical hacking techniques, and develop the skills to identify and mitigate potential vulnerabilities in computer systems and networks.",
      learningOutcomes: [
        "Understand fundamental cybersecurity concepts",
        "Implement basic security measures",
        "Perform vulnerability assessments",
        "Develop incident response strategies",
      ],
      requirements: [
        "Basic understanding of computer networks",
        "Familiarity with operating systems (Windows, Linux)",
        "No prior security experience required",
      ],
      strikedPrice: "$299",
      price: "$249",
    },
    {
      id: "course_8",
      img: "CourseAssets/8.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Cloud Computing Fundamentals",
      desc: "Intermediate · Course",
      skills: "Cloud computing",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Samuel Lee", "Prof. Emma Watson"],
      courseDetails: {
        lessons: 18,
        assignments: 6,
        duration: { hours: 30, minutes: 0 },
      },
      about:
        "Explore the foundations of cloud computing in this comprehensive course. Learn about different cloud service models, deployment strategies, and leading cloud platforms. You'll gain hands-on experience setting up and managing cloud infrastructure, understand scalability and security considerations, and develop the skills to architect cloud-based solutions for various business needs.",
      learningOutcomes: [
        "Understand cloud computing concepts and models",
        "Deploy and manage cloud infrastructure",
        "Implement cloud security best practices",
        "Architect scalable cloud-based solutions",
      ],
      requirements: [
        "Basic understanding of networking concepts",
        "Familiarity with virtualization technologies",
        "Some experience with Linux command line",
      ],
      strikedPrice: "$279",
      price: "$229",
    },
    {
      id: "course_9",
      img: "CourseAssets/9.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Blockchain Technology",
      desc: "Advanced · Specialization",
      skills: "Blockchain, Cryptocurrency",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Dr. Michael Chang", "Prof. Jessica Roberts"],
      courseDetails: {
        lessons: 24,
        assignments: 10,
        duration: { hours: 45, minutes: 30 },
      },
      about:
        "Delve into the revolutionary world of blockchain technology with this advanced specialization. Understand the underlying principles of distributed ledgers, smart contracts, and consensus mechanisms. You'll learn to develop blockchain applications, explore different blockchain platforms, and gain insights into the potential impact of this technology across various industries.",
      learningOutcomes: [
        "Understand blockchain fundamentals and architecture",
        "Develop smart contracts and decentralized applications",
        "Implement blockchain solutions using popular platforms",
        "Evaluate blockchain use cases for different industries",
      ],
      requirements: [
        "Strong programming skills (preferably in JavaScript or Solidity)",
        "Understanding of cryptography basics",
        "Familiarity with distributed systems concepts",
      ],
      strikedPrice: "$399",
      price: "$349",
    },
    {
      id: "course_10",
      img: "CourseAssets/10.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      logoName: "IBM",
      title: "Data Visualization Mastery",
      desc: "Intermediate · Course",
      skills: "Data visualization, Analytics",
      certifiedBy:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      instructors: ["Prof. Sarah Johnson", "Dr. Thomas Lee"],
      courseDetails: {
        lessons: 16,
        assignments: 8,
        duration: { hours: 28, minutes: 45 },
      },
      about:
        "Master the art and science of data visualization with this comprehensive course. Learn to transform complex data into clear, compelling visual stories. You'll explore various visualization techniques, work with popular tools like Tableau and D3.js, and develop the skills to create interactive dashboards and data-driven narratives that effectively communicate insights to diverse audiences.",
      learningOutcomes: [
        "Understand principles of effective data visualization",
        "Create compelling visualizations using various tools",
        "Design interactive dashboards and data stories",
        "Apply best practices for different data types and audiences",
      ],
      requirements: [
        "Basic understanding of data analysis concepts",
        "Familiarity with spreadsheet software",
        "Some programming experience (preferably JavaScript) for advanced topics",
      ],
      strikedPrice: "$249",
      price: "$199",
    },
  ];

  export default courseDetails;