import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "Mansur-WP";

const Github = () => {
  const [repos, setRepos] = useState(52);
  const [loading] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        if (userRes.ok) {
          const user = await userRes.json();
          if (user.public_repos) {
            setRepos(user.public_repos);
          }
        }
      } catch {
        // Gracefully keep honest fallback
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="section github-section dark-section" id="github">
      <div className="section-inner">
        <div className="github-layout">
          <div className="github-text-col">
            <div className="sec-tag sec-tag-light">
              <span className="sec-tag-dot"></span> PROOF OF WORK
            </div>
            <h2 className="sec-title sec-title-light">GitHub</h2>
            <h3 className="github-subtitle">My code lives here</h3>
            <p className="github-desc">
              Clean repos, real commits, proper READMEs. Recruiters don't
              trust screenshots — they trust code. All my projects are open
              and documented.
            </p>
            <div className="github-cta-wrap">
              <a
                href={`https://github.com/${GITHUB_USERNAME}/`}
                className="btn btn-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile →
              </a>
            </div>
          </div>

          <div className="github-stats-row">
            <div className="gh-stat-card">
              <div className="gh-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
              <div className="gh-stat-number">{loading ? "—" : repos}</div>
              <div className="gh-stat-label">REPOS</div>
            </div>

            <div className="gh-stat-card">
              <div className="gh-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" x2="6" y1="3" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              </div>
              <div className="gh-stat-number">200+</div>
              <div className="gh-stat-label">COMMITS</div>
            </div>

            <div className="gh-stat-card">
              <div className="gh-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="gh-stat-number">6+</div>
              <div className="gh-stat-label">PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
