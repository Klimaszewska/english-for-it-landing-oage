import './App.css'
import appPreview from './assets/images/app-preview.png'

function App() {
    return (
        <div className="app">
            <header className="navbar">
                <div className="logo">Daily IT English</div>

                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Zawartość</a>
                    <a href="#gallery">Galeria</a>
                    <a href="#contact">Kontakt</a>
                    <a href="#signup">Dołącz</a>
                </nav>
            </header>

            <main>
                <section id="home" className="hero section">
                    <div className="hero-content">
                        <p className="eyebrow">Już wkrótce</p>
                        <h1>Aplikacja z codzienną dawką angielskiego dla IT</h1>
                        <p className="hero-text">
                            Już wkrótce - aplikacja mobilna dla programistów, testerów i specjalistów IT,
                            którzy chcą mówić pewniej podczas spotkań, code review i rozmów rekrutacyjnych.
                        </p>
                        <a href="#signup" className="button">
                            Dołącz do listy oczekujących
                        </a>
                    </div>

                    <div className="hero-card">
                        <p className="card-label">Przykładowa fiszka</p>
                        <h2>I ran into an issue with...</h2>
                        <p>Tłumaczenie: <strong>„Natrafiłem na problem z...”</strong></p>
                        <p>Przykład: <strong>„I ran into an issue with database performance”</strong></p>
                        <p>Tip: Brzmi bardzo <strong>naturalnie</strong> — to zwrot często używany przez native’ów.</p>
                    </div>
                </section>

                <section id="features" className="section">
                    <h2>Co znajdziesz w aplikacji</h2>

                    <div className="features-grid">
                        <article className="feature-card">
                            <h3>Codzienne mikrolekcje</h3>
                            <p>Krótkie, konkretne lekcje dopasowane do tempa pracy w IT.</p>
                        </article>

                        <article className="feature-card">
                            <h3>Prawdziwy język z pracy</h3>
                            <p>Zwroty używane na stand-upach, w code review, na spotkaniach i rozmowach.</p>
                        </article>

                        <article className="feature-card">
                            <h3>Praktyczne przykłady</h3>
                            <p>Ucz się mówić naturalnie, profesjonalnie i bez stresu.</p>
                        </article>
                    </div>
                </section>

                <section className="section media-section">
                    <div>
                        <h2>Stworzona z myślą o pracy w IT</h2>
                        <p>
                            Skupiamy się na realnych sytuacjach zawodowych — bez sztucznego, podręcznikowego języka.
                        </p>
                    </div>

                    <img
                        className="app-preview-image"
                        src={appPreview}
                        alt="Podgląd aplikacji IT English"
                    />
                </section>

                <section id="gallery" className="section gallery-section">
                    <div className="section-heading">
                        <p className="eyebrow">Galeria</p>
                        <h2>Podgląd koncepcji aplikacji</h2>
                        <p>
                            Zobacz, jak będzie wyglądać nauka angielskiego z aplikacją Daily IT English.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <article className="gallery-card">
                            <img src={appPreview} alt="Podgląd aplikacji mobilnej" />
                            <h3>Fiszki</h3>
                            <p>Krótkie lekcje, które zrobisz w kilka minut dziennie.</p>
                        </article>

                        <article className="gallery-card">
                            <img src={appPreview} alt="Podgląd lekcji" />
                            <h3>Praktyczne zwroty</h3>
                            <p>Gotowe zdania do użycia w pracy i rozmowach technicznych.</p>
                        </article>

                        <article className="gallery-card">
                            <img src={appPreview} alt="Codzienna lekcja" />
                            <h3>Codzienny progres</h3>
                            <p>Spokojne, systematyczne budowanie pewności językowej.</p>
                        </article>
                    </div>

                    <div className="video-card">
                        <div>
                            <p>Wolisz słuchać zamiast czytać opisy? Świetnie się składa bo...</p>
                            <h3>Mamy przewodnik wideo po aplikacji!</h3>
                        </div>

                        <video controls>
                            <source
                                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                                type="video/mp4"
                            />
                            Twoja przeglądarka nie obsługuje wideo.
                        </video>
                    </div>
                </section>

                <section id="signup" className="section signup-section">
                    <h2>Dołącz do listy oczekujących</h2>
                    <p>
                        Zostaw swój e-mail i jako pierwszy dowiedz się o premierze aplikacji.
                    </p>

                    <form
                        className="signup-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            alert('Dzięki! Zostałeś dodany do listy oczekujących.')
                        }}
                    >
                        <label>
                            Imię <span className="optional">(opcjonalnie)</span>
                            <input type="text" placeholder="Twoje imię" />
                        </label>

                        <label>
                            E-mail
                            <input type="email" placeholder="twoj@email.com" required />
                        </label>

                        <div className="form-group">
                            <p className="form-label">
                                Interesuje mnie <span className="optional">(opcjonalnie)</span>
                            </p>

                            <div className="multi-select">
                                <label className="checkbox-option">
                                    <input type="checkbox" value="daily" />
                                    <span className="checkbox-text">Codzienny angielski IT</span>
                                </label>

                                <label className="checkbox-option">
                                    <input type="checkbox" value="interviews" />
                                    <span className="checkbox-text">Angielski na rozmowy rekrutacyjne</span>
                                </label>

                                <label className="checkbox-option">
                                    <input type="checkbox" value="meetings" />
                                    <span className="checkbox-text">Angielski na spotkania</span>
                                </label>

                                <label className="checkbox-option">
                                    <input type="checkbox" value="code-reviews" />
                                    <span className="checkbox-text">Angielski do code review</span>
                                </label>
                            </div>
                        </div>

                        <button type="submit">Dołącz do listy</button>
                    </form>
                </section>

            </main>

            <footer className="footer">
                <p>2026 JKS Apps – Justyna Klimaszewska-Stępniewska</p>
            </footer>
        </div>
    )
}

export default App