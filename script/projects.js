// Array of projects
const projects = [
  {
    "modelid": "modal1",
    "cardImage": "../../Assets/projectpics/dog.png",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Dog Breed Classifier",
    "cardDesc": "In this tutorial, we build a dog breed classifier using the MobileNetV2 and Convolutional Neural Networks (CNNs).",
    "learnMoreLink": "../pages/dog_breed_classifier.html"
  },
  {
    "modelid": "modal2",
    "cardImage": "../Assets/projectpics/paddy.jpeg",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Paddy Disease Classifier",
    "cardDesc": "In this tutorial, we build a paddy disease classifier using Convolutional Neural Networks (CNNs).",
    "learnMoreLink": "../pages/paddy_disease_tutorial.html"
  },
  {
    "modelid": "modal3",
    "cardImage": "../Assets/projectpics/terrain_classifier.jpg",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Terrain Classifier",
    "cardDesc": "In this tutorial, we will build a terrain classification model by implementing transfer learning.",
    "learnMoreLink": "../pages/terrain_classifier.html"
  },
  {
    "modelid": "modal4",
    "cardImage": "../Assets/projectpics/bird_species.jpg",
    "cardAlt": "Transfer Learning",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Transfer Learning Tutorial",
    "cardDesc": "In this tutorial, we will build a Bird Species Classifier by implementing transfer learning.",
    "learnMoreLink": "../pages/transfer_learning_tutorial.html"
  },
  {
    "modelid": "modal5",
    "cardImage": "../Assets/projectpics/eye_tracking.jpg",
    "cardAlt": "Eye Tracking",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Mouse Control using Eye Tracking",
    "cardDesc": "in this tutorial, we’ll guide you step by step on how to control the mouse cursor using your eyes.",
    "learnMoreLink": "../pages/eye_tracking_tutorial.html"
  },
  {
    "modelid": "modal6",
    "cardImage": "../Assets/projectpics/pdf_mal_detection.jpg",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Detect Malicious PDFs",
    "cardDesc": "In this tutorial, we will build a model and PDF-feature extraction script to create a pipeline to detect malicious PDFs.",
    "learnMoreLink": "../pages/pdf_malware_detection.html"
  },
  {
    "modelid": "modal7",
    "cardImage": "../Assets/projectpics/facemask_detection.jpg",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "COVID-19 Facemask Detection ",
    "cardDesc": "In this tutorial, we will use images and annotations to build a Resnet34 model to detect COVID-19 facemasks.",
    "learnMoreLink": "../pages/covid_facemask_detection.html"
  },
  {
    "modelid": "modal8",
    "cardImage": "../Assets/projectpics/birth_time_series.webp",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Birth Rate Time Series Analysis ",
    "cardDesc": "In this tutorial, we use time series analysis to train LSTM , ARIMA and Prophet models to predict Birth Rate.",
    "learnMoreLink": "../pages/birth_rate_prediction.html"
  },
  {
    "modelid": "modal9",
    "cardImage": "../Assets/projectpics/human_migration.webp",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "Predicting Human Migration ",
    "cardDesc": "In this tutorial, we use time series analysis to train RandomForest , XGBoost and GradientBoost models to predict HUman Migration.",
    "learnMoreLink": "../pages/human_migration.html"
  },
  {
    "modelid": "modal10",
    "cardImage": "../Assets/projectpics/sarima_stock.webp",
    "cardAlt": "cnn",
    "imgStyle": "box-shadow: none; border-radius: 5px;",
    "cardTitle": "ARIMA - Stock prediction ",
    "cardDesc": "In this tutorial, we use time series analysis to SARIMA model for stoack prediction.",
    "learnMoreLink": "../pages/arima_stock_prediction.html"
  },
    {
      "modelid": "modal11",
      "cardImage": "../Assets/projectpics/crops.jpg",
      "cardAlt": "crops",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Crop Height Using Computer Vision",
      "cardDesc": "Utilize contour detection techniques to estimate the height of crops for agricultural purposes.",
      "learnMoreLink": "../pages/crop_height_estimation_tutorial.html"
    },
    {
      "modelid": "modal12",
      "cardImage": "../Assets/projectpics/disease.jpg",
      "cardAlt": "disease",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI-Based Disease Diagnosis",
      "cardDesc": "A machine learning model that helps detect early symptoms of diseases using patient data.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal13",
      "cardImage": "../Assets/projectpics/shop.jpg",
      "cardAlt": "shopping",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Recommendation System for Shopping",
      "cardDesc": "Build a recommendation system that suggests products based on user browsing behavior.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal14",
      "cardImage": "../Assets/projectpics/cnn.png",
      "cardAlt": "cnn",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Image Classification with Deep Learning",
      "cardDesc": "Develop a model that classifies images into categories using convolutional neural networks.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal15",
      "cardImage": "../Assets/projectpics/emai.jpg",
      "cardAlt": "email",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Automated Email Response System",
      "cardDesc": "Implement a system that uses NLP to generate automated responses to common email inquiries.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal16",
      "cardImage": "../Assets/projectpics/stock.jpg",
      "cardAlt": "stock",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Stock Price Time Series Forecasting",
      "cardDesc": "Apply machine learning algorithms to predict future stock prices based on historical data.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal17",
      "cardImage": "../Assets/projectpics/bot.png",
      "cardAlt": "bot",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Chatbot Development for Customer Support",
      "cardDesc": "Create an AI-powered chatbot that assists users with their inquiries in real time.",
      "learnMoreLink": "../pages/chatbot_development_tutorial.html"
    },
    {
      "modelid": "modal18",
      "cardImage": "../Assets/projectpics/fraud.png",
      "cardAlt": "fraud",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI-Powered Fraud Detection System",
      "cardDesc": "Develop a system that identifies fraudulent activities using machine learning techniques.",
      "learnMoreLink": "../pages/fraud_detection.html"
    },
    {
      "modelid": "modal19",
      "cardImage": "../Assets/projectpics/lth.png",
      "cardAlt": "health",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Healthcare Predictive Analytics",
      "cardDesc": "Use patient data to predict potential diseases, enabling early intervention and personalized treatment plans.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal20",
      "cardImage": "../Assets/projectpics/wild.jpg",
      "cardAlt": "wild",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Wildfire Detection Using Satellite Images",
      "cardDesc": "Leverage satellite imagery and deep learning to detect and predict wildfire occurrences in vulnerable regions.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal21",
      "cardImage": "../Assets/projectpics/waste.jpg",
      "cardAlt": "waste",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Waste Management Optimization",
      "cardDesc": "Develop a machine learning model to optimize waste collection schedules based on city data, reducing pollution.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal22",
      "cardImage": "../Assets/projectpics/traffic.jpg",
      "cardAlt": "traffic",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Traffic Accident Prediction System",
      "cardDesc": "Use real-time traffic data and predictive models to forecast traffic accidents and improve road safety.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal23",
      "cardImage": "../Assets/projectpics/personalizd.jpg",
      "cardAlt": "personalized",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Personalized Learning Recommendation System",
      "cardDesc": "Create an adaptive learning platform that suggests personalized learning paths based on student performance data.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal24",
      "cardImage": "../Assets/projectpics/mental.jpg",
      "cardAlt": "mental",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI for Mental Health Analysis",
      "cardDesc": "Utilize sentiment analysis and pattern recognition to assess mental health based on user interactions and data.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal25",
      "cardImage": "../Assets/projectpics/dist.jpg",
      "cardAlt": "Disaster",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI-Driven Disaster Relief Supply Chain Optimization",
      "cardDesc": "Optimize supply chain logistics for disaster relief efforts, predicting demand and supply shortages in real time.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal26",
      "cardImage": "../Assets/projectpics/sound.jpg",
      "cardAlt": "sound",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Urban Sound Classification",
      "cardDesc": "Build a system that classifies urban sounds (e.g., traffic, sirens, and birds) to aid in city planning and noise pollution analysis.",
      "learnMoreLink": "../pages/urban_sound_classification_tutorial.html"
    },
    {
      "modelid": "modal27",
      "cardImage": "../Assets/projectpics/eneryg.png",
      "cardAlt": "energy",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Smart Home Energy Prediction",
      "cardDesc": "Create a model that predicts energy consumption in smart homes based on weather and user behavior data, optimizing energy usage.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal28",
      "cardImage": "../Assets/projectpics/nut.jpg",
      "cardAlt": "nutrition",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI for Personalized Nutrition Plans",
      "cardDesc": "Use user data (age, health conditions, dietary preferences) to develop personalized nutrition and meal plans using machine learning.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal29",
      "cardImage": "../Assets/projectpics/rec.jpg",
      "cardAlt": "recycle",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Plastic Waste Classification To Recycle",
      "cardDesc": "Develop a system using computer vision to classify plastic waste into categories, helping streamline recycling processes.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal30",
      "cardImage": "../Assets/projectpics/the.jpg",
      "cardAlt": "Therapist",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI-Powered Virtual Therapist",
      "cardDesc": "Create a conversational AI that provides mental health support and guidance based on user interactions, reducing barriers to therapy.",
      "learnMoreLink": "#"
    },
    {
      "modelid": "modal31",
      "cardImage": "../Assets/projectpics/humanface_landmark_detection.webp",
      "cardAlt": "CNN",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "HumanFace Landmark Detction",
      "cardDesc": "In this tutorial, we will build a CNN model to map and detect landmaks in Human Face",
      "learnMoreLink": "../pages/face_landmark_detection.html"
    },
    {
      "modelid": "modal32",
      "cardImage": "../Assets/projectpics/deblurrer.webp",
      "cardAlt": "CNN",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "De-blurring Images using CNN",
      "cardDesc": "In this tutorial, we will build a CNN model to deblur given image",
      "learnMoreLink": "../pages/deblurring.html"
    },
    {
      "modelid": "modal33",
      "cardImage": "../Assets/projectpics/earthquake.webp",
      "cardAlt": "Deep Learning",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Earthquake Prediction using Deep Learning",
      "cardDesc": "In this tutorial, we will build a Deep Learning model to predict earthquakes",
      "learnMoreLink": "../pages/earthquake_prediction.html"
    },
    {
      "modelid": "modal34",
      "cardImage": "../Assets/projectpics/fuel_efficiency.webp",
      "cardAlt": "Deep Learning",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Predict Fuel Efficiency with Machine Learning",
      "cardDesc": "In this tutorial, we will build a Machine Learning model to predict fuel Efficiency",
      "learnMoreLink": "../pages/fuel_efficiency.html"
    },
    {

      "modelid": "modal35",
      "cardImage": "../Assets/projectpics/next_word.webp",
      "cardAlt": "NLP",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "NLP Word Prediction",
      "cardDesc": "In this tutorial, we will build a NLP to predict next word in sentence",
      "learnMoreLink": "../pages/next_word.html"
    },
    {

      "modelid": "modal36",
      "cardImage": "../Assets/projectpics/title_generator.webp",
      "cardAlt": "LSTM",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Title Generaion using Machine Learning",
      "cardDesc": "In this tutorial, we will build a LSTM model to generate titles",
      "learnMoreLink": "../pages/title_generator.html"
    },
    {

      "modelid": "modal37",
      "cardImage": "../Assets/projectpics/crop_rotation_recommendation.jpg",
      "cardAlt": "Crop Rotation Recommendation",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "AI-Powered Crop Rotation Recommendation",
      "cardDesc": "Build an AI model using Random Forest to recommend the best crop for the next season based on soil type, moisture, and nutrient levels.",
      "learnMoreLink": "../pages/crop_rotation_recommendation.html"
    },
    {
      "modelid": "modal38",
      "cardImage": "../Assets/projectpics/gold_price_predictor.jpg",
      "cardAlt": "Gold Price Prediction",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Gold Price Prediction using Random Forest",
      "cardDesc": "Build a Random Forest regression model to predict future gold prices based on financial indicators like SPX, USO, SLV, and EUR/USD.",
      "learnMoreLink": "../pages/gold_price_predictor.html"
    }, 
    {
      "modelid": "modal39",
      "cardImage": "../Assets/projectpics/skill_gap_analyzer.jpg",
      "cardAlt": "Skill Gap Analyzer",
      "imgStyle": "box-shadow: none; border-radius: 5px;",
      "cardTitle": "Skill Gap Analyzer: Using Flask, Proxycurl, and Gemini APIs",
      "cardDesc": "Develop a web app that identifies skill gaps based on a user's current skills and career goals by leveraging LinkedIn data and Google's Gemini API.",
      "learnMoreLink": "../pages/skill_gap_analyzer.html"
    }
    
    
        
  ] 

  
  // Select card container
  const projectList = document.querySelector(".project-list");
  const loadMoreButton = document.querySelector(".load-more-button");
  // Render projects
  cardPerPage = 5;
  currentIndex = 0;
  
  const loadMore = () => {
    for (
      let i = currentIndex;
      i < currentIndex + cardPerPage && i < projects.length;
      i++
    ) {
      // Create card element
      const card = document.createElement("div");
      const cardImg = document.createElement("img");
      const title = document.createElement("h3");
      const desc = document.createElement("p");
      const link = document.createElement("a");
      const learnMoreLink = document.createElement("a");
      // Set attributes
      card.className = "project-item";
  
      cardImg.setAttribute("src", projects[i].cardImage);
      cardImg.setAttribute("style", projects[i].imgStyle)
      cardImg.setAttribute("alt", projects[i].cardAlt);
      title.innerHTML = projects[i].cardTitle;
      desc.innerHTML = projects[i].cardDesc;

      // Append the elements
      card.appendChild(cardImg);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(link);

  
      if (projects[i].learnMoreLink != '#'){
        link.href = projects[i].learnMoreLink;
        link.innerHTML = "Open Project";
        link.classList.add("btn");
        card.appendChild(link);
      }
      else{
        learnMoreLink.innerHTML = "Learn More";
        learnMoreLink.classList.add("btn");
        learnMoreLink.setAttribute("onclick", `openModal('${projects[i].modelid}')`)
        card.appendChild(learnMoreLink);
      }
      projectList.appendChild(card);
    }
    currentIndex += cardPerPage;
  
    if (currentIndex > projects.length){
      loadMoreButton.classList.add("hide-btn")
    }
  };
  
  // Load cards on click event
  loadMoreButton.addEventListener("click", () => {
    loadMore();
  });
  
  // Function is called once statically to load initial cards.
  loadMore();
  // <!-- js for mouse cursor trail effect -->
  
       document.addEventListener("DOMContentLoaded", function () {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
  
    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });
  
    window.addEventListener("mousemove", function (e) {
      coords.x = e.pageX;
      coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
    });
  
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
  
      circles.forEach(function (circle, index) {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
  
        const nextCircle = circles[index + 1] || circles[0];
        circle.x = x;
        circle.y = y;
  
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
  
      requestAnimationFrame(animateCircles);
    }
  
    animateCircles();
  });
  