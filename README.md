# REACT project
## Using props
### Adding props to components and accessing them

Props can be added to components like this:

(in RecipeApp.js)

```
class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe title="pasta" />
      </div>
    );
  }
}
```

and used when constructing the component like this:
(in Recipe.js)
```
class Recipe extends Component {
    render() {
        const {title} = this.props;
        return (
            <div>Recipe {title}</div>
        );
    }
}
export default Recipe;
```

## Using JS deconstructor {} syntax and arrow functions:

like so:

```
render() {
        const {title} = this.props; -> if this.props has a title attribute, take it
        const ingredients = this.props.ingredients.map((ing, index) => ( -> in arrow notation no need to use "return" with regular brackets
            <li key={index}>{ing}</li>
        ));
``` 

## defaultProps and propTypes

### defaultProps - provides props for a component when a user does not provide those props. Without defaults we would have an error. 

Within the class definition:

```
class App extends Component {
  static defaultProps = {
    recipes: [{
      title: "Spaghetti",
      ingredients: ["flour", "water"],
      instructions: "Mix ingredients",
      img: "spaghetti.img"
    }]
  }
  render() {
    return (
      <div>
      
      {this.props.recipes.map(r, index) => (  
        <Recipe key={index} title={r.title} ingredients={r.ingredients} img={r.img} instructions= {r.instructions}/>
      )}

      OR

      {this.props.recipes.map(r, index) => (
        <Recipe key={index} {...r} />
      )}

      </div>
    )
  }
}
```

OR

After the class is defined, we can say:

```
IngredientList.defaultProps = {
  ingredients: [];
}
``` 

### propTypes - development time type checker for props

Installation: npm install --save prop-types

Use:

```
import PropTypes from 'prop-types';

class IngredientList extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired

  ---> in development, we will have a warning in the console if array of strings not provided

  }
}
```
