import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Featured Listings</h1>
        <Card
          title="Cozy Apartment"
          imageSrc="/assets/placeholder.jpg"
          description="A beautiful apartment in the heart of the city."
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert('Booked!')} />
        </div>
      </main>
    </>
  );
};

export default Home;
