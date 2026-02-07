import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Structured Learning Path',
    description: (
      <>
        Start with fundamentals and progress through OOP, STL, memory
        management, and systems programming with a clear, guided structure.
      </>
    ),
  },
  {
    title: 'Project-Driven Examples',
    description: (
      <>
        Learn by building. Each section pairs concepts with code snippets and
        mini-projects that mirror real-world C/C++ usage.
      </>
    ),
  },
  {
    title: 'Open-Source Collaboration',
    description: (
      <>
        Join the community to improve content, add new topics, and share best
        practices for modern C/C++ development.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
