import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import RecipeDetails from "./pages/recipeDetails/RecipeDetails";
import AllRecipes from "./pages/allRecipes/AllRecipes";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import AddRecipe from "./pages/createRecipe/AddRecipe";

function App(): JSX.Element {
  return (
    <>
      <Router>
          <NavBar/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AllRecipes />} path="/allRecipes" />
          <Route element={<RecipeDetails />} path="/recipeDetails/:id" />
          <Route element={<RecipeDetails />} path="allRecipes/recipeDetails/:id" />
          <Route element={<AddRecipe />} path="/createRecipe" />
          {/* <Route element={<Error />} path="*" /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
