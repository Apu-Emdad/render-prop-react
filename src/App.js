import "./styles.css";

export default function App() {
  const Parent = ({ name }) => {
    // Parent component logic and state
    return (
      <div>
        {/* Parent component JSX */}
        <h1>Welcome, {name}!</h1>
        {/* Render Children component */}
        {name && (
          <Children>
            {(props) => <p>Some child content for {props.name}</p>}
          </Children>
        )}
      </div>
    );
  };

  const Children = ({ children }) => {
    // Children component logic and state

    return (
      <div>
        {/* Children component JSX */}
        <h2>Children Component</h2>
        {/* Render children as function */}
        {children({ name: "John" })}
      </div>
    );
  };

  const MyComponent = () => {
    const name = "John Doe";

    return (
      <Parent name={name}>
        {({ name }) => (
          <Children>
            {/* Children component JSX within Parent component */}
            <p>Some child content for {name}</p>
          </Children>
        )}
      </Parent>
    );
  };

  return <MyComponent />;
}
