import { useEffect, useRef } from 'react'
import './index.css'

const ParallaxSection = ({ bgImage, children, className = '' }) => {
    return (
        <div
            className={`parallax-section ${className}`}
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
        >
            <div className="parallax-overlay" />
            <div className="parallax-content container">
                {children}
            </div>
        </div>
    )
}

const PosterGallery = () => {
    return (
        <section className="poster-gallery">
            <div className="gallery-track">
                <div className="gallery-item">
                    <img src="/assets/poster-1.png" alt="Annamalai Poster" />
                </div>
                <div className="gallery-text">
                    <h3>The Legacy</h3>
                    <p>Defining a Generation</p>
                </div>
                {/* Placeholders for future assets */}
                <div className="gallery-item">
                    <img src="/assets/poster-2.png" alt="Iconic Silhouette" />
                </div>
                <div className="gallery-text">
                    <h3>The Icon</h3>
                    <p>A Style Beyond Time</p>
                </div>
            </div>
        </section>
    )
}

function App() {
    const packages = [
        {
            name: 'Gold Sponsor',
            tier: 'gold',
            price: 'LKR 450,000',
            badge: 'Best Value',
            icon: '🏆',
            features: [
                'Two 30-Second slots (1 Pre-Movie & 1 Post-Interval)',
                'Logo featured prominently in all promotional materials',
                'FREE Theatrical Ad Creation included (Value: LKR 75,000)'
            ]
        },
        {
            name: 'Silver Sponsor',
            tier: 'silver',
            price: 'LKR 300,000',
            icon: '🥈',
            features: [
                'One 30-Second slot (Pre-Movie OR Post-Interval)',
                'One 15-Second slot (Pre-Movie OR Post-Interval)',
                'Logo featured in all promotional materials'
            ]
        },
        {
            name: 'Bronze Sponsor',
            tier: 'bronze',
            price: 'LKR 200,000',
            icon: '🥉',
            features: [
                'Two 15-Second slots (1 Pre-Movie & 1 Post-Interval)',
                'Logo featured in all promotional materials'
            ]
        },
        {
            name: 'Basic Sponsor',
            tier: 'basic',
            price: 'LKR 125,000',
            icon: '📺',
            features: [
                'One 15-Second slot (Pre-Movie OR Post-Interval)'
            ]
        },

    ]

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <img src="/assets/ravana-logo.png" alt="Ravana Industries" className="navbar-logo" />
                <ul className="navbar-links">
                    <li><a href="#about">The Event</a></li>
                    <li><a href="#gallery">Legacy</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#why">Why Partner</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact" className="navbar-cta">Become a Partner</a>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="hero">
                <span className="hero-badge animate-on-scroll">
                    🎬 Re - Release in 4K Dolby Atmos • 15 Theatres Island-Wide
                </span>
                <h1 className="hero-title animate-on-scroll">Annamalai</h1>
                <p className="hero-subtitle animate-on-scroll">Celebrating 50 Years of Superstar Rajinikanth</p>
                <p className="hero-tagline animate-on-scroll">
                    Most of premiere profits go toward flood relief and education for displaced children.
                </p>
                <a href="#packages" className="hero-cta animate-on-scroll">
                    View Sponsorship Packages →
                </a>
            </section>

            {/* The Event (Visual 1) */}
            <ParallaxSection bgImage="/assets/hero-bg.png" className="section-dark">
                <div className="content-box animate-on-scroll">
                    <h2 className="section-title">The Legend Returns</h2>
                    <p className="section-text">
                        <em>"Annamalai"</em> is not just a film; it is an <em>emotion</em>. With its rags-to-riches storyline and iconic musical score, it defined a generation. Now, it returns to the big screen to celebrate the <em>Golden Jubilee</em> of the Superstar.
                    </p>
                </div>
            </ParallaxSection>

            {/* About Grid */}
            <section className="section about" id="about">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Cinema for Change</h2>
                    <div className="about-grid">
                        <div className="about-card animate-on-scroll">
                            <div className="about-card-icon">🎭</div>
                            <h3 className="about-card-title">Nostalgia</h3>
                            <p className="about-card-text">
                                The 50th-year celebration guarantees "Housefull" shows and an electric atmosphere in 15 premier theatres.
                            </p>
                        </div>
                        <div className="about-card animate-on-scroll">
                            <div className="about-card-icon">💚</div>
                            <h3 className="about-card-title">Philanthropy</h3>
                            <p className="about-card-text">
                                Profits from Premire shows fund educational supplies and structural repairs for flood-affected schools.
                            </p>
                        </div>
                        <div className="about-card animate-on-scroll">
                            <div className="about-card-icon">🤝</div>
                            <h3 className="about-card-title">Partnership</h3>
                            <p className="about-card-text">
                                Your brand, alongside a beloved icon, supporting a vital humanitarian cause.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Poster Gallery */}
            <div id="gallery">
                <PosterGallery />
            </div>

            {/* Sponsorship Packages */}
            <section className="section packages" id="packages">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Sponsorship Opportunities</h2>
                    <div className="packages-grid">
                        {packages.map((pkg, index) => (
                            <div key={pkg.tier} className={`package-card ${pkg.tier} animate-on-scroll`}>
                                {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
                                <div className="package-icon">{pkg.icon}</div>
                                <h3 className="package-name">{pkg.name}</h3>
                                <div className="package-price">{pkg.price}</div>
                                <ul className="package-features">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <a href="#contact" className="package-cta">Select Package</a>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '40px', color: 'var(--color-text-muted)' }}>
                        <strong>Additional Service:</strong> Theatrical Ad Creation – LKR 75,000 (FREE for Gold Sponsors)
                    </p>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="section why-partner" id="why">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Why Partner With Us?</h2>
                    <p className="section-subtitle animate-on-scroll">
                        Your brand deserves more than just visibility — it deserves impact
                    </p>
                    <div className="benefits-grid">
                        <div className="benefit-card animate-on-scroll">
                            <div className="benefit-icon">👁️</div>
                            <h3 className="benefit-title">Guaranteed Eyeballs</h3>
                            <p className="benefit-text">
                                With the 50th-anniversary hype, expect <strong>packed theatres daily</strong>. Your ad plays to a captive, emotionally-engaged audience of <strong>thousands</strong>.
                            </p>
                        </div>
                        <div className="benefit-card animate-on-scroll">
                            <div className="benefit-icon">❤️</div>
                            <h3 className="benefit-title">Brand + Purpose</h3>
                            <p className="benefit-text">
                                Be recognized as a <strong>"Partner in Rebuilding"</strong>. Your sponsorship directly funds education for flood-affected children — a story worth sharing.
                            </p>
                        </div>
                        <div className="benefit-card animate-on-scroll">
                            <div className="benefit-icon">🔄</div>
                            <h3 className="benefit-title">Priority for 2026</h3>
                            <p className="benefit-text">
                                Ravana Industries holds <strong>full year screening rights</strong>. Early partners get <strong>first dibs</strong> on future re-runs throughout Sri Lanka.
                            </p>
                        </div>
                        <div className="benefit-card animate-on-scroll">
                            <div className="benefit-icon">🎬</div>
                            <h3 className="benefit-title">Empty window till 9th of January</h3>
                            <p className="benefit-text">
                                There are no movies <strong>coming until the 9th of January</strong> creating a perfect window.
                            </p>
                        </div>
                        <div className="benefit-card animate-on-scroll">
                            <div className="benefit-icon">🎤</div>
                            <h3 className="benefit-title">Premiere Recognition</h3>
                            <p className="benefit-text">
                                Top sponsors get <strong>on-stage acknowledgment</strong> at the December 24th premiere event — in front of VIPs, media, and Rajini fans.
                            </p>
                        </div>
                        <div className="benefit-card animate-on-scroll">
                            <div className="benefit-icon">📱</div>
                            <h3 className="benefit-title">Social Amplification</h3>
                            <p className="benefit-text">
                                Your brand featured across <strong>Ravana Industries' social channels</strong> — reaching the passionate Rajinikanth fan community online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner (Visual 2) */}
            <ParallaxSection bgImage="/assets/crowd-bg.png" className="section-dark">
                <div className="content-box animate-on-scroll">
                    <h2 className="section-title">Maximum Visibility</h2>
                    <p className="section-text">
                        Engage with <em>thousands of viewers</em> daily. Create a powerful <em>emotional connection</em> by <em>"Rebuilding with Rajini"</em>.
                    </p>
                </div>
            </ParallaxSection>

            {/* Contact Section */}
            <section className="section contact" id="contact">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Secure Your Space</h2>
                    <div className="contact-content animate-on-scroll">
                        <div className="contact-note">
                            ⚡ Limited Slots Available. First come, first served.
                        </div>
                        <div className="contact-person">
                            <h3 className="contact-person-name">Mahizhnan SR</h3>
                            <p className="contact-person-title">Manager - Strategic Partnerships</p>
                            <a href="tel:+94703722275" className="contact-phone">📞 +94 70 372 2275</a>
                        </div>
                        <a href="mailto:partnerships@ravanaindustries.com?subject=Sponsorship%20Inquiry" className="contact-cta">
                            Contact Us Now →
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <img src="/assets/ravana-logo.png" alt="Ravana Industries" className="footer-logo" />
                <p className="footer-text">© {new Date().getFullYear()} Ravana Industries</p>
                <p className="footer-address">No 10/30/1/1, Pamankada Lane, Wellawatta, Colombo 06</p>
            </footer>
        </>
    )
}

export default App
