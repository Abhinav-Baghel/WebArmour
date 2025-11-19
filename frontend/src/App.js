import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CustomerSection from './components/CustomerSection';
import WhatWeDo from './components/WhatWeDo';
import ReportsSection from './components/ReportsSection';
import PowerSection from './components/PowerSection';
import Footer from './components/Footer';
import ScanReport from './components/Report';
import UseCases from './components/UseCases';

function App() {
  const [report, setReport] = useState(null);
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Home setReport={setReport} report={report} />
              <CustomerSection />
              <WhatWeDo />
              <ReportsSection />
              <PowerSection />
              <Footer />
            </>
          }
        />
        {/* Report Route */}
        <Route path="/report" element={<ScanReport report={report} />} />
        <Route path="/use-cases" element={<UseCases />}/>
      </Routes>
    </>
  );
}

export default App;
