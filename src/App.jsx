import React, { useState } from 'react';
import { 
  Shield, User, Users, History, Info, 
  ChevronRight, Bell, Search, Plus, 
  ArrowLeft, CheckCircle, AlertTriangle, Download, 
  Upload, FileText, X, UserPlus, Save
} from 'lucide-react';

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedAudit, setSelectedAudit] = useState(null);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [members, setMembers] = useState([]);

  const nextStep = () => setStep((prev) => (prev < 5 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const handleFileUpload = (e) => {
    setIsUploading(true);
    setTimeout(() => {
      setFile(e.target.files[0]);
      setIsUploading(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans">
      
      
      <aside className="w-72 bg-white border-r border-slate-200 p-8 flex flex-col sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
            <Shield className="text-white" size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">TrustCensus</span>
        </div>
        
        <nav className="space-y-1.5 flex-1">
          <NavItem icon={<User size={18}/>} label="Personal Info" active={step === 1} onClick={() => {setStep(1); setIsAddingMember(false);}} />
          <NavItem icon={<FileText size={18}/>} label="ID Verification" active={step === 2} onClick={() => {setStep(2); setIsAddingMember(false);}} />
          <NavItem icon={<Users size={18}/>} label="Household Graph" active={step === 3} onClick={() => setStep(3)} />
          <NavItem icon={<History size={18}/>} label="System Audit" active={step === 4} onClick={() => setStep(4)} />
        </nav>

        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Node Secure</span>
          </div>
          <p className="text-[9px] text-slate-400 font-mono">ID: SEC_LAYER_7</p>
        </div>
      </aside>

      
      <main className="flex-1 p-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase tracking-tighter">Digital Census</h1>
              <p className="text-slate-500 mt-1 text-lg font-medium tracking-tight">Step {step} of 5</p>
            </div>
            <div className="flex items-center gap-3 bg-white border border-slate-200 p-1.5 pr-4 rounded-2xl shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl"></div>
              <span className="font-bold text-sm text-slate-700">Citizen #104</span>
            </div>
          </div>

          
          {!isAddingMember && (
            <div className="grid grid-cols-5 gap-4 mb-8 animate-in fade-in duration-300">
              <StepperItem number="01" label="Info" active={step === 1} done={step > 1} />
              <StepperItem number="02" label="ID Card" active={step === 2} done={step > 2} />
              <StepperItem number="03" label="Relations" active={step === 3} done={step > 3} />
              <StepperItem number="04" label="Audit" active={step === 4} done={step > 4} />
              <StepperItem number="05" label="Receipt" active={step === 5} />
            </div>
          )}

          
          <div className="bg-white rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden min-h-[540px] flex flex-col">
            <div className="p-10 flex-1">
              
              
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
                  <p className="text-slate-500 mb-8 font-medium italic text-sm text-blue-600/70">Verified by Decentralized Identity Protocol.</p>
                  <div className="space-y-6 max-w-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      <InputGroup label="Full Name" placeholder="Rahul Sharma" />
                      <InputGroup label="Community" placeholder="Select community..." />
                    </div>
                    <InputGroup label="Declaration Type" placeholder="Head of Household" />
                  </div>
                </div>
              )}

              
              {step === 2 && (
                <div className="animate-in slide-in-from-right duration-500 max-w-2xl mx-auto text-center">
                  <h2 className="text-2xl font-bold mb-2 tracking-tight text-slate-800">Verify Identity</h2>
                  <p className="text-slate-500 mb-8 font-medium italic text-sm">Upload a government-issued identification card.</p>
                  
                  <div className={`relative border-2 border-dashed rounded-[32px] p-12 transition-all ${file ? 'border-green-200 bg-green-50/30' : 'border-slate-200 hover:border-blue-400 bg-slate-50/50'}`}>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleFileUpload} />
                    <div className="flex flex-col items-center">
                      {isUploading ? <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full" /> : 
                       file ? <CheckCircle className="text-green-500 mb-2" size={40}/> : <Upload className="text-slate-300 mb-2" size={40}/>}
                      <p className="font-bold text-slate-700 mt-2">{file ? file.name : "Drop ID Card here"}</p>
                    </div>
                  </div>
                </div>
              )}

              
              {step === 3 && (
                <div className="animate-in slide-in-from-right duration-500">
                  {!isAddingMember ? (
                    <>
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight text-slate-800 uppercase tracking-tighter">Household Network</h2>
                          <p className="text-sm text-slate-500 font-medium">Map your dependents to verify relationship integrity.</p>
                        </div>
                        <button 
                          onClick={() => setIsAddingMember(true)}
                          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-100 transition active:scale-95"
                        >
                          <Plus size={18} /> Add Family Member
                        </button>
                      </div>
                      
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 bg-slate-50 border-2 border-blue-100 rounded-[28px] flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
                            <User size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">Rahul Sharma (You)</p>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Primary Declarer</p>
                          </div>
                        </div>
                        
                        {members.map((m, i) => (
                          <div key={i} className="p-6 bg-white border border-slate-100 rounded-[28px] shadow-sm flex items-center gap-4 animate-in zoom-in-50 duration-300">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                              <Users size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-slate-800">{m.name}</p>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{m.relation}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    
                    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
                      <button onClick={() => setIsAddingMember(false)} className="flex items-center gap-2 text-slate-400 font-bold text-sm mb-6 hover:text-slate-800">
                        <ArrowLeft size={16}/> Cancel and Return
                      </button>
                      
                      <div className="bg-slate-50/50 border border-slate-100 rounded-[32px] p-8">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                            <UserPlus size={28} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Family Member Details</h3>
                            <p className="text-sm text-slate-500 font-medium">Link this person to your household node.</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <InputGroup label="Full Name" placeholder="e.g. Priya Sharma" />
                            <InputGroup label="Relationship" placeholder="Spouse / Child / Parent" />
                          </div>
                          
                          
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Identification Card</label>
                             <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center bg-white hover:border-blue-400 transition cursor-pointer">
                               <Upload className="text-slate-300 mb-2" size={24} />
                               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Click to upload ID Card</p>
                             </div>
                          </div>

                          <button 
                            onClick={() => {
                              setMembers([...members, {name: "Family Member", relation: "Linked Node"}]);
                              setIsAddingMember(false);
                            }}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition shadow-xl"
                          >
                            <Save size={18} /> Save Member to Household
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              
              {step === 4 && (
                <div className="animate-in zoom-in duration-500">
                  <h2 className="text-2xl font-bold mb-6">Integrity Audit</h2>
                  <div className="space-y-4">
                    <VerificationRow title="Identity Uniqueness" status="success" desc="Registry check complete." isSelected={selectedAudit === 0} onClick={() => setSelectedAudit(0)} />
                    <VerificationRow title="Graph Consistency" status="warning" desc="Warning: Family link conflict detected." warning="Facilitator review triggered." isSelected={selectedAudit === 1} onClick={() => setSelectedAudit(1)} />
                    <VerificationRow title="Encryption Verified" status="success" desc="E2E Protocol is active." isSelected={selectedAudit === 2} onClick={() => setSelectedAudit(2)} />
                  </div>
                </div>
              )}

              
              {step === 5 && (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Registration Secured</h2>
                  <p className="text-slate-500 mb-8 max-w-xs mx-auto font-medium">Your household graph has been hashed and submitted to the Transparency Log.</p>
                  <button onClick={() => setStep(1)} className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">Download Final Receipt</button>
                </div>
              )}
            </div>

            
            {!isAddingMember && (
              <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                {step > 1 ? (
                  <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                  </button>
                ) : <div />}

                <button 
                  onClick={nextStep} 
                  className="group flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95"
                >
                  {step === 4 ? "Finalize & Sign" : "Save & Continue"}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};



const NavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-slate-50'}`}>
    {icon} <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);

const StepperItem = ({ number, label, active, done }) => (
  <div className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${active ? 'bg-white border-blue-200 shadow-sm' : 'border-transparent opacity-40'}`}>
    <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${done ? 'bg-green-500 text-white' : active ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{done ? '✓' : number}</span>
    <span className={`font-bold text-[10px] uppercase tracking-widest ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
  </div>
);

const InputGroup = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{label}</label>
    <input type="text" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium placeholder:text-slate-300" placeholder={placeholder} />
  </div>
);

const VerificationRow = ({ title, desc, status, warning, isSelected, onClick }) => (
  <div onClick={onClick} className={`p-5 rounded-2xl border cursor-pointer transition-all ${isSelected ? 'ring-2 ring-blue-600 bg-blue-50/50' : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'}`}>
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${status === 'success' ? 'bg-green-100 text-green-600' : status === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600 animate-pulse'}`}>
        {status === 'success' ? <CheckCircle size={20}/> : status === 'warning' ? <AlertTriangle size={20}/> : <Search size={20}/>}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs text-slate-500 font-medium">{desc}</p>
        {warning && <p className="text-[10px] text-amber-700 font-bold mt-1 uppercase">⚠️ {warning}</p>}
      </div>
      <div className="text-[9px] font-black text-slate-300 uppercase">{isSelected ? 'Selected' : status}</div>
    </div>
  </div>
);

export default App;
