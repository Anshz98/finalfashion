WardrobeWise – Discover Your Perfect Look
WardrobeWise is a fashion eCommerce platform designed to inspire, recommend, and sell curated fashion collections. This project integrates a seamless user experience with advanced functionality, combining traditional eCommerce features with modern AI-driven fashion insights.

WardrobeWise caters to diverse user needs by providing personalized outfit recommendations, a chatbot for real-time suggestions, and a dynamic inventory linked to a cart and order management system. Built with cutting-edge technologies, it delivers a smooth and responsive user experience.

Key Features
Personalized Fashion Experience:

AI-powered chatbot to recommend colors, outfits, and styling based on user preferences and trends.
Multiple fashion categories (Streetwear, Old Money, Summer, Winter) for targeted exploration.
Comprehensive Inventory Management:

All-inventory view displaying every item in stock.
Integration with the cart system to streamline the purchase process.
ECommerce Functionalities:

User authentication for secure sign-ins (Google Sign-In or standard email/password).
A fully operational cart linked to a checkout process.
Order history tracking for users.
Dynamic UI/UX:

Custom-designed layouts for homepage, shop pages, and product pages.
User-friendly navigation across collections and individual products.
Seamless Search:

A robust search functionality to quickly locate products by name or type.
Admin Features (future enhancements):

Role-based access for inventory and sales management.
Technologies Used
React.js: Component-based framework for building dynamic user interfaces.
TypeScript: Strongly-typed JavaScript for better code scalability and maintenance.
JSON Server: Lightweight RESTful API simulation for inventory management.
Redux Toolkit: Efficient and predictable state management.
Axios: Streamlined API communication for fetching and managing data.
React Router: Dynamic and flexible page navigation.
TailwindCSS: Utility-first CSS framework for a consistent and responsive design.
Firebase Authentication: Secure user authentication (Google Sign-In included).
Dialogflow: AI-powered chatbot for outfit recommendations and real-time user interaction.
Stripe/PayPal: For secure payment processing (future integration planned).
React Hot Toast: For seamless in-app notifications.
Concurrently: To manage multiple development processes.
Functionalities Implemented
Homepage:
Pinterest-style homepage with featured outfit ideas.
Categories such as Streetwear, Old Money, Summer, and Winter for quick navigation.
Shop Pages:
Dedicated pages for each category, displaying a grid of fashion items.
Dynamic filtering and sorting capabilities.
Product Pages:
Detailed view of individual products with styling suggestions.
High-quality images and additional product information.
All Inventory Page:
A dedicated view to showcase all products available in the inventory.
Link to add items to the cart directly.
Cart and Checkout:
Add/remove products in the cart with quantity controls.
Automatic calculation of subtotal, shipping, and taxes.
Checkout functionality with an order summary.
Search Page:
Search bar to locate products based on names or keywords.
AI Chatbot:
Integrated chatbot to provide outfit recommendations and personalized styling ideas.
Order History:
Track all previous orders for registered users.
User Authentication:
Login/Register using Firebase Authentication.
Access user profile and order history securely.
Installation Guide
Install Node.js and npm: Download and install Node.js and npm on your system. Node.js Download.

Clone the Repository:

bash
Copy code
git clone <repository-link>
cd wardrobe-wise
Install Dependencies:

Copy code
npm install
Run the Application:

sql
Copy code
npm start
Run the JSON Server (for inventory and data):

css
Copy code
npx json-server --watch db.json --port 5000
Future Enhancements
Integration with Stripe/PayPal for payment processing.
Role-based admin panel for inventory and order management.
Advanced AI for deeper personalization of outfit recommendations.
Real-time stock updates and notifications.
Screenshots
Homepage
A visually appealing landing page with Pinterest-style outfit inspiration.


Shop Page
Browse products by categories like Streetwear, Old Money, Summer, and Winter.


All Inventory Page
View all products in one place for quick exploration.


Product Detail Page
Detailed view of individual products with styling suggestions.


Cart and Checkout
Fully functional cart and order placement system.


AI Chatbot
Real-time styling suggestions using Dialogflow.


Team Contributions
Frontend Development: Pinterest-style homepage, category pages, and cart.
Backend and APIs: JSON Server and Redux Toolkit for seamless state management.
Authentication: Firebase integration for secure login and registration.
AI Integration: Dialogflow-powered chatbot for real-time assistance.
Acknowledgments
Special thanks to the resources and tutorials that helped shape this project, including TailwindCSS, React.js community, and Dialogflow.

Feel free to adjust or refine based on your specific needs!
