import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data or perform any initialization logic here
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [event.target.name]: event.target.value
    });
  };

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newFeatures = [...specification.features];
    newFeatures[index] = event.target.value;
    setSpecification({ ...specification, features: newFeatures });
  };

  const addNewFeature = () => {
    setSpecification({
      ...specification,
      features: [...specification.features, '']
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = specification.features.filter((_, i) => i !== index);
    setSpecification({ ...specification, features: newFeatures });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/create-business-spec', specification);
      // Handle success
    } catch (err) {
      setError('Failed to create business specification');
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div role="alert" aria-live="assertive" className="text-red-500">{error}</div>}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={specification.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            value={specification.description}
            onChange={handleInputChange}
            rows={3}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
          {specification.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 mb-3">
              <input
                type="text"
                name={`features[${index}]`}
                value={feature}
                onChange={(e) => handleFeatureChange(e, index)}
                required
                className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button onClick={() => removeFeature(index)} type="button" className="text-red-600 hover:text-red-900">
                Remove
              </button>
            </div>
          ))}
          <button onClick={addNewFeature} type="button" className="mt-2 text-blue-500 hover:text-blue-700">
            Add Feature
          </button>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className={clsx('w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', { 'cursor-not-allowed opacity-50': loading })}
          >
            Create Business Specification
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data or perform any initialization logic here
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [event.target.name]: event.target.value
    });
  };

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newFeatures = [...specification.features];
    newFeatures[index] = event.target.value;
    setSpecification({ ...specification, features: newFeatures });
  };

  const addNewFeature = () => {
    setSpecification({
      ...specification,
      features: [...specification.features, '']
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = specification.features.filter((_, i) => i !== index);
    setSpecification({ ...specification, features: newFeatures });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/create-business-spec', specification);
      // Handle success
    } catch (err) {
      setError('Failed to create business specification');
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div role="alert" aria-live="assertive" className="text-red-500">{error}</div>}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={specification.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            value={specification.description}
            onChange={handleInputChange}
            rows={3}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
          {specification.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 mb-3">
              <input
                type="text"
                name={`features[${index}]`}
                value={feature}
                onChange={(e) => handleFeatureChange(e, index)}
                required
                className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button onClick={() => removeFeature(index)} type="button" className="text-red-600 hover:text-red-900">
                Remove
              </button>
            </div>
          ))}
          <button onClick={addNewFeature} type="button" className="mt-2 text-blue-500 hover:text-blue-700">
            Add Feature
          </button>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className={clsx('w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', { 'cursor-not-allowed opacity-50': loading })}
          >
            Create Business Specification
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;