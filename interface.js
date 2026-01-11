import React from 'react';
import { Shield, Users, FileText, CheckCircle, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-10 text-blue-600">
          <Shield size={28} strokeWidth={2.5} />
          <span className="font-bold text-xl tracking-tight text-gray-900">CasteCensus</span>
        </div>
        
        <nav className="space-y-1">
          <NavItem icon={<Users size={20}/>} label="Citizen Portal" active />
          <NavItem icon={<FileText size={20}/>} label="My Declaration" />
          <NavItem icon={<Activity size={20}/>} label="Transparency Log" />
        </nav>
      </aside>

      
      <main className="flex-1 overflow-y-auto p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Citizen</h1>
          <p className="text-gray-500">Manage your census declaration and track data access.</p>
        </header>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatusCard 
            title="Verification Status" 
            value="Verified" 
            icon={<CheckCircle className="text-green-500" />} 
          />
          <StatusCard 
            title="Households Linked" 
            value="4 Members" 
            icon={<Users className="text-blue-500" />} 
          />
          <StatusCard 
            title="System Integrity" 
            value="100% Secure" 
            icon={<Shield className="text-purple-500" />} 
          />
        </div>

        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-4">Current Progress</h2>
          <div className="w-full bg-gray-100 h-2 rounded-full mb-6">
            <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Continue Registration
          </button>
        </div>
      </main>
    </div>
  );
};


const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${active ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-500 hover:bg-gray-100'}`}>
    {icon} <span>{label}</span>
  </div>
);

const StatusCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
    <div className="p-3 bg-gray-50 rounded-full">{icon}</div>
  </div>
);

export default Dashboard;