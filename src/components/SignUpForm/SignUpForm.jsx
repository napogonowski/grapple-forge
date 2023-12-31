import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="flex">
        <div className="flex-1 p-10 mx-auto max-w-5xl ">
          <h2 className="text-center md:text-left ml-11 mb-6 mt-10 scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tighter transition-colors first:mt-0">
            Sign up
          </h2>
          <p className="text-center md:text-left ml-11 italic text-lg">
            Create your account below:
          </p>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <Card className="p-6 m-10">
              <Input
                className="mb-4 text-base text-center md:text-left bg-slate-200 min-w-max	"
                placeholder="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <Input
                className="mb-4 text-base text-center md:text-left bg-slate-200	 "
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <Input
                className="mb-4 text-base text-center md:text-left bg-slate-200	"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <Input
                className="text-base text-center md:text-left bg-slate-200	"
                placeholder="Confirm Password"
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
            </Card>
            <Button
              className="m-5 p-5 text-base mx-auto transition delay-150 hover:bg-amber-500 duration-300"
              type="submit"
              disabled={disable}
            >
              SIGN UP
            </Button>
          </form>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
  }
}
