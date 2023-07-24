# Namaste React

# Parcel

<!-- execute(npx) the parcel command (which is responsible for making the build) -->

- npx parcel index.html
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - gives Faster Builds
- Image Optimization
- Minification of files
- Core job - It bundles
- Compress the files
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostics - of error
- Error Handling
- Tree Shaking - remove unused code
- Different bundles for dev and prod

# FOOD DELIVERY APP

<!-- // - Header
// - Logo
// - NavBar

// - Body
// Search
// Restaurant Container
// - Restaurant Card
// - Image
// - Name
// - Rating
// - Address
//  - Footer -->

# Episode 5

- lets get hooked - learnt about useState, and on every state change the UI rerenders
- Reconciliation, react fiber(algorithm), diff algorithm

# Episode 6

- Added Shimmer UI
- Added Search functionality (used onChange on input)
- Used another state variable (searchedResults) for search functionality

# Episode 7

- Added react-router-dom and created routing using "createBrowserRouter"
- Used <RouterProvider /> component and added "appRouter" object as router to it
- Used <Error /> component to show any error, used "useRouteError()" hook inside for the same
- added children array inside "approuter" and added <Outlet /> component inside <AppLayout />
- added <Link> </Link> in Header component for navigation
- above is static routing
- ---------Below Dynamic Routing, we will make dynamic routes for every restaurant
- Added "/restaurant/:id" for particular restaurant in appRouter
- Added <RestaurantPage /> component which shows Retaurant details(name,menu etc)

# Episode 8

- Created <UserClass /> class component
- First constructor runs, then the render method and the componentDidMount is execute
- etc.

# Episode 9

- Custom hooks
- Lazy loading/Code Splitting/Dynamic Import/Chunking/Dynamic Bundling/On demand loading - all are same

# Episode 10

- Added tailwing and postcss
- configured tailwind and .potcssrc

# Episode 11

- Used Higher Order Component to show "Promoted" restaurants
- HOC takes a component, add some functionalities to it and return the same
- Controlled/Uncontrolled Component
- Lifting the state up (lifted showItems state from RestaurantCategory to RestaurantPage)
- Part 04 (props drilling, context is one of the way to solve problem of props drilling)
- Created UserContext, added in Header and About component