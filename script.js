* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

body {
    min-height: 100vh;
    background: radial-gradient(circle at 30% 10%, #030614, #000000);
    font-family: 'Inter', 'Orbitron', 'Share Tech Mono', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    overflow-x: hidden;
}

.cyber-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: radial-gradient(ellipse at 50% 30%, #0a1120, #000000);
}

.grid-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(0, 255, 255, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 55px 55px;
    animation: gridShift 25s linear infinite;
    pointer-events: none;
    z-index: 1;
}
@keyframes gridShift {
    0% { background-position: 0 0; }
    100% { background-position: 55px 55px; }
}

#starCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    opacity: 0.8;
}

.game-container {
    position: relative;
    z-index: 20;
    max-width: 1300px;
    width: 100%;
    background: rgba(4, 10, 20, 0.75);
    backdrop-filter: blur(18px);
    border-radius: 56px;
    border: 1px solid rgba(0, 255, 255, 0.7);
    box-shadow: 0 30px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(0, 255, 255, 0.3), 0 0 35px rgba(0, 200, 255, 0.3);
    padding: 28px;
    transition: all 0.3s;
}

/* Pantalla bienvenida */
.welcome-screen {
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 5px cyan;
}
.welcome-screen h1 {
    font-family: 'Orbitron', monospace;
    font-size: 2.8rem;
    background: linear-gradient(135deg, #ff44cc, #ffcc44, #44ffcc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 20px;
}
.welcome-screen p {
    color: #ccf0ff;
    font-size: 1.1rem;
    margin-bottom: 20px;
}
.welcome-screen input {
    background: #001c2ad9;
    border: 2px solid #ffcc44;
    color: #ffffff;
    padding: 14px 24px;
    font-size: 1.2rem;
    border-radius: 60px;
    width: 80%;
    max-width: 350px;
    text-align: center;
    margin: 20px 0;
    font-family: 'Orbitron', monospace;
}
.welcome-screen input::placeholder {
    color: #ffdd99;
    font-size: 0.9rem;
}
.welcome-screen button {
    background: linear-gradient(145deg, #ffcc44, #ffaa22);
    border: none;
    color: #0a0f1a;
    font-weight: bold;
    padding: 14px 36px;
    border-radius: 60px;
    font-size: 1.3rem;
    cursor: pointer;
    font-family: 'Orbitron', monospace;
    box-shadow: 0 0 15px rgba(255,204,68,0.6);
    transition: 0.2s;
}
.welcome-screen button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px gold;
}

/* Header */
.tech-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 28px;
    gap: 15px;
    border-bottom: 2px solid #ff44cc;
    padding-bottom: 15px;
}
.score-area, .lives-area, .level-area, .player-name {
    background: rgba(0, 0, 0, 0.7);
    padding: 8px 20px;
    border-radius: 40px;
    font-weight: bold;
    font-family: 'Orbitron', monospace;
    border-left: 4px solid #0ff;
    color: #eef5ff;
    backdrop-filter: blur(5px);
}
.score-area span, .lives-area span, .level-area span, .player-name span {
    color: #ffcc44;
    font-size: 1.3rem;
    text-shadow: 0 0 5px #ffaa00;
}
.player-name span {
    color: #ff88ff;
}

/* Enemigo */
.enemy-panel {
    background: #0a0f1eee;
    border-radius: 30px;
    padding: 16px 24px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px solid #ff6688;
    box-shadow: 0 0 12px rgba(255,68,102,0.4);
}
.enemy-name {
    font-family: 'Orbitron';
    color: #ff88aa;
    font-weight: bold;
    font-size: 1.2rem;
}
.enemy-hp {
    background: #330000;
    height: 14px;
    width: 220px;
    border-radius: 20px;
    overflow: hidden;
}
.hp-bar {
    background: linear-gradient(90deg, #ff4466, #ffaa66);
    width: 100%;
    height: 100%;
    transition: width 0.3s;
}
.enemy-stats {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #ffccaa;
}

/* Panel preguntas */
.quiz-panel {
    background: rgba(2, 18, 30, 0.7);
    border-radius: 48px;
    padding: 24px;
    margin: 20px 0;
    border: 1px solid #0ff;
}
.question-text {
    font-size: 1.7rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #aaffff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 25px;
}
.options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
}
.opt-btn {
    background: linear-gradient(125deg, #0a1a2a, #021018);
    border: 1.5px solid #1cc6ff;
    color: #e0f5ff;
    padding: 14px;
    border-radius: 60px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}
.opt-btn:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    background: #0e3a55;
    border-color: #ff44dd;
    box-shadow: 0 0 15px #0ff;
}
.correct-feedback { background: #00b87c; box-shadow: 0 0 20px #00ffaa; animation: blinkGreen 0.4s; }
.wrong-feedback { background: #d43f6f; box-shadow: 0 0 15px #ff4466; animation: shake 0.3s; }
@keyframes blinkGreen { 0%{background:#0f6;} 100%{background:#00b87c;} }
@keyframes shake { 0%{transform:translateX(0);} 25%{transform:translateX(-5px);} 75%{transform:translateX(5px);} }

/* Inventario de datos curiosos */
.facts-section {
    background: rgba(1, 15, 22, 0.85);
    border-radius: 28px;
    padding: 16px;
    margin-top: 20px;
    border-left: 5px solid #ff44ff;
}
.facts-title {
    color: #ffcc66;
    font-family: 'Orbitron';
    margin-bottom: 12px;
    font-size: 1.2rem;
}
.facts-list {
    list-style: none;
    max-height: 150px;
    overflow-y: auto;
}
.facts-list li {
    background: #021a24aa;
    margin: 8px 0;
    padding: 10px 15px;
    border-radius: 28px;
    font-size: 0.85rem;
    color: #d4f4ff;
    border-left: 3px solid cyan;
}
.facts-list::-webkit-scrollbar { width: 5px; }
.facts-list::-webkit-scrollbar-track { background: #001c2a; border-radius: 10px; }
.facts-list::-webkit-scrollbar-thumb { background: #ff44ff; border-radius: 10px; }

/* Notificaciones aleatorias (esquina inferior izquierda) */
.random-fact-container {
    position: fixed;
    bottom: 25px;
    left: 25px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 12px;
    pointer-events: none;
    max-width: 350px;
}
.random-toast {
    background: #0a1428ee;
    backdrop-filter: blur(20px);
    border-left: 6px solid #ff44ff;
    border-radius: 18px;
    padding: 12px 20px;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: bold;
    box-shadow: 0 8px 20px rgba(0,0,0,0.5), 0 0 12px rgba(255,68,255,0.4);
    animation: slideInLeft 0.3s ease forwards, fadeOutLeft 0.4s ease 6s forwards;
    font-family: monospace;
}
@keyframes slideInLeft {
    from { transform: translateX(-120%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
@keyframes fadeOutLeft {
    to { opacity: 0; transform: translateX(-30px); visibility: hidden; }
}

/* Botón reinicio */
.reset-btn {
    background: #0e2a38;
    border: 2px solid #ffcc44;
    color: #ffcc44;
    padding: 12px 32px;
    border-radius: 60px;
    cursor: pointer;
    margin-top: 20px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    font-family: 'Orbitron', monospace;
    transition: 0.2s;
}
.reset-btn:hover {
    background: #ffcc44;
    color: #0a0f1a;
    box-shadow: 0 0 20px #ffcc44;
}
.game-status {
    margin: 15px 0 5px;
    font-size: 1rem;
    text-align: center;
    color: #bbffdd;
    background: #000000aa;
    padding: 10px;
    border-radius: 60px;
    border: 1px solid #ffaa44;
}
button:disabled { opacity: 0.5; cursor: not-allowed; }
.hidden { display: none; }

/* Pantalla de derrota */
.defeat-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #1a0000, #000000);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: bgPulse 0.5s infinite alternate;
    backdrop-filter: blur(12px);
}
@keyframes bgPulse {
    0% { background: radial-gradient(circle, #2a0000, #000000); }
    100% { background: radial-gradient(circle, #6a0000, #1a0000); }
}
.defeat-content {
    text-align: center;
    animation: shakeDefeat 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shakeDefeat {
    0% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(-8px, 4px) rotate(-2deg); }
    40% { transform: translate(8px, -4px) rotate(2deg); }
    60% { transform: translate(-4px, 2px) rotate(-1deg); }
    80% { transform: translate(4px, -2px) rotate(1deg); }
    100% { transform: translate(0, 0) rotate(0); }
}
.defeat-title {
    font-family: 'Orbitron', monospace;
    font-size: 4.5rem;
    font-weight: bold;
    color: #ff3366;
    text-shadow: 0 0 20px red, 0 0 40px #ff0000;
    letter-spacing: 6px;
    margin-bottom: 20px;
}
.defeat-message {
    font-size: 1.3rem;
    color: #ffaaaa;
    background: #000000aa;
    padding: 15px 30px;
    border-radius: 60px;
    backdrop-filter: blur(12px);
    border: 1px solid #ff4466;
    margin-bottom: 30px;
}
.defeat-button {
    background: #ff3366;
    border: none;
    color: white;
    font-size: 1.3rem;
    padding: 12px 32px;
    border-radius: 60px;
    cursor: pointer;
    font-family: 'Orbitron';
    font-weight: bold;
    transition: 0.2s;
    box-shadow: 0 0 20px #ff3366;
}
.defeat-button:hover {
    transform: scale(1.05);
    background: #ff6699;
}

/* Pantalla de victoria épica */
.victory-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, #0a2a3a, #000000);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: victoryGlow 1s ease-in-out infinite alternate;
    backdrop-filter: blur(8px);
}
@keyframes victoryGlow {
    0% { background: radial-gradient(ellipse at center, #0a2a3a, #000000); box-shadow: inset 0 0 0px gold; }
    100% { background: radial-gradient(ellipse at center, #1a4a6a, #020a10); box-shadow: inset 0 0 50px rgba(255,215,0,0.3); }
}
.victory-content {
    text-align: center;
    animation: riseVictory 0.6s cubic-bezier(0.2, 1.3, 0.4, 1) forwards;
}
@keyframes riseVictory {
    from { transform: scale(0.5) translateY(50px); opacity: 0; }
    to { transform: scale(1) translateY(0); opacity: 1; }
}
.victory-title {
    font-family: 'Orbitron', monospace;
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(135deg, #ffdd88, #ffaa44, #ffdd88);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 20px rgba(255,200,0,0.8);
    letter-spacing: 8px;
    margin-bottom: 20px;
    animation: textGlitch 0.3s infinite alternate;
}
@keyframes textGlitch {
    0% { text-shadow: -2px 0 red, 2px 0 cyan; }
    100% { text-shadow: 2px 0 red, -2px 0 cyan; }
}
.victory-subtitle {
    font-size: 1.8rem;
    color: #ffdd99;
    margin-bottom: 30px;
    font-family: monospace;
    background: rgba(0,0,0,0.5);
    display: inline-block;
    padding: 10px 30px;
    border-radius: 60px;
    backdrop-filter: blur(8px);
    border: 1px solid gold;
}
.victory-stats {
    background: rgba(0,0,0,0.6);
    border-radius: 40px;
    padding: 20px 40px;
    margin: 20px auto;
    width: fit-content;
    font-size: 1.3rem;
    color: #ccffaa;
    font-family: monospace;
    backdrop-filter: blur(12px);
    border-left: 5px solid #ffcc44;
}
.victory-stats span {
    color: #ffcc44;
    font-weight: bold;
    font-size: 1.8rem;
}
.victory-button {
    background: linear-gradient(145deg, #ffcc44, #ffaa22);
    border: none;
    color: #0a0f1a;
    font-size: 1.4rem;
    padding: 15px 40px;
    border-radius: 80px;
    cursor: pointer;
    font-family: 'Orbitron';
    font-weight: bold;
    margin-top: 30px;
    transition: 0.2s;
    box-shadow: 0 0 25px gold;
}
.victory-button:hover {
    transform: scale(1.08);
    box-shadow: 0 0 40px #ffcc44;
}

/* Fuegos artificiales */
#fireworksCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    pointer-events: none;
}

@media (max-width: 700px) {
    .victory-title { font-size: 2.5rem; letter-spacing: 4px; }
    .victory-subtitle { font-size: 1.2rem; }
    .random-fact-container { bottom: 15px; left: 15px; max-width: 260px; }
    .game-container { padding: 18px; }
}
