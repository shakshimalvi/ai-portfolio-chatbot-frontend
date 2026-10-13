export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'NLP' | 'Deep Learning' | 'APIs & Deployment';
  summary: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  featuredMetric?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; proficiency?: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  name: "Shakshi Malvi",
  role: "Aspiring Machine Learning Engineer",
  headline: "Aspiring ML Engineer | Machine Learning | Data Science | AI Applications",
  bio: "Data Science student and aspiring Machine Learning Engineer passionate about transforming data into intelligent, production-ready systems. Experienced in end-to-end model development, natural language processing, predictive pipelines, and serving models via lightweight REST APIs and interactive interfaces.",
  email: "shakshimalvi3@gmail.com",
  github: "https://github.com/shakshimalvi",
  linkedin: "https://www.linkedin.com/in/shakshi-malvi/",
  location: "India",
  status: "Available for ML Engineering Internships & Opportunities",

  projects: [
    {
      id: "house-price-prediction-api",
      title: "House Price Prediction API",
      category: "Machine Learning",
      summary: "End-to-end regression model deployed as a high-performance REST API with real-time valuation inference.",
      description: "A production-grade Machine Learning service that predicts residential property values. Built using supervised regression algorithms, data preprocessing pipelines with scikit-learn, and wrapped with FastAPI for sub-second inference and OpenAPI automated documentation.",
      tags: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "Render", "NumPy"],
      githubUrl: "https://github.com/shakshimalvi/house-price-prediction-api",
      liveUrl: "https://house-price-prediction-api-8is0.onrender.com",
      highlights: [
        "Feature engineering pipeline handling categorical encoding, missing values & scaling",
        "FastAPI REST endpoints with Pydantic schema validation",
        "Hosted live on Render with automated continuous deployment",
        "Interactive Swagger UI (/docs) for direct API exploration"
      ],
      featuredMetric: "FastAPI REST Service"
    },
    {
      id: "spam-ham-sms-classifier",
      title: "Spam and Ham SMS Classifier",
      category: "NLP",
      summary: "Interactive natural language classifier detecting SMS spam and phishing attacks with high precision.",
      description: "A complete NLP application that categorizes text messages into legitimate (ham) or fraudulent (spam). Features text normalization, stop-word removal, TF-IDF vectorization, and naive Bayes / ensemble classification embedded into a responsive Streamlit application.",
      tags: ["Python", "Streamlit", "NLP", "Scikit-Learn", "TF-IDF", "Streamlit Cloud"],
      githubUrl: "https://github.com/shakshimalvi/Spam_Ham_Classifier",
      liveUrl: "https://spamhamclassifier-blldtfp4bjj3ycyzhyxi5u.streamlit.app/",
      highlights: [
        "Full text preprocessing pipeline: tokenization, lowercasing, punctuation stripping",
        "TF-IDF vector representation tuned for text classification",
        "Interactive Streamlit web app deployed on Streamlit Community Cloud",
        "Instant user feedback with classification confidence"
      ],
      featuredMetric: "Live Streamlit Web App"
    },
    {
      id: "technova-support-bot",
      title: "TechNova Support Bot",
      category: "NLP",
      summary: "Automated intelligent support bot designed to resolve user inquiries and technical issues.",
      description: "A customer-facing conversational bot engineered to parse customer intent, provide immediate troubleshooting resolutions, and escalate technical queries. Designed with modular query handlers and natural dialogue flow.",
      tags: ["Python", "NLP", "Conversational AI", "Rule-based & ML Intent", "FastAPI / CLI"],
      githubUrl: "https://github.com/shakshimalvi/technova-bot",
      highlights: [
        "Intent recognition engine mapping user queries to solutions",
        "Contextual fallback mechanisms for unresolved questions",
        "Clean architecture ready for multichannel integrations (Web, Discord, Slack)",
        "Configured for low latency and deterministic response retrieval"
      ],
      featuredMetric: "Conversational NLP"
    },
    {
      id: "next-word-prediction",
      title: "Next Word Prediction",
      category: "Deep Learning",
      summary: "Sequential language model forecasting the most probable next token given conversational context.",
      description: "Deep learning sequence modeling project implementing Recurrent Neural Networks (LSTM) for next-token probability distribution. Trained on textual corpora to evaluate predictive accuracy and sequence tokenization performance.",
      tags: ["Python", "Deep Learning", "TensorFlow / Keras", "LSTM", "NLP", "Sequence Modeling"],
      githubUrl: "https://github.com/shakshimalvi/Next_Word_Prediction",
      highlights: [
        "Sequential text tokenization and padded n-gram generation",
        "Recurrent neural network architecture using LSTM cells to capture context",
        "Softmax temperature sampling for dynamic candidate suggestions",
        "Comprehensive loss optimization and vocabulary indexing"
      ],
      featuredMetric: "LSTM Sequence Model"
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Machine Learning & AI",
      description: "Supervised and unsupervised learning, regression, classification, and sequence modeling.",
      skills: [
        { name: "Scikit-Learn" },
        { name: "TensorFlow / Keras" },
        { name: "Supervised Learning" },
        { name: "Model Evaluation & Metrics" },
        { name: "Feature Engineering" },
        { name: "Hyperparameter Tuning" }
      ]
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Text processing, sequence understanding, sentiment and intent classification.",
      skills: [
        { name: "TF-IDF & Vectorization" },
        { name: "Text Preprocessing & Tokenization" },
        { name: "Next Word Prediction (LSTMs)" },
        { name: "Spam & Intent Classification" },
        { name: "Conversational Bot Architecture" },
        { name: "N-gram Modeling" }
      ]
    },
    {
      title: "Languages & Frameworks",
      description: "Core programming languages, analytical libraries, and modern backend web frameworks.",
      skills: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "Streamlit" },
        { name: "Pandas & NumPy" },
        { name: "SQL" },
        { name: "Matplotlib & Seaborn" }
      ]
    },
    {
      title: "Deployment & Tools",
      description: "Version control, containerized hosting, cloud services, and tunnel infrastructure.",
      skills: [
        { name: "Git & GitHub" },
        { name: "Render Cloud Deployment" },
        { name: "Streamlit Cloud" },
        { name: "Cloudflare Tunnels" },
        { name: "REST API Design" },
        { name: "Linux / CLI Environments" }
      ]
    }
  ] as SkillCategory[],

  principles: [
    {
      title: "End-to-End Pipeline Thinking",
      desc: "From raw unstructured datasets through cleaning, feature selection, training, and packaging into tested APIs."
    },
    {
      title: "Production Accessibility",
      desc: "ML models are most valuable when exposed through intuitive REST APIs and responsive user interfaces."
    },
    {
      title: "Continuous Experimentation",
      desc: "Iterative benchmarking of metrics (precision, recall, RMSE, cross-validation) to produce reliable systems."
    }
  ]
};
