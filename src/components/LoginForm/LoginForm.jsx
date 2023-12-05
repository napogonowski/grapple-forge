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
    <div className="  ">
      <div className="flex-1 p-10 ">
        <h2 className="text-left ml-11 mb-6 mt-10 scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tighter transition-colors first:mt-0">
          Log in
        </h2>
        <p className="text-left ml-11 italic text-base">
          Welcome back Juijiteiro:
        </p>

        <form
          className=" p-10 text-base "
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Card className="p-2 m-2">
            <Input
              className="mb-4 text-base"
              type="text"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <Input
              className="mb-4 text-base"
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Card>

          <Button className="p-3 m-2 w-[120px]" type="submit">
            LOG IN
          </Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
