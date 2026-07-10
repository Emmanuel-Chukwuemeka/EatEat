import React from 'react'
import { useState, useEffect} from 'react'
import './assets/meal.css'
import Categories from './meal_components/Categories'
import Header from './meal_components/Header'
import Hero from './meal_components/Hero'
import Footer from './meal_components/Footer'

const Meal = () => {
  const [categories, setCategories] = useState([]); //categories coming from api endpoints
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <Categories categories={categories} error={error} loading={loading} />
      <Header />
      <Hero />
      <Footer />
    </div>
  )
} 

export default Meal
