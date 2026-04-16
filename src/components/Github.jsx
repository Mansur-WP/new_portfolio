import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "Mansur-WP";

const Github = () => {
  const [stats, setStats] = useState({ repositories: 0, commits: 0, projects: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      setError(null);
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const user = await userRes.json();
        setStats({
          repositories: user.public_repos || 0,
          commits: 0,
          projects: 0,
        });
      } catch {
        setError("Could not load GitHub stats.");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="section" id="github">
      <div className="section-inner">
        <div className="sec-tag">Proof of work</div>
        <h2 className="sec-title">GitHub</h2>
        <div className="github-wrap">
          <div className="gh-left">
            <h3>My code lives here</h3>
            <p>
              Clean repos, real commits, proper READMEs. Recruiters don't
              trust screenshots — they trust code. All my projects are open
              and documented.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}/`}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile →
            </a>
          </div>
          <div className="gh-stats">
            <div className="gh-stat">
              <div className="gh-stat-n">
                {loading ? "—" : stats.repositories}
              </div>
              <div className="gh-stat-l">Repos</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-n">
                {loading ? "—" : stats.commits || "200+"}
              </div>
              <div className="gh-stat-l">Commits</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-n">
                {loading ? "—" : stats.projects || "4"}
              </div>
              <div className="gh-stat-l">Projects</div>
            </div>
          </div>
        </div>
        {error && (
          <div style={{ color: "#ef4444", marginTop: 16, fontSize: "0.9rem" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;
