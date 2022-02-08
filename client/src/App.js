import './App.css';
import Home from './Home';
import Button from './ui-kit/Button';
import Select from './ui-kit/Select';

function App() {
  return (
    <div>
      <Home />
      <Button value="Add to cart" />
      <Select>
        <Select.Option value="1">First</Select.Option>
        <Select.Option value="2" checked>First</Select.Option>
        <Select.Option value="3" disabled>First</Select.Option>
      </Select>
    </div>
  );
}

export default App;
