# React Loops and Props

## Learning Objectives
- [More ES6 (Destructuring, Rest Parameters and Spread Operator)](./more-es6.md)
- [Use javascript within our JSX](#js)
- [Add methods to our react components](#methods)
- [Loop through data to render JSX](#loop)
- [Pass data to other components using props](#props)
- [Use functional components when appropriate](#functional)

## <a name="js"></a>Use javascript within our JSX
To use javascript in our JSX we put it in curly braces `{}`

```js
<p>{ 5+1 }</p>
```

## <a name="methods"></a>Add methods to our react components
We can add methods to our components in the same way we would to any class. We can then call that method in our JSX  by using curly braces `{}` and the key word `this`

```js
class App extends Component {
  sayHi(person){
    return `Hi ${person}`
  }
  render(){
    return(
      <p>{this.sayHi('Trevor')}</p>
    )
  }
}
```

## <a name="loop"></a>Loop through data to render JSX
Create a method that will `map` through our data. We can then return from that map callback JSX for each of the elements. Then within our render function we call that method to render the elements we created.

```js
class App extends Component {
  sayHi(person){
    return `Hi ${person}`
  }

  sayHiToTeachers(){
    const teachers = ['Trevor', 'Ghadeer', 'Jackie'];
    const teacherElements = teachers.map((teacher)=> {
      return(
        <p>{this.sayHi(teacher)}</p>
      )
    })
    return teacherElements
  }
  render(){
    return(
      <div>
        {this.sayHiToTeachers()}
      </div>
    )
  }
}
```

## <a name="props"></a>Pass data to other components using props

## <a name="functional"></a>Use functional components when appropriate
