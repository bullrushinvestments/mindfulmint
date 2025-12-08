import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

interface Test {
  id?: string;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [test, setTest] = useState<Test>({ title: '', description: '' });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };

  const createTestMutation = useMutation({
    mutationFn: async ({ title, description }: Test) => {
      try {
        const response = await axios.post('/api/tests', { title, description });
        return response.data;
      } catch (error) {
        throw new Error('Failed to create test');
      }
    },
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!test.title || !test.description) return;
    createTestMutation.mutate(test);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Create a New Test</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={test.title}
            onChange={handleInputChange}
            required
            aria-label="Test title"
            className="border p-2 rounded focus:ring-1 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={test.description}
            onChange={handleInputChange}
            required
            aria-label="Test description"
            rows={4}
            className="border p-2 rounded focus:ring-1 focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={!test.title || !test.description} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create Test
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

interface Test {
  id?: string;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [test, setTest] = useState<Test>({ title: '', description: '' });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };

  const createTestMutation = useMutation({
    mutationFn: async ({ title, description }: Test) => {
      try {
        const response = await axios.post('/api/tests', { title, description });
        return response.data;
      } catch (error) {
        throw new Error('Failed to create test');
      }
    },
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!test.title || !test.description) return;
    createTestMutation.mutate(test);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Create a New Test</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={test.title}
            onChange={handleInputChange}
            required
            aria-label="Test title"
            className="border p-2 rounded focus:ring-1 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={test.description}
            onChange={handleInputChange}
            required
            aria-label="Test description"
            rows={4}
            className="border p-2 rounded focus:ring-1 focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={!test.title || !test.description} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create Test
        </button>
      </form>
    </div>
  );
};

export default WriteTests;