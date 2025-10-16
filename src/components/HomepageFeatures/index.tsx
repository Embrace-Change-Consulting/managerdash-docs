import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "One place for all your notes",
    Svg: require("@site/static/img/consolidation.svg").default,
    description: (
      <>
        It helps you track commitments, resourcing, and capture feedback—all in
        one place.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus.svg").default,
    description: (
      <>
        With all local storage, ManagerDash keeps your data safe, and keeps you
        focused on what matters most: helping your team thrive.
      </>
    ),
  },
  {
    title: "Export when you need it",
    Svg: require("@site/static/img/report.svg").default,
    description: (
      <>
        Export your data in markdown for quarterly check-ins and performance
        reviews.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
