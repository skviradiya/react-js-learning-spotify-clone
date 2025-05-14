import { userActions } from "@src/store/slice/userSlice";
import { useAppDispatch } from "@src/store/store";
import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: {
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
      } = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      return errors;
    },
    onSubmit: (values) => {
      if (
        values.firstName &&
        values.lastName &&
        values.email &&
        values.password
      ) {
        setSignupError(null);
        const userData = {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
        };
        dispatch(userActions.setUserData(userData));
        navigate("/", { replace: true });
      } else {
        setSignupError("Invalid input, please fill all fields.");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#121212] px-4">
      <div className="w-full max-w-md bg-[#121212] rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Sign Up for Spotify
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="firstName" className="block text-sm mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="John"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="Doe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.lastName}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
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
          {signupError && (
            <div className="text-red-500 text-sm mt-1">{signupError}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-bold py-2 px-4 rounded hover:bg-[#1ed760] transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <NavLink to="/login" className="text-[#1DB954] hover:underline">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
