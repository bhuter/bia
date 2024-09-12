"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Preloader from '../comps/forms/Preloader';
import Category from '../comps/product/category';

const ContentWithPreloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Start fetching data from an API (you can replace this URL with your actual API endpoint)
        const response = await fetch('../comps/product/category');
        const data = await response.json();

        // Set the categories state once the data is ready
        setCategories(data);
        
        // Stop the preloader once data is fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false); // Stop loading in case of an error
      }
    };

    // Call the function to fetch data
    fetchCategories();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="pt-10">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <h1 className="text-3xl font-semibold ">Best choices</h1>
          <div>
            {categories.length > 0 ? (
              <>
                <Category />
                <div className="open flex justify-end px-9">
                  <Link href="" className="bg-blue-200 px-7 py-2"> See All</Link>
                </div>
              </>
            ) : (
              <p>No categories available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ContentWithPreloader;
