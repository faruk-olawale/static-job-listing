import { useState } from 'react';

const JobList = ({ job, addToFilters }) => {
  const [imageError, setImageError] = useState(false);

  const getCompanyLogo = () => {
    if (imageError || !job.company_logo) {
      return (
        <div className="logo-placeholder">
          {job.company?.charAt(0) || 'C'}
        </div>
      );
    }
    return (
      <img 
        src={job.company_logo} 
        alt={job.company}
        className="company-logo"
        onError={() => setImageError(true)}
      />
    );
  };

  const formatSalary = () => {
    if (job.salary_min && job.salary_max) {
      return `$${job.salary_min.toLocaleString()} - $${job.salary_max.toLocaleString()}`;
    }
    return null;
  };

  const getTimeAgo = () => {
    if (!job.epoch) return 'Recently';
    const now = Math.floor(Date.now() / 1000);
    const diff = now - job.epoch;
    const days = Math.floor(diff / (24 * 60 * 60));
    
    if (days === 0) return 'Today';
    if (days === 1) return '1d ago';
    if (days < 7) return `${days}d ago`;
    
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks}w ago`;
    
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  };

  const isNew = job.epoch ? (Math.floor(Date.now() / 1000) - job.epoch) < (3 * 24 * 60 * 60) : false;

  return (
    <article className={`job-card ${job.featured ? 'featured-border' : ''}`}>
      <div className="job-main">
        {getCompanyLogo()}
        <div className="job-details">
          <div className="company-info">
            <span className="company-name">{job.company}</span>
            {isNew && <span className="badge badge-new">New!</span>}
            {job.featured && <span className="badge badge-featured">Featured</span>}
            {job.verified && <span className="badge badge-verified">✓ Verified</span>}
          </div>
          
          <h2 className="position-title">{job.position}</h2>
          
          <div className="job-meta">
            <span>{getTimeAgo()}</span>
            {job.location && (
              <>
                <span className="separator">•</span>
                <span>📍 {job.location}</span>
              </>
            )}
            {formatSalary() && (
              <>
                <span className="separator">•</span>
                <span className="salary">💰 {formatSalary()}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="job-tags">
        {job.tags && job.tags.slice(0, 10).map((tag, index) => (
          <button 
            key={index} 
            className="tag-btn"
            onClick={() => addToFilters({ type: 'tag', value: tag })}
          >
            {tag}
          </button>
        ))}
        
        {job.apply_url && (
          <a 
            href={job.apply_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="apply-btn"
          >
            Apply Now →
          </a>
        )}
      </div>
    </article>
  );
};

export default JobList;