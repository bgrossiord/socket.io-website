import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from "../components/HomepageHeader";
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSponsors from "../components/HomepageSponsors";

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSponsors />
      </main>
    </Layout>
  );
}
