import { userActions } from "@src/store/slice/userSlice";
import { useAppDispatch } from "@src/store/store";
import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: { email?: string; password?: string } = {};
      if (!values.email) {
        errors.email = "Email or username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (values.email && values.password) {
        setLoginError(null);
        const userData = {
          email: values.email,
          name: values.email.split("@")[0],
        };
        dispatch(userActions.setUserData(userData));
        navigate("/", { replace: true });
      } else {
        setLoginError("Invalid credentials, please try again.");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#121212] px-4">
      <div className="w-full max-w-md bg-[#121212] rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to Spotify
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email or username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="you@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>
          {loginError && (
            <div className="text-red-500 text-sm mt-1">{loginError}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-bold py-2 px-4 rounded hover:bg-[#1ed760] transition duration-200"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-[#1DB954] hover:underline">
            Sign up for Spotify
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
