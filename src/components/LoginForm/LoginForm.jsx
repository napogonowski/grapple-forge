import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="flex">
      <div className="flex-1 p-10 mx-auto max-w-5xl ">
        <h2 className="text-center md:text-left ml-11 mb-6 mt-10 scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tighter transition-colors first:mt-0">
          Log in
        </h2>
        <p className="text-center md:text-left ml-11 italic text-lg">
          Welcome back Juijiteiro:
        </p>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <Card className="p-6 m-10">
            <Input
              className="mb-4 text-base text-center md:text-left min-w-max bg-slate-200  "
              type="text"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <Input
              className="text-base text-center md:text-left bg-slate-200"
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Card>

          <Button
            className=" p-5 text-base mx-auto transition delay-150  hover:bg-amber-500 duration-300"
            type="submit"
          >
            LOG IN
          </Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
