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

