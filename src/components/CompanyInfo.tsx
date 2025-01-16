import React from 'react';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-center mb-8">
              <Building2 className="h-16 w-16 text-indigo-600" />
            </div>
            <h3 className="text-3xl leading-6 font-bold text-gray-900 text-center mb-8">
              Company Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Building2 className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Company</p>
                  <p className="mt-1 text-lg text-gray-900">Geeksynergy Technologies Pvt Ltd</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="mt-1 text-lg text-gray-900">Sanjayanagar, Bengaluru-56</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="mt-1 text-lg text-gray-900">XXXXXXXXX09</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1 text-lg text-gray-900">XXXXXX@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}