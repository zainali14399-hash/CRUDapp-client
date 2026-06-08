import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userAPI from "../api/userAPI";
import { useState } from "react";
import { toast } from "sonner";

function UserForm() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (userData) => {
    setLoading(true);
    try {
      const res = await userAPI.registerUser(userData);
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f2f1] p-4">

      {/* Compact Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-100 p-5">

        {/* Header */}
        <div className="relative mb-5 text-center">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 text-xs text-gray-500 hover:text-[#6264a7]"
          >
            ← Back
          </button>

          <h2 className="text-lg font-semibold text-gray-800">
            Add User
          </h2>
          <p className="text-xs text-gray-500">
            Create new system user
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

          {/* Name */}
          <div>
            <input
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-[#6264a7] outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">Name required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-[#6264a7] outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full p-2.5 text-sm border rounded-md focus:ring-2 focus:ring-[#6264a7] outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password required</p>
            )}
          </div>

          {/* Role + Status */}
          <div className="grid grid-cols-2 gap-2">

            <select
              {...register("role", { required: true })}
              className="p-2.5 text-sm border rounded-md"
            >
              <option value="">Role</option>
              <option>Admin</option>
              <option>Teacher</option>
              <option>Student</option>
            </select>

            <select
              {...register("status", { required: true })}
              className="p-2.5 text-sm border rounded-md"
            >
              <option value="">Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#6264a7] text-white py-2.5 text-sm rounded-md hover:bg-[#4f52a0] transition"
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}

              {loading ? "Saving..." : "Save"}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-200 text-gray-700 py-2.5 text-sm rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default UserForm;