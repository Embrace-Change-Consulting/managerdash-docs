import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './downloads.module.css';

const CURRENT_VERSION = "1.3.0"

interface AppImage {
  title: string;
  description: string;
  src: string;
  category: string;
  link?: string;
}

const appImages: AppImage[] = [
  {
    title: 'Team Dashboard - Dark Mode',
    description: 'View your team overview in dark mode',
    src: '/img/app_img/team_dashboard_dark.png',
    category: 'Dashboard',
    link: '/docs/teams_and_people#team-dashboard',
  },
  {
    title: 'Team Dashboard - Light Mode',
    description: 'View your team overview in light mode',
    src: '/img/app_img/team_dashboard_light.png',
    category: 'Dashboard',
    link: '/docs/teams_and_people#team-dashboard',
  },
  {
    title: 'Alias Dashboard',
    description: 'Individual contributor dashboard',
    src: '/img/app_img/alias_dashboard_light.png',
    category: 'Dashboard',
    link: '/docs/teams_and_people#individual-dashboard',
  },
  {
    title: 'Goals & Milestones',
    description: 'Track and manage team goals',
    src: '/img/app_img/alias_goals_light.png',
    category: 'Features',
    link: '/docs/goals-and-milestones',
  },
  {
    title: 'Skills Assessment',
    description: 'Evaluate and track skill development',
    src: '/img/app_img/alias_skills_assessment_light.png',
    category: 'Features',
    link: '/docs/assessing-skills',
  },
  {
    title: 'Team Skills Overview',
    description: 'View team-wide skills matrix',
    src: '/img/app_img/team_skills_light.png',
    category: 'Features',
    link: '/docs/assessing-skills#team-skills-view',
  },
  {
    title: 'PR Review Dashboard',
    description: 'Monitor pull request reviews',
    src: '/img/app_img/alias_pr_review_light.png',
    category: 'Features',
    link: '/docs/pr_review',
  },
  {
    title: 'Feedback Management',
    description: 'Provide and track feedback',
    src: '/img/app_img/alias_feedback_light.png',
    category: 'Features',
    link: '/docs/feedback',
  },
  {
    title: 'Individual Reports',
    description: 'Generate detailed individual reports',
    src: '/img/app_img/alias_report_light.png',
    category: 'Reports',
    link: '/docs/reports#generating-individual-reports',
  },
  {
    title: 'Team Reports',
    description: 'Generate comprehensive team reports',
    src: '/img/app_img/team_report_light.png',
    category: 'Reports',
    link: '/docs/reports#team-reports',
  },
];

function ImageCard({image}: {image: AppImage}): ReactNode {
  const imageSrc = useBaseUrl(image.src);
  const imageLink = image.link ? useBaseUrl(image.link) : undefined;
  
  const imageContent = (
    <>
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={image.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.imageInfo}>
        <h3 className={styles.imageTitle}>{image.title}</h3>
        <p className={styles.imageDescription}>{image.description}</p>
        <span className={styles.categoryBadge}>{image.category}</span>
      </div>
    </>
  );
  
  if (imageLink) {
    return (
      <a href={imageLink} className={styles.imageCard}>
        {imageContent}
      </a>
    );
  }
  
  return (
    <div className={styles.imageCard}>
      {imageContent}
    </div>
  );
}

function CategorySection({category, images}: {category: string; images: AppImage[]}): ReactNode {
  return (
    <section className={styles.categorySection}>
      <Heading as="h2" className={styles.categoryHeading}>
        {category}
      </Heading>
      <div className={styles.imageGrid}>
        {images.map((image, idx) => (
          <ImageCard key={idx} image={image} />
        ))}
      </div>
    </section>
  );
}

export default function Downloads(): ReactNode {
  // Group images by category
  const imagesByCategory = appImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {} as Record<string, AppImage[]>);

  const heroImageSrc = useBaseUrl('/img/app_img/team_skills_light.png');
  const dmgUrl = `https://managerdash-releases.s3.us-east-1.amazonaws.com/releases/${CURRENT_VERSION}/ManagerDash-mac-${CURRENT_VERSION}.dmg`;
  const zipUrl = `https://managerdash-releases.s3.us-east-1.amazonaws.com/releases/${CURRENT_VERSION}/ManagerDash-mac-${CURRENT_VERSION}.zip`;

  return (
    <Layout title="Downloads" description="Download ManagerDash for macOS">
      <div className={styles.downloadsPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <Heading as="h1" className={styles.heroTitle}>
                  Download the latest
                </Heading>
                <p className={styles.heroDescription}>
                  Get the latest version of ManagerDash for macOS and start
                  managing your team more effectively.
                </p>
                <div className={styles.downloadButtons}>
                  <a
                    href={dmgUrl}
                    className={styles.primaryDownloadButton}
                    download
                  >
                    Download DMG v{CURRENT_VERSION}
                  </a>
                  <a
                    href={zipUrl}
                    className={styles.secondaryDownloadLink}
                    download
                  >
                    Download ZIP v{CURRENT_VERSION} instead
                  </a>
                </div>
              </div>
              <div className={styles.heroImage}>
                <img
                  src={heroImageSrc}
                  alt="ManagerDash Team Skills Overview"
                  className={styles.heroImageImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <header className={styles.pageHeader}>
          <div className="container">
            <Heading as="h2" className={styles.pageTitle}>
              Feature Gallery
            </Heading>
          </div>
        </header>
        <main className="container">
          <div className={styles.contentWrapper}>
            {Object.entries(imagesByCategory).map(([category, images]) => (
              <CategorySection
                key={category}
                category={category}
                images={images}
              />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
