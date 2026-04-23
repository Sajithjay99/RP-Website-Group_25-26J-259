import domainImage from "../assets/domain_01.png";
import domainImage2 from "../assets/domain_00.png";
import domainImage3 from "../assets/domain_02.png";
import { Puzzle, Link2, Globe } from "lucide-react";
import { Database, Settings, Cpu, Brain, BarChart } from "lucide-react";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { Target, Activity } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiTensorflow,
  SiKeras,
  SiMongodb,
  SiGooglecolab,
  SiJsonwebtokens
} from "react-icons/si";

const Domain = () => {
  return (
      <div className="bg-bg-primary text-text-primary min-h-screen">

      {/* ================= HERO ================= */}
      <section className="min-h-[80vh] flex items-center justify-center text-center">

        <div className="max-w-5xl mx-auto px-8">

          {/* Heading */}
<h2 className="text-3xl font-semibold text-text-primary mb-16">
    Research Domain
    </h2>
            <br  />
            <br />
            <br />
       
    <img
  src={domainImage3}
  alt="Mental Health Awareness"
  className="mx-auto w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-spotify-green shadow-[0_0_15px_#1DB954]"
/>
             <br  />
             <br  />
<br />
          {/* Description */}
 <p className="mb-4 text-text-secondary">
    M_Track is a multi-module system that combines multiple signals to build a more reliable view of a student’s emotional state over time:
  </p>
<br />
<ul className="space-y-3 mb-6">
  <li className="text-spotify-green text-lg font-medium">Facial emotion</li>
  <li className="text-spotify-green text-lg font-medium">Voice emotion</li>
  <li className="text-spotify-green text-lg font-medium">Music listening behavior</li>
  <li className="text-spotify-green text-lg font-medium">EEG signals</li>
</ul>
<br />
  <p className="text-text-secondary">
    Each module produces a model output, and the backend consolidates them into a standardized response that the frontend can present in a clear, user-friendly flow.
  </p>
<br />
<br />
<br />
        </div>

      </section>

      {/* ================= LITERATURE ================= */}
      <section className="min-h-[80vh] flex items-center justify-center text-center">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-3xl font-semibold text-center mb-12">
            <br  />
          Introduction
            <br  />
          </h2>
          <br  />

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="bg-card-bg border border-spotify-green p-6 rounded-xl flex items-center gap-4">
      
              <p className="text-text-secondary">
<img
  src={domainImage}
  alt="Mental Health Awareness"
  className="mx-auto w-full max-w-4xl rounded-2xl shadow-2xl border border-spotify-green/50 shadow-[0_0_10px_#1DB954]"
/>
              </p>
            </div>

            {/* RIGHT */}
            <p className="text-text-secondary">
              Mental health has become a significant global concern, particularly among university students who are exposed to various academic, social, and personal pressures. According to the World Health Organization (WHO), mental health is not merely the absence of mental illness but a state of well-being that enables individuals to function effectively and contribute to society. However, a large proportion of students experience psychological distress such as anxiety, depression, and stress, which often remains undetected due to limitations in traditional assessment methods.

At a global level, mental health disorders affect approximately one in eight individuals, with depression and anxiety being the most common conditions. Among university students, the prevalence is even higher due to academic workload, financial challenges, and uncertainty about future careers. In the Sri Lankan context, these challenges are further intensified by limited access to mental health services, low mental health awareness, and social stigma associated with seeking psychological support. As a result, many students experience symptoms that remain unreported and untreated.

Traditional mental health assessment techniques, such as self-report questionnaires including PHQ-9 and DASS-21, provide valuable insights but are limited in their ability to capture continuous emotional changes. These methods rely on periodic evaluations and subjective responses, which may not accurately reflect real-time mental states. Consequently, there is a growing need for alternative approaches that enable continuous, objective, and non-intrusive monitoring of emotional and psychological conditions.

Recent advancements in artificial intelligence and machine learning have introduced new possibilities for mental health analysis through behavioral signals. Facial expressions, voice patterns, EEG signals, and user behavior have emerged as key indicators of emotional states. 
            </p>

          </div>

        </div>
      </section>

      {/* ================= GAP ================= */}
      <section className="min-h-[80vh] flex items-center justify-center text-center">
      <div className="max-w-7xl mx-auto px-8">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-16">
          Gap
        </h2>
<br />
<br />
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Gap 1 */}
          <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-bg-tertiary rounded-full border border-border-light">
                <Puzzle className="w-8 h-8 text-spotify-green drop-shadow-[0_0_6px_#1DB954]" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Single-Modal Limitation
            </h3>
            <br />
            <p className="text-text-secondary text-sm leading-relaxed">
  Most existing mental health detection systems rely on a single data source, such as facial expressions or voice signals. While these approaches can capture certain emotional cues, they fail to represent the full complexity of human psychological states. Emotions are influenced by multiple factors, including cognitive activity, behavioral patterns, and physiological signals. As a result, single-modal systems often produce limited accuracy and may overlook subtle variations in emotional changes. This highlights the need for integrating multiple data sources to achieve a more comprehensive and reliable understanding of mental health conditions.
</p>
          </div>

          {/* Gap 2 */}
          <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-bg-tertiary rounded-full border border-border-light">
                <Link2 className="w-8 h-8 text-spotify-green drop-shadow-[0_0_6px_#1DB954]" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Lack of Multimodal Integration
            </h3>
            <br />
            <p className="text-text-secondary text-sm leading-relaxed">
  Very few existing systems adopt a fully multimodal approach by integrating diverse data sources such as EEG signals, voice input, facial expressions, and behavioral patterns like music listening. Each of these modalities provides unique insights into a user’s emotional and cognitive state; however, when used in isolation, they offer only partial understanding. The lack of effective integration across these modalities limits the ability to capture complex emotional patterns and reduces the overall reliability of mental health predictions. Therefore, there is a significant need for systems that can combine multiple data streams to provide a more comprehensive, accurate, and context-aware analysis of mental health conditions.
</p>
          </div>

          {/* Gap 3 */}
          <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-bg-tertiary rounded-full border border-border-light">
                <Globe className="w-8 h-8 text-spotify-green drop-shadow-[0_0_6px_#1DB954]" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Lack of Local Context
            </h3>
            <br />
           <p className="text-text-secondary text-sm leading-relaxed">
  Existing mental health detection models are generally developed using datasets from Western populations and are not specifically tailored to Sri Lankan university students. These models often overlook important cultural, social, and environmental factors that significantly influence emotional expression and mental health conditions within the local context. Differences in lifestyle, academic pressure, social expectations, and mental health awareness can impact how individuals experience and express psychological distress. As a result, applying generalized models may lead to reduced accuracy and misinterpretation of emotional states. This highlights the need for context-aware systems designed specifically for Sri Lankan students to ensure more reliable and meaningful mental health analysis.
</p>
          </div>

        </div>

      </div>
    </section>

<section className="min-h-[80vh] flex items-center justify-center">
  <div className="max-w-6xl mx-auto px-8">

    {/* Title */}
    <h2 className="text-3xl font-semibold text-center text-text-primary mb-16">
      Problem & Solution
    </h2>

    <br />

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* PROBLEM */}
      <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition">
        
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="text-red-500 w-6 h-6" />
          <h3 className="text-xl font-semibold text-text-primary">Problem</h3>
        </div>

        <br />

        {/* Main line */}
        <p className="text-text-secondary font-medium text-center">
          Mental health issues among university students are increasing, yet early detection remains a major challenge.
        </p>

        <br />

        {/* Points */}
        <div className="space-y-3 text-text-secondary">

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Traditional methods rely on self-reporting tools such as questionnaires, which are subjective and not continuous.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              These approaches fail to capture real-time emotional changes and early warning signs of distress.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Existing systems depend on single data modalities such as facial or voice data, limiting accuracy.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Most models are trained on non-local datasets, reducing effectiveness for Sri Lankan students.
            </p>
          </div>

        </div>

      </div>

      {/* SOLUTION */}
      <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition">
        
        <div className="flex items-center justify-center gap-3 mb-4">
          <Lightbulb className="text-spotify-green w-6 h-6 drop-shadow-[0_0_6px_#1DB954]" />
          <h3 className="text-xl font-semibold text-text-primary">Solution</h3>
        </div>

        <br />

        {/* Main line */}
        <p className="text-text-secondary font-medium text-center">
          A multimodal, intelligent solution for early mental health detection.
        </p>

        <br />

        {/* Points */}
        <div className="space-y-3 text-text-secondary">

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Integrates multiple data sources including facial expressions, voice signals, EEG data, and music listening behavior.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Enables real-time monitoring to continuously track emotional changes and detect early warning signs.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Utilizes advanced machine learning models to process complex behavioral and physiological data.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-spotify-green">●</span>
            <p>
              Provides a context-aware approach tailored for Sri Lankan university students.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<section className="min-h-[80vh] flex items-center justify-center">
  <div className="max-w-6xl mx-auto px-8">

    {/* Title */}
    <h2 className="text-3xl font-semibold text-center text-text-primary mb-16">
      Objectives
    </h2>
<br />
<br />
    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Objective 1 */}
      <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="text-spotify-green w-6 h-6" />
          <h3 className="text-lg font-semibold text-text-primary">
            Develop Multimodal System
          </h3>
        </div>
<br />
        <p className="text-text-secondary text-sm leading-relaxed">
          To design and develop a multimodal system that integrates facial expressions, voice signals, EEG data, and music listening behavior.
          <br /><br />
          This enables capturing a comprehensive understanding of a student’s emotional and cognitive state for better analysis.
        </p>
      </div>

      {/* Objective 2 */}
      <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Activity className="text-spotify-green w-6 h-6" />
          <h3 className="text-lg font-semibold text-text-primary">
            Enable Real-Time Monitoring
          </h3>
        </div>
<br />
        <p className="text-text-secondary text-sm leading-relaxed">
          To implement real-time monitoring of user interactions and emotional responses.
          <br /><br />
          This allows continuous tracking of emotional changes and early detection of psychological distress.
        </p>
      </div>

      {/* Objective 3 */}
      <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="text-spotify-green w-6 h-6" />
          <h3 className="text-lg font-semibold text-text-primary">
            Improve Prediction Accuracy
          </h3>
        </div>
<br /> 
        <p className="text-text-secondary text-sm leading-relaxed">
          To apply advanced machine learning techniques for analyzing multimodal data.
          <br /><br />
          This improves the accuracy and reliability of mental health predictions compared to traditional methods.
        </p>
      </div>

      {/* Objective 4 */}
      <div className="bg-bg-secondary p-6 rounded-xl border border-border-light hover:bg-card-hover transition text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BarChart className="text-spotify-green w-6 h-6" />
          <h3 className="text-lg font-semibold text-text-primary">
            Provide User Insights
          </h3>
        </div>
<br />
        <p className="text-text-secondary text-sm leading-relaxed">
          To present meaningful insights and emotional trends through a user-friendly interface.
          <br /><br />
          This helps users understand their mental health patterns and supports early awareness and decision-making.
        </p>
      </div>

    </div>

  </div>
</section>
      {/* ================= METHODOLOGY ================= */}
      <section className="min-h-[80vh] flex items-center justify-center text-center">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Methodology
          </h2>
        <br />
        <br />
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="flex justify-center">
              <div className="bg-card-bg border border-spotify-green p-6 rounded-xl flex items-center gap-4">
                <img
  src={domainImage2}
  alt="Mental Health Awareness"
  className="mx-auto w-full max-w-4xl rounded-2xl shadow-2xl border border-spotify-green/50 shadow-[0_0_10px_#1DB954]"
/>
              </div>
            </div>

            {/* RIGHT */}
            <ol className="text-text-secondary space-y-4">

  <li className="flex items-start gap-3">
    <Database className="w-5 h-5 text-spotify-green mt-1" />
    <span>
      <span className="font-medium text-text-primary">1. Data Collection:</span>{" "}
      Gather multimodal data including facial expressions, voice input, EEG signals, and music listening behavior.
    </span>
  </li>
<br />
  <li className="flex items-start gap-3">
    <Settings className="w-5 h-5 text-spotify-green mt-1" />
    <span>
      <span className="font-medium text-text-primary">2. Preprocessing:</span>{" "}
      Clean and normalize raw data by removing noise and preparing it for analysis.
    </span>
  </li>
<br />
  <li className="flex items-start gap-3">
    <Cpu className="w-5 h-5 text-spotify-green mt-1" />
    <span>
      <span className="font-medium text-text-primary">3. Feature Extraction:</span>{" "}
      Extract meaningful features such as facial patterns, voice tone, and EEG signals.
    </span>
  </li>
<br />
  <li className="flex items-start gap-3">
    <Brain className="w-5 h-5 text-spotify-green mt-1" />
    <span>
      <span className="font-medium text-text-primary">4. Model Training:</span>{" "}
      Train machine learning models to identify emotional and mental health patterns.
    </span>
  </li>
<br />
  <li className="flex items-start gap-3">
    <BarChart className="w-5 h-5 text-spotify-green mt-1" />
    <span>
      <span className="font-medium text-text-primary">5. Prediction:</span>{" "}
      Generate insights and detect mental health conditions in real-time.
    </span>
  </li>
<br />
</ol>

          </div>

        </div>
      </section>

{/* ================= TECHNOLOGIES ================= */}
{/* ================= TECHNOLOGIES ================= */}
<section className="min-h-[60vh] flex items-center justify-center bg-bg-primary">
  <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">

    {/* Title */}
    <h2 className="text-3xl font-semibold text-text-primary mb-16">
      Technologies Used
    </h2>
<br />
<br />
<br />
    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 justify-items-center">

      {/* Python */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiPython className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          Python
        </p>
      </div>

      {/* React */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiReact className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          React
        </p>
      </div>

      {/* TensorFlow */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiTensorflow className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          TensorFlow
        </p>
      </div>

      {/* Keras */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiKeras className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          Keras
        </p>
      </div>

      {/* MongoDB */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiMongodb className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          MongoDB
        </p>
      </div>

      {/* Google Colab */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiGooglecolab className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          Google Colab
        </p>
      </div>

      {/* JWT */}
      <div className="flex flex-col items-center gap-4 group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full 
        bg-bg-secondary border border-border-light shadow-md 
        group-hover:scale-110 group-hover:shadow-[0_0_15px_#1DB954] transition duration-300">
          <SiJsonwebtokens className="text-spotify-green text-4xl" />
        </div>
        <p className="text-text-secondary text-sm group-hover:text-spotify-green transition">
          JWT
        </p>
      </div>

    </div>

  </div>
</section>

    </div>
  );
};

export default Domain;