// src/components/History.js
import React, { useState, useEffect } from 'react';
import { getCalculationHistory } from '../Api';

const History = () => {
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getCalculationHistory();
        setCalculations(history.history);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Calculation History</h2>
      <div>
        {calculations.map((calculation, index) => (
          <div key={index} style={{marginTop: '5PX'}}>
            <div style={{backgroundColor: 'white', borderRadius: '5px',}}>
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <div>
                <p style={{fontSize:'14px', fontWeight: '600', textAlign: 'center', margin: '0px'}}>Expression:</p>
                </div>
                <div>
                <p style={{ margin: '0px'}}>{calculation.expression}</p>
                </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>

                  <p style={{fontSize:'14px', fontWeight: '600', textAlign: 'center', margin: '0px'}}>Result:</p>
              <p style={{ margin: '0px'}}>{calculation.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
