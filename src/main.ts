import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { charmander } from './bases/03-classes.ts'

// import { charmander } from './bases/04-injections.ts'
// import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decorators2.ts'


// import { name, age } from './bases/01-types';
// import { bulbasaur, pokemons } from './bases/02-objects.ts'
//     <h1>Hello ${ name } ${ age }</h1>
//     <h1>Hello ${ pokemons.join(',') }</h1>

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello ${charmander.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
