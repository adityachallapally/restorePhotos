import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
import { Testimonials } from '../components/Testimonials';
import va from '@vercel/analytics';
import { format } from 'date-fns';

const Home: NextPage = () => {
  const today = format(new Date(), 'MMMM do, yyyy');

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>SVG Cake</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1704894145003741611"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Transformed over <span className="font-semibold">4,100</span> images as of {today}
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Turning images into SVGs{' '}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{' '}
          with discrete objects.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Tired of other JPEG to SVG transformers that give you messy SVGs? Try out best in class SVG transfomer. 100% free – transform your photos today.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            href="https://www.roomgpt.io/"
            target="_blank"
            rel="noreferrer"
          >
            <button onClick={() => va.track('RoomGPT link clicked')}>
              Check out some examples
            </button>
          </a>

          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/transform"
          >
            Transform your image
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Image</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/old-cactus.png"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">SVG version</h2>
                <Image
                  alt="Transformed Photo"
                  width={400}
                  height={400}
                  src="/new-cactus.png"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
