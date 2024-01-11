
import './App.css';

import { Link, Route } from 'wouter'
import DecimalABinario from './components/DecimalABinario';
import BinarioADecimal from './components/BinarioADecimal';

import githubImage from './assets/github.png'
import linkedinImage from './assets/linkedin.png'
import mailImage from './assets/mail.png'
import websiteImage from './assets/website.png'


function App()
{


  return (
    <>
      <header>
        <h2 className=' mb-2 text-2xl text-white'>Binary App</h2>
      </header>

      <div className='flex flex-col lg:flex lg:flex-row justify-center'>
        <Link href='/'>
          <a className='lg:mx-5' href="/">Decimal a Binario</a>
        </Link>

        <Link href='binario-a-decimal'>
          <a className='lg:mx-5' href="/binario-a-decimal">Binario a Decimal</a>
        </Link>
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


      <footer className=''>

        <div className='flex flex-row gap-7 lg:gap-20 justify-center'>

          <a href="https://github.com/DylanAMendez" rel='noreferrer' target="_blank">
            <img
              src={githubImage}
              alt="GitHub Logo"
              title="GitHub"
              className='w-11'
            >
            </img>
          </a>


          <a href="mailto:dylanmendezdev@gmail.com?subject=¡Trabajemos Juntos!" rel='noreferrer' target="_blank">
            <img
              src={mailImage}
              alt="GitHub Logo"
              title="GitHub"
              className='w-11'
            >
            </img>
          </a>

          <a href="https://dylan-mendez.vercel.app" rel='noreferrer' target="_blank">
            <img
              src={websiteImage}
              alt="Website Logo"
              title="Website"
              className='w-11'
            >
            </img>
          </a>

          <a href="https://www.linkedin.com/in/dylanmendez/" rel='noreferrer' target="_blank">
            <img
              src={linkedinImage}
              alt="LinkedIn Logo"
              title="LinkedIn"
              className='w-11'
            >

            </img>
          </a>

        </div>



      </footer>
    </>
  );
}

export default App;
