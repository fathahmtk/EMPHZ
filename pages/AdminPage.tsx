import React, { useState } from 'react';
import { SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import Button from '../components/Button';

const AdminPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCode, setProductCode] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [datasheetFile, setDatasheetFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleDatasheetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDatasheetFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Simulating product upload:', {
      productName,
      productDescription,
      productCode,
      category,
      imageFile: imageFile?.name,
      datasheetFile: datasheetFile?.name,
    });
    alert('Product data simulated for upload. In a real app, this would go to a backend.');
    // Reset form
    setProductName('');
    setProductDescription('');
    setProductCode('');
    setCategory('');
    setImageFile(null);
    setDatasheetFile(null);
  };

  const formInputStyles = `w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[var(--color-brand)]/80 focus:border-[var(--color-brand)] bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]`;
  const fileInputStyles = `w-full text-sm text-[var(--color-text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-surface-secondary)] file:text-[var(--color-text-primary)] hover:file:bg-[var(--color-border)] file:cursor-pointer`;

  return (
    <>
      <MetaTags
        title={SEO_DATA.admin.title}
        description={SEO_DATA.admin.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">Admin Portal</h1>
        <p className="text-center text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
          Manage EMPHZ product catalog, specifications, and digital assets.
          This is a client-side placeholder; a real-world application would integrate with a secure backend.
        </p>

        <div className="max-w-4xl mx-auto bg-[var(--color-surface-primary)] backdrop-blur-lg p-8 rounded-[var(--radius)] shadow-lg border border-[var(--color-border)]">
          <h2 className="text-2xl font-semibold mb-6">Add/Edit Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className={formInputStyles}
                required
              />
            </div>
            <div>
              <label htmlFor="productCode" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Product Code</label>
              <input
                type="text"
                id="productCode"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className={formInputStyles}
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Product Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={formInputStyles}
                required
              >
                <option value="">Select Category</option>
                <option value="CAT1">GRP Electrical & Utility Enclosures</option>
                <option value="CAT2">GRP Modular & Portable Structures</option>
                <option value="CAT3">GRP Utility & Infrastructure Products</option>
                <option value="CAT4">GRP Industrial Components & Custom Fabrication</option>
                <option value="CAT5">GRP Marine, Offshore & Energy Solutions</option>
                <option value="CAT6">GRP Sustainable & Smart Solutions</option>
              </select>
            </div>
            <div>
              <label htmlFor="productDescription" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Product Description</label>
              <textarea
                id="productDescription"
                rows={4}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className={formInputStyles}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Product Image (e.g., JPEG, PNG)</label>
              <input
                type="file"
                id="imageUpload"
                accept="image/jpeg, image/png"
                onChange={handleImageChange}
                className={fileInputStyles}
              />
              {imageFile && <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Selected file: {imageFile.name}</p>}
            </div>
            <div>
              <label htmlFor="datasheetUpload" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Technical Datasheet (PDF)</label>
              <input
                type="file"
                id="datasheetUpload"
                accept=".pdf"
                onChange={handleDatasheetChange}
                className={fileInputStyles}
              />
              {datasheetFile && <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Selected file: {datasheetFile.name}</p>}
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Upload Product
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage;