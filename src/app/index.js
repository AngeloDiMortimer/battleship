import '../style/style.css';
import { elements } from './views/base';
import Game from './modules/factories/game';

// Event listeners

// 1. Event Listener for game type singleplayer / multiplayer (only singleplayer at the moment)

let gameType = 'singleplayer';
let game = Game(gameType);

//1.1 render empty grids
game.renderGrids();

//1.2 Render Fleet + EventListeners for Drag-n-drop
game.renderFleet();

//2. EventListener for Auto-Place button or Drag-n-drop
elements.autoPlaceBtn.addEventListener('click', (e) =>{
    console.log('autoplaced player fleet');
    game.autoPlace();
});