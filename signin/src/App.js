import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='logo'></div>
      <h1 className='title'>TechZone</h1>
      <h1 className='login'>SignIn</h1>
      <input className='text' type="text" placeholder="Username" name="" />
      <input className='text' type="password" placeholder="Password" name="" />
      <input className='rem' type="checkbox" name="remember" /> Remember me
      <input className='btn' type="button" name="" value="Sign In" />
      <div className='link'>
        <a href="#">Forgot Password?</a> or <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default App;
