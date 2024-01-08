
import './App.css';

import { Route } from 'wouter'
import DecimalABinario from './components/DecimalABinario';
import BinarioADecimal from './components/BinarioADecimal';

function App()
{


  return (
    <>
      <header>
        <h2 className=' mb-2 text-2xl text-white'>Binary App</h2>
      </header>

      <div className='flex flex-col lg:flex lg:flex-row justify-center'>
        <a className='lg:mx-5' href="/">Decimal a Binario</a>
        <a className='lg:mx-5' href="/binario-a-decimal">Binario a Decimal</a>
      </div>

      <div>
        <Route path='/' component={DecimalABinario} />
        <Route path='/binario-a-decimal' component={BinarioADecimal} />
      </div>


      <table className=' my-12 flex flex-col content-evenly items-center text-left opacity-60  '>
        <thead>
          <tr>
            <th>EJEMPLOS DE CONVERSIÓN</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <p>1 (dec) = 1 (binario)</p>
              <p>2 (dec) = 10 (binario)</p>
              <p>3 (dec) = 11 (binario)</p>
              <p>4 (dec) = 100 (binario)</p>
              <p>5 (dec) = 101 (binario)</p>
              <p>6 (dec) = 110 (binario)</p>
              <p>7 (dec) = 111 (binario)</p>
            </td>
          </tr>
        </tbody>

      </table>


      <footer className=''>Created by <a href="https://dylan-mendez.vercel.app/" target='_blank' rel='noreferrer'>Dylan A. Mendez</a> | © 2024</footer>
    </>
  );
}

export default App;
