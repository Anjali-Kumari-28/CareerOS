import "./Home.css";
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Career With CareerOS</h1>

          <p>
            One platform for jobs, skills, resumes, applications,
            and placement opportunities.
          </p>

          <div className="hero-buttons">
            <button>Get Started</button>
            <button>Explore Jobs</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why CareerOS?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>🎓 For Students</h3>
            <p>
              Build your profile, manage your resume,
              find jobs and track applications.
            </p>
          </div>

          <div className="feature-card">
            <h3>🏢 For Recruiters</h3>
            <p>
              Post jobs, discover candidates and
              manage applications easily.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Resume Analysis</h3>
            <p>
              Analyze your resume and identify
              important skills and skill gaps.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Placement Analytics</h3>
            <p>
              Track applications, interviews and
              placement statistics.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How CareerOS Works</h2>

        <div className="steps">
          <div>
            <span>1</span>
            <h3>Create Profile</h3>
            <p>Add your education, skills and projects.</p>
          </div>

          <div>
            <span>2</span>
            <h3>Find Opportunities</h3>
            <p>Search and apply for suitable jobs.</p>
          </div>

          <div>
            <span>3</span>
            <h3>Get Hired</h3>
            <p>Track applications and prepare for interviews.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;