import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList';

function App() {
  const state = useSelector((state) => ({ ...state }));
  console.log(state);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;


// const mapStateToPros = state => {
//   return {
//     count: state
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
//     handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
//   }
// };
// export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
