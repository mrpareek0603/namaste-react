import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  componentDidMount(){
    console.log('component did mount');
  }

  render() {
    const { name, location } = this.props;
    const { count1 } = this.state;
    console.log(count1);
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <p>{count1}</p>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default UserClass;
