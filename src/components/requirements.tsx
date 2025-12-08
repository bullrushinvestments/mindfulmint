import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsProps> = ({ onSubmit }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();

  useEffect(() => {
    // Fetch initial requirements from API or local data source
    axios.get('/api/requirements')
      .then(response => setRequirements(response.data))
      .catch(error => console.error('Failed to fetch requirements:', error));
  }, []);

  const handleAddRequirement = () => {
    setRequirements([...requirements, { id: crypto.randomUUID(), name: '', description: '', isEssential: false }]);
  };

  const handleRemoveRequirement = (id: string) => {
    setRequirements(requirements.filter(req => req.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;
    requirements[index][name as keyof Requirement] = value;
    setRequirements([...requirements]);
  };

  const handleToggleEssential = (id: string) => {
    setRequirements(requirements.map(req =>
      req.id === id ? { ...req, isEssential: !req.isEssential } : req
    ));
  };

  const handleSubmitForm = (data: any) => {
    onSubmit(requirements);
    router.push('/confirmation'); // Redirect to confirmation page or handle as needed
  };

  return (
    <form className="p-6" onSubmit={handleSubmit(handleSubmitForm)}>
      {requirements.map((req, index) => (
        <div key={req.id} className="mb-4">
          <label htmlFor={`name-${index}`} className="block mb-2">Name</label>
          <input
            id={`name-${index}`}
            type="text"
            {...register(`name.${index}`)}
            value={req.name}
            onChange={(e) => handleChange(e, index)}
            className={clsx('w-full px-3 py-2 border rounded', formState.errors[`name.${index}`] && 'border-red-500')}
          />
          <label htmlFor={`description-${index}`} className="block mb-2 mt-1">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`description.${index}`)}
            value={req.description}
            onChange={(e) => handleChange(e, index)}
            rows={3}
            className={clsx('w-full px-3 py-2 border rounded', formState.errors[`description.${index}`] && 'border-red-500')}
          />
          <div className="flex items-center mt-1">
            <input
              id={`isEssential-${index}`}
              type="checkbox"
              checked={req.isEssential}
              onChange={() => handleToggleEssential(req.id)}
              aria-label={`Mark requirement as essential`}
              className="mr-2"
            />
            <label htmlFor={`isEssential-${index}`} className="text-sm">Essential</label>
          </div>
        </div>
      ))}
      <button type="submit" disabled={formState.isSubmitting} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        {formState.isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsProps> = ({ onSubmit }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();

  useEffect(() => {
    // Fetch initial requirements from API or local data source
    axios.get('/api/requirements')
      .then(response => setRequirements(response.data))
      .catch(error => console.error('Failed to fetch requirements:', error));
  }, []);

  const handleAddRequirement = () => {
    setRequirements([...requirements, { id: crypto.randomUUID(), name: '', description: '', isEssential: false }]);
  };

  const handleRemoveRequirement = (id: string) => {
    setRequirements(requirements.filter(req => req.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;
    requirements[index][name as keyof Requirement] = value;
    setRequirements([...requirements]);
  };

  const handleToggleEssential = (id: string) => {
    setRequirements(requirements.map(req =>
      req.id === id ? { ...req, isEssential: !req.isEssential } : req
    ));
  };

  const handleSubmitForm = (data: any) => {
    onSubmit(requirements);
    router.push('/confirmation'); // Redirect to confirmation page or handle as needed
  };

  return (
    <form className="p-6" onSubmit={handleSubmit(handleSubmitForm)}>
      {requirements.map((req, index) => (
        <div key={req.id} className="mb-4">
          <label htmlFor={`name-${index}`} className="block mb-2">Name</label>
          <input
            id={`name-${index}`}
            type="text"
            {...register(`name.${index}`)}
            value={req.name}
            onChange={(e) => handleChange(e, index)}
            className={clsx('w-full px-3 py-2 border rounded', formState.errors[`name.${index}`] && 'border-red-500')}
          />
          <label htmlFor={`description-${index}`} className="block mb-2 mt-1">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`description.${index}`)}
            value={req.description}
            onChange={(e) => handleChange(e, index)}
            rows={3}
            className={clsx('w-full px-3 py-2 border rounded', formState.errors[`description.${index}`] && 'border-red-500')}
          />
          <div className="flex items-center mt-1">
            <input
              id={`isEssential-${index}`}
              type="checkbox"
              checked={req.isEssential}
              onChange={() => handleToggleEssential(req.id)}
              aria-label={`Mark requirement as essential`}
              className="mr-2"
            />
            <label htmlFor={`isEssential-${index}`} className="text-sm">Essential</label>
          </div>
        </div>
      ))}
      <button type="submit" disabled={formState.isSubmitting} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        {formState.isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;