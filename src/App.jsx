import './App.css'
import appPreview from './assets/images/app-preview.png'

function App() {
    return (
        <div className="app">
            <header className="navbar">
                <div className="logo">IT English</div>

                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#signup">Join</a>
                </nav>
            </header>

            <main>
                <section id="home" className="hero section">
                    <div className="hero-content">
                        <p className="eyebrow">Coming soon</p>
                        <h1>Learn practical English for real IT work.</h1>
                        <p className="hero-text">
                            A future mobile app for developers, testers and IT professionals who want to speak
                            more confidently in meetings, code reviews and interviews.
                        </p>
                        <a href="#signup" className="button">
                            Join the waitlist
                        </a>
                    </div>

                    <div className="hero-card">
                        <p className="card-label">Example lesson</p>
                        <h2>Code Review English</h2>
                        <p>
                            Instead of: <strong>“This is wrong.”</strong>
                        </p>
                        <p>
                            Try: <strong>“Could we improve this by…?”</strong>
                        </p>
                    </div>
                </section>

                <section id="features" className="section">
                    <h2>What the app will offer</h2>

                    <div className="features-grid">
                        <article className="feature-card">
                            <h3>Daily micro-lessons</h3>
                            <p>Short lessons designed for busy IT professionals.</p>
                        </article>

                        <article className="feature-card">
                            <h3>Real workplace phrases</h3>
                            <p>Useful English for standups, code reviews, meetings and interviews.</p>
                        </article>

                        <article className="feature-card">
                            <h3>Practical examples</h3>
                            <p>Learn how to sound natural, polite and professional in IT contexts.</p>
                        </article>
                    </div>
                </section>

                <section className="section media-section">
                    <div>
                        <h2>Designed for IT professionals</h2>
                        <p>
                            The app will focus on realistic communication situations, not generic textbook
                            English.
                        </p>
                    </div>

                    <img
                        className="app-preview-image"
                        src={appPreview}
                        alt="Preview of the IT English mobile app"
                    />
                </section>

                <section id="signup" className="section signup-section">
                    <h2>Join the early access list</h2>
                    <p>
                        Leave your email if you want to be notified when the app is ready.
                    </p>

                    <form
                        className="signup-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            alert('Thanks! You have joined the early access waitlist.')
                        }}
                    >
                        <label>
                            Name <span className="optional">(optional)</span>
                            <input type="text" placeholder="Your name"/>
                        </label>

                        <label>
                            Email
                            <input type="email" placeholder="you@example.com" required/>
                        </label>

                        {/* FIXED SECTION */}
                        <div className="form-group">
                            <p className="form-label">
                                I am interested in <span className="optional">(optional)</span>
                            </p>

                            <div className="multi-select">
                                <label className="checkbox-option">
                                    <input type="checkbox" value="daily"/>
                                    <span className="checkbox-text">Daily IT English app</span>
                                </label>

                                <label className="checkbox-option">
                                    <input type="checkbox" value="interviews"/>
                                    <span className="checkbox-text">English for IT interviews</span>
                                </label>

                                <label className="checkbox-option">
                                    <input type="checkbox" value="meetings"/>
                                    <span className="checkbox-text">English for meetings</span>
                                </label>

                                <label className="checkbox-option">
                                    <input type="checkbox" value="code-reviews"/>
                                    <span className="checkbox-text">English for code reviews</span>
                                </label>

                                <label className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            const input = document.getElementById('other-input')
                                            input.style.display = e.target.checked ? 'block' : 'none'
                                        }}
                                    />
                                    <span className="checkbox-text">Other</span>
                                </label>

                                <input
                                    id="other-input"
                                    type="text"
                                    placeholder="Type your interest..."
                                    className="other-input"
                                    style={{display: 'none'}}
                                />
                            </div>
                        </div>

                        <button type="submit">Join the waitlist</button>
                    </form>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 IT English App. University project landing page.</p>
            </footer>
        </div>
    )
}

export default App