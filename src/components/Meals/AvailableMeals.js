import '../Meals/AvailableMeals-module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chole Bhature',
      description: 'combination of chana masala (spicy white chickpeas) and bhatura/puri i.e a deep-fried bread made from maida',
      price: 25.99,
    },
    {
      id: 'm2',
      name: 'Dal Bati Churma',
      description: 'dal is lentils, bati is a baked wheat ball, and churma is powdered sweetened cereal.',
      price: 32.00,
    },
    {
      id: 'm3',
      name: 'Fried Rice with gravy',
      description: 'a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with vegies served with gravy made with panner, green onion, capsicum and soy sauce, with a bit of salt, sugar, and sesame oil.',
      price: 38.99,
    },
    {
      id: 'm4',
      name: 'Salad',
      description: 'Healthy... and green...',
      price: 8.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}/>
    );

    return (
      <section className='meals'>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
    );

};

export default AvailableMeals;