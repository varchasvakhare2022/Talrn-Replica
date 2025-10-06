import { useState } from "react";
import IndividualForm from "../components/IndividualForm";
import OrganizationForm from "../components/OrganizationForm";

export default function Join() {
  const [formType, setFormType] = useState<"organization" | "individual">(
    "organization" // default form
  );

  return (
    <main className="min-h-screen  bg-blue-50 pt-28 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Create your Talrn Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Talrn is an exclusive network of the world’s top talent.
          <br />
          We provide access to top companies and resources that can help
          accelerate your growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 mb-6 max-w-4xl text-center mx-auto">
        <div className="flex items-center justify-center space-x-2">
          <input
            type="radio"
            id="org"
            name="formType"
            value="organization"
            checked={formType === "organization"}
            onChange={() => setFormType("organization")}
            className="cursor-pointer"
          />
          <label htmlFor="org" className="cursor-pointer">
            Organization
          </label>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <input
            type="radio"
            id="ind"
            name="formType"
            value="individual"
            checked={formType === "individual"}
            onChange={() => setFormType("individual")}
            className="cursor-pointer"
          />
          <label htmlFor="ind" className="cursor-pointer">
            Individual
          </label>
        </div>
      </div>

      {/* Conditional Form Rendering */}
      <div className="mt-6">
        {formType === "organization" ? (
          <OrganizationForm />
        ) : (
          <IndividualForm />
        )}
      </div>
    </main>
  );
}
